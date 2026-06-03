import os
import time
import logging
from dotenv import load_dotenv
from supabase import create_client, Client
from main import process_and_send_welcome_email

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

def main():
    logger.info("Initializing Supabase Client...")
    try:
        supabase_client: Client = create_client(SUPABASE_URL, SUPABASE_KEY)
    except Exception as e:
        logger.critical(f"Failed to create Supabase client: {str(e)}")
        return

    # Subscribe to Postgres changes on 'profiles' table for 'INSERT' events
    logger.info("Subscribing to 'profiles' INSERT event channel...")
    try:
        channel = supabase_client.channel("profiles_realtime_emails")
        channel.on(
            "postgres_changes",
            {
                "event": "INSERT",
                "schema": "public",
                "table": "profiles"
            },
            handle_profiles_insert
        ).subscribe()
        
        logger.info("✅ Supabase Realtime Listener is active and running.")
        logger.info("Waiting for sign-ups... Press Ctrl+C to terminate.")
        
        # Keep daemon process alive
        while True:
            time.sleep(1)
            
    except KeyboardInterrupt:
        logger.info("Realtime listener daemon stopped by user.")
    except Exception as e:
        logger.critical(f"Realtime listener encountered a fatal error: {str(e)}")

if __name__ == "__main__":
    main()
