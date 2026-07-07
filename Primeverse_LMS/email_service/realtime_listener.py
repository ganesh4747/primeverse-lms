import os
import time
import logging
from dotenv import load_dotenv
from realtime.connection import Socket
from supabase import SupabaseRealtimeClient, create_client, Client

# Import helpers from main
from main import (
    process_and_send_welcome_email,
    process_and_send_progression_email,
    process_and_send_admin_submission_alert,
    process_and_send_admin_message_alert,
    process_and_send_student_message_alert,
    LESSON_TITLES
)

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
SUPABASE_KEY = os.getenv("SUPABASE_SERVICE_ROLE_KEY")

if not SUPABASE_URL or not SUPABASE_KEY:
    logger.critical("SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY is missing from environment. Exiting.")
    exit(1)

def handle_profiles_insert(payload):
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

        if payment_status not in ["paid", "free_access"]:
            return

        if current_day > last_email_sent_day and current_day > 1:
            lesson_title = LESSON_TITLES.get(current_day, f"Day {current_day} Module")
            logger.info(f"Day {current_day} unlocked for {full_name} ({email})! Triggering progression email...")
            process_and_send_progression_email(full_name, email, current_day, lesson_title)
            
            supabase_client = create_client(SUPABASE_URL, SUPABASE_KEY)
            supabase_client.table("profiles").update({"last_email_sent_day": current_day}).eq("email", email).execute()
            logger.info(f"Updated last_email_sent_day to {current_day} for {email}")
    except Exception as e:
        logger.error(f"Error handling update callback: {str(e)}")

def handle_submissions_insert(payload):
    logger.info("New concept submission insert detected via Supabase Realtime!")
    try:
        new_record = payload.get("record")
        if not new_record:
            logger.warning("Event payload is missing 'record' data.")
            return

        student_email = new_record.get("user_email")
        student_name = new_record.get("user_name") or "PrimeVerse Student"
        module_name = new_record.get("module") or "Unknown Module"
        concept_name = new_record.get("concept_name") or "Unknown Concept"
        explanation = new_record.get("explanation") or "No description provided."
        screenshot_url = new_record.get("screenshot_url")

        if not student_email:
            logger.warning("No student email found in submission record. Skipping alert.")
            return

        logger.info(f"Triggering submission admin alert for student {student_name} ({student_email})...")
        process_and_send_admin_submission_alert(
            student_name, student_email, module_name, concept_name, explanation, screenshot_url
        )
    except Exception as e:
        logger.error(f"Error handling submissions insert callback: {str(e)}")

def handle_messages_insert(payload):
    logger.info("New concept message insert detected via Supabase Realtime!")
    try:
        new_record = payload.get("record")
        if not new_record:
            logger.warning("Event payload is missing 'record' data.")
            return

        sender_email = new_record.get("sender_email")
        sender_name = new_record.get("sender_name") or "Student"
        sender_role = new_record.get("sender_role") or "student"
        message_text = new_record.get("message_text") or ""
        submission_id = new_record.get("submission_id")

        if not message_text:
            logger.info("Empty message body, skipping alert.")
            return

        concept_name = "Unknown Concept"
        module_name = "Unknown Module"
        student_email = None
        student_name = "Student"

        if submission_id:
            try:
                supabase_client = create_client(SUPABASE_URL, SUPABASE_KEY)
                res = supabase_client.table("concept_submissions").select("concept_name, module, user_email, user_name").eq("id", submission_id).execute()
                if res.data and len(res.data) > 0:
                    concept_name = res.data[0].get("concept_name") or concept_name
                    module_name = res.data[0].get("module") or module_name
                    student_email = res.data[0].get("user_email")
                    student_name = res.data[0].get("user_name") or student_name
                    logger.info(f"Resolved concept '{concept_name}' and student '{student_email}' for realtime message alert.")
            except Exception as e:
                logger.error(f"Failed to fetch submission context for realtime message alert: {str(e)}")

        if sender_role == "student":
            logger.info(f"Triggering message admin alert from student {sender_name} ({sender_email})...")
            process_and_send_admin_message_alert(
                sender_name, sender_email, message_text, concept_name, module_name
            )
        elif sender_role in ["admin", "mentor"]:
            if not student_email:
                logger.warning("Could not resolve student email. Skipping student notification.")
                return
            logger.info(f"Triggering message student alert for student {student_name} ({student_email})...")
            process_and_send_student_message_alert(
                student_name, student_email, message_text, concept_name, module_name
            )
        else:
            logger.info(f"Skipping alert for message with sender_role: '{sender_role}'")
    except Exception as e:
        logger.error(f"Error handling messages insert callback: {str(e)}")

def main():
    while True:
        logger.info("Initializing Supabase Realtime Socket...")
        try:
            realtime_url = f"{SUPABASE_URL}/realtime/v1".replace("http", "ws") + f"?apikey={SUPABASE_KEY}"
            socket = Socket(realtime_url, params={"apikey": SUPABASE_KEY}, auto_reconnect=True)
            socket.connect()
        except Exception as e:
            logger.error(f"Failed to connect Supabase realtime socket: {str(e)}. Retrying in 5 seconds...")
            time.sleep(5)
            continue

        logger.info("Subscribing to Realtime database channels...")
        try:
            # Profiles listeners
            channel_profiles = socket.set_channel("realtime:public:profiles")
            channel_profiles.on("INSERT", handle_profiles_insert)
            channel_profiles.on("UPDATE", handle_profiles_update)
            channel_profiles.join()
            logger.info("✅ Supabase Realtime Listener is active on 'profiles'.")
            
            # Submissions listeners
            channel_submissions = socket.set_channel("realtime:public:concept_submissions")
            channel_submissions.on("INSERT", handle_submissions_insert)
            channel_submissions.join()
            logger.info("✅ Supabase Realtime Listener is active on 'concept_submissions'.")
            
            # Messages listeners
            channel_messages = socket.set_channel("realtime:public:concept_messages")
            channel_messages.on("INSERT", handle_messages_insert)
            channel_messages.join()
            logger.info("✅ Supabase Realtime Listener is active on 'concept_messages'.")
            
            # Start socket listening loop (blocks indefinitely)
            socket.listen()
                
        except KeyboardInterrupt:
            logger.info("Realtime listener daemon stopped by user.")
            break
        except Exception as e:
            import traceback
            logger.error(f"Realtime listener encountered an error:\n{traceback.format_exc()}Reconnecting in 5 seconds...")
            time.sleep(5)

if __name__ == "__main__":
    main()
