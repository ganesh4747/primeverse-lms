import os
import sys
from dotenv import load_dotenv
from supabase import create_client

def main():
    load_dotenv(override=True)
    url = os.getenv("SUPABASE_URL")
    key = os.getenv("SUPABASE_SERVICE_ROLE_KEY")
    
    if not url or not key:
        print("ERROR: SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY is missing from .env")
        return
        
    client = create_client(url, key)
    
    try:
        # Find a valid submission to link the message to
        res = client.table("concept_submissions").select("id, user_email, user_name").limit(1).execute()
        if not res.data:
            print("No submissions found in your Supabase database. Please submit a concept support request first.")
            return
            
        sub = res.data[0]
        sub_id = sub["id"]
        student_email = sub["user_email"]
        student_name = sub.get("user_name") or "Student"
        
        print(f"Linking test message to submission ID: {sub_id} ({student_name} - {student_email})")
        
        # Insert a message as student
        test_msg = {
            "submission_id": sub_id,
            "sender_email": student_email,
            "sender_name": student_name,
            "sender_role": "student",
            "message_text": "This is a local test message to trigger the admin email alert."
        }
        
        print("Inserting message into concept_messages table...")
        client.table("concept_messages").insert([test_msg]).execute()
        print("SUCCESS: Test message inserted!")
        
    except Exception as e:
        print("ERROR:", str(e))

if __name__ == "__main__":
    main()
