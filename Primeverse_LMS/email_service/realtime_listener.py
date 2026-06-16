import os
import logging
from dotenv import load_dotenv
# pyrefly: ignore [missing-import]
from realtime.connection import Socket
# pyrefly: ignore [missing-import]
from supabase import SupabaseRealtimeClient, create_client, Client
from main import process_and_send_welcome_email, process_and_send_progression_email, LESSON_TITLES

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    handlers=[logging.StreamHandler()]
)
logger = logging.getLogger("realtime_listener")

# Load configuration
load_dotenv()

SUPABASE_URL = os.getenv("SUPABASE_URL")
# Service role key is REQUIRED to bypass RLS and listen to database changes successfully
SUPABASE_KEY = os.getenv("SUPABASE_SERVICE_ROLE_KEY")

if not SUPABASE_URL or not SUPABASE_KEY:
    logger.critical("SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY is missing from environment. Exiting.")
    exit(1)

def handle_profiles_insert(payload):
    """
    Callback triggered on INSERT events in profiles table
    """
    logger.info("Database insert event detected via Supabase Realtime!")
    try:
        new_record = payload.get("record")
        if not new_record:
            logger.warning("Event payload is missing 'record' data.")
            return

        email = new_record.get("email")
        full_name = new_record.get("full_name") or "New User"
        password = new_record.get("password") or ""
        selected_course = new_record.get("selected_course") or ""

        if not email:
            logger.warning("No email found in insert record. Skipping.")
            return

        logger.info(f"Triggering welcome email for {full_name} ({email})...")
        process_and_send_welcome_email(full_name, email, password, selected_course)

    except Exception as e:
        logger.error(f"Error handling insert callback: {str(e)}")

def handle_profiles_update(payload):
    """
    Callback triggered on UPDATE events in profiles table
    """
    try:
        new_record = payload.get("record")
        if not new_record:
            logger.warning("Event payload is missing 'record' data.")
            return

        email = new_record.get("email")
        full_name = new_record.get("full_name") or "Trader"
        current_day = new_record.get("current_day")
        last_email_sent_day = new_record.get("last_email_sent_day")
        payment_status = new_record.get("payment_status")

        if not email or current_day is None or last_email_sent_day is None:
            return

        # Only process for paid/free_access users
        if payment_status not in ["paid", "free_access"]:
            return

        # If current_day has advanced beyond last_email_sent_day, trigger progression email
        if current_day > last_email_sent_day and current_day > 1:
            lesson_title = LESSON_TITLES.get(current_day, f"Day {current_day} Module")
            logger.info(f"Day {current_day} unlocked for {full_name} ({email})! Triggering progression email...")
            
            # Send email
            process_and_send_progression_email(full_name, email, current_day, lesson_title)
            
            # Sync database last_email_sent_day to avoid double sending
            supabase_client = create_client(SUPABASE_URL, SUPABASE_KEY)
            supabase_client.table("profiles").update({"last_email_sent_day": current_day}).eq("email", email).execute()
            logger.info(f"Updated last_email_sent_day to {current_day} for {email}")

    except Exception as e:
        logger.error(f"Error handling update callback: {str(e)}")

def main():
    logger.info("Initializing Supabase Realtime Socket...")
    try:
        realtime_url = f"{SUPABASE_URL}/realtime/v1".replace("http", "ws") + f"?apikey={SUPABASE_KEY}"
        socket = Socket(realtime_url, params={"apikey": SUPABASE_KEY})
        socket.connect()
    except Exception as e:
        logger.critical(f"Failed to connect Supabase realtime socket: {str(e)}")
        return

    # Subscribe to Postgres changes on 'profiles' table for 'INSERT' events
    logger.info("Subscribing to 'profiles' INSERT event channel...")
    try:
        realtime_client = SupabaseRealtimeClient(socket, "public", "profiles")
        
        # Define handlers to parse payload and call handle callbacks
        def cb_insert(enriched_payload):
            legacy_payload = {"record": enriched_payload.get("new")}
            handle_profiles_insert(legacy_payload)

        def cb_update(enriched_payload):
            legacy_payload = {"record": enriched_payload.get("new")}
            handle_profiles_update(legacy_payload)

        realtime_client.on("INSERT", cb_insert)
        realtime_client.on("UPDATE", cb_update)
        
        # Subscribe status callback
        def status_callback(status, err=None):
            if status == "SUBSCRIBED":
                logger.info("✅ Supabase Realtime Listener is active and running.")
                logger.info("Waiting for sign-ups... Press Ctrl+C to terminate.")
            elif status == "SUBSCRIPTION_ERROR":
                logger.error(f"Subscription error callback: {err}")

        realtime_client.subscribe(status_callback)
        
        # Start socket listening loop (blocks indefinitely)
        socket.listen()
            
    except KeyboardInterrupt:
        logger.info("Realtime listener daemon stopped by user.")
    except Exception as e:
        logger.critical(f"Realtime listener encountered a fatal error: {str(e)}")

if __name__ == "__main__":
    main()
