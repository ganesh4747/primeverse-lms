import os
import smtplib
import logging
from datetime import datetime, timezone
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from typing import Dict, Any, Optional

from fastapi import FastAPI, HTTPException, BackgroundTasks, status, Header
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from dotenv import load_dotenv
from jinja2 import Environment, FileSystemLoader
from supabase import create_client, Client

# Configure Logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    handlers=[logging.StreamHandler()]
)
logger = logging.getLogger("email_service")

# Load environment variables
load_dotenv(override=True)
print(f"DEBUG_ENV: SMTP_USER = '{os.getenv('SMTP_USER')}'")
print(f"DEBUG_ENV: SMTP_PASS = '{os.getenv('SMTP_PASS')[:2] + '...' + os.getenv('SMTP_PASS')[-2:] if os.getenv('SMTP_PASS') else 'None'}'")

# Supabase Client Initialization
SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_SERVICE_ROLE_KEY")
supabase_client: Optional[Client] = None

if SUPABASE_URL and SUPABASE_KEY:
    try:
        supabase_client = create_client(SUPABASE_URL, SUPABASE_KEY)
        logger.info("Supabase client initialized successfully in main.py")
    except Exception as e:
        logger.error(f"Failed to initialize Supabase client: {str(e)}")
else:
    logger.warning("SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY missing. Supabase integration disabled.")

LESSON_TITLES = {
    1: "Financial Market Foundations",
    2: "Charting & Trading Fundamentals",
    3: "Trading Execution Essentials",
    4: "Trade Management & Market Analysis",
    5: "Market Structure",
    6: "Trend Analysis & Market Direction",
    7: "Key Levels & Market Reaction Zone",
    8: "Expansion & Retracement ,  Internal & External Market Structure",
    9: "Fibonacci Framework & Market Strength Analysis",
    10: "Fibonacci Optimal Trade Entry (OTE)",
    11: "Structure Break, Liquidity, Stop Hunt & Failure Swing",
    12: "Power of Two Confirmation Patterns",
    13: "Risk Management & Trading Journal Framework",
    14: "Trading Psychology & Emotional Discipline",
    15: "Capital Growth & Compounding Methoad",
    16: "Market Recap & Complete Market Flow",
    17: "- Real-Time Trade Execution Examples",
    18: "Key Takeaways For Confident Trading"
}

# App initialization
app = FastAPI(
    title="PrimeVerse LMS - Email Notification Service",
    description="Python microservice to send transactional emails via SMTP",
    version="1.0.0"
)

# CORS configurations
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Template Engine setup
TEMPLATE_DIR = os.path.join(os.path.dirname(__file__), "templates")
jinja_env = Environment(loader=FileSystemLoader(TEMPLATE_DIR))

# Pydantic Schemas for validation
class WebhookPayload(BaseModel):
    type: str  # e.g., "INSERT", "UPDATE"
    table: str  # e.g., "profiles"
    record: Optional[Dict[str, Any]] = None
    old_record: Optional[Dict[str, Any]] = None

class TestEmailRequest(BaseModel):
    email: EmailStr
    full_name: str

def send_smtp_email(to_email: str, subject: str, html_content: str):
    """
    Core function using Python smtplib to send an HTML email over SMTP.
    """
    host = os.getenv("SMTP_HOST", "smtp.gmail.com")
    port_str = os.getenv("SMTP_PORT", "587")
    user = os.getenv("SMTP_USER")
    password = os.getenv("SMTP_PASS")
    sender = os.getenv("SMTP_FROM", "PrimeVerse LMS <support@primeverse.com>")

    if not user or not password:
        logger.error("SMTP_USER or SMTP_PASS environment variables are missing.")
        raise ValueError("SMTP configuration credentials not set in environment.")

    try:
        port = int(port_str)
    except ValueError:
        logger.warning(f"Invalid SMTP_PORT: '{port_str}'. Defaulting to 587.")
        port = 587

    # Create message container
    msg = MIMEMultipart('alternative')
    msg['Subject'] = subject
    msg['From'] = sender
    msg['To'] = to_email

    # Attach HTML payload
    part = MIMEText(html_content, 'html')
    msg.attach(part)

    try:
        # SMTP Session
        logger.info(f"Connecting to SMTP server {host}:{port}...")
        
        # Connect to SMTP server
        if port == 465:
            # SSL Connection
            server = smtplib.SMTP_SSL(host, port, timeout=10)
        else:
            # Standard TLS/STARTTLS Connection
            server = smtplib.SMTP(host, port, timeout=10)
            server.ehlo()
            if server.has_extn('STARTTLS'):
                server.starttls()
                server.ehlo()

        # Login and send
        server.login(user, password)
        logger.info(f"Successfully authenticated as {user}")
        
        server.sendmail(sender, to_email, msg.as_string())
        server.quit()
        logger.info(f"📧 Email successfully sent to {to_email}")
        return True

    except Exception as e:
        logger.error(f"Failed to send email via SMTP: {str(e)}")
        raise e

def render_welcome_template(full_name: str, email: str = "", password: str = "", selected_course: str = "") -> str:
    """
    Loads and renders the welcome.html template using Jinja2
    """
    try:
        template = jinja_env.get_template("welcome.html")
        return template.render(
            full_name=full_name,
            email=email,
            password=password,
            selected_course=selected_course or "PrimeVerse Mastery Program"
        )
    except Exception as e:
        logger.error(f"Error rendering JINJA2 welcome template: {str(e)}")
        # Fallback simple template
        return f"""
        <html>
            <body style='background-color:#0d0d0e; color:#ffffff; font-family:sans-serif; padding:40px;'>
                <h1 style='color:#D4AF37;'>Welcome to PrimeVerse, {full_name}!</h1>
                <p>Thank you for signing up. Your account is active.</p>
                <a href='https://primeverse-lms.pages.dev' style='background:#D4AF37; color:#000; padding:10px 20px; text-decoration:none; font-weight:bold; border-radius:5px;'>Access Dashboard</a>
            </body>
        </html>
        """

def process_and_send_welcome_email(full_name: str, email: str, password: str = "", selected_course: str = ""):
    """
    Worker task to compile and send the welcome email.
    """
    try:
        subject = "Welcome to PrimeVerse!"
        html_body = render_welcome_template(full_name, email, password, selected_course)
        send_smtp_email(email, subject, html_body)
    except Exception as e:
        logger.error(f"Background task failed to process email for {email}: {str(e)}")

def render_progression_template(full_name: str, day_str: str, lesson_title: str) -> str:
    """
    Loads and renders the progression.html template using Jinja2
    """
    try:
        template = jinja_env.get_template("progression.html")
        return template.render(
            full_name=full_name,
            name=full_name,
            day_str=day_str,
            day=day_str,
            lesson_title=lesson_title,
            module_name=lesson_title
        )
    except Exception as e:
        logger.error(f"Error rendering JINJA2 progression template: {str(e)}")
        # Fallback simple template
        return f"""
        <html>
            <body style='background-color:#0d0d0e; color:#ffffff; font-family:sans-serif; padding:40px;'>
                <h1 style='color:#D4AF37;'>Day {day_str} Unlocked!</h1>
                <p>Hi {full_name}, your module Day {day_str} ({lesson_title}) is now unlocked.</p>
                <a href='https://www.primeverseportal.pro/' style='background:#D4AF37; color:#000; padding:10px 20px; text-decoration:none; font-weight:bold; border-radius:5px;'>Access Dashboard</a>
            </body>
        </html>
        """

def process_and_send_progression_email(full_name: str, email: str, day: int, lesson_title: str):
    """
    Worker task to compile and send the progression email.
    """
    try:
        day_str = f"{day:02d}"
        subject = f"Day {day} Unlocked"
        html_body = render_progression_template(full_name, day_str, lesson_title)
        send_smtp_email(email, subject, html_body)
    except Exception as e:
        logger.error(f"Background task failed to process progression email for {email}: {str(e)}")

@app.get("/")
def read_root():
    return {
        "status": "online",
        "service": "PrimeVerse LMS Email Notification Service",
        "endpoints": {
            "/api/send-welcome": "POST - Database webhook trigger",
            "/api/send-daily-progression": "GET - Cron daily automation check",
            "/api/test-email": "POST - Manual SMTP email check"
        }
    }

@app.post("/api/send-welcome", status_code=status.HTTP_202_ACCEPTED)
async def send_welcome_webhook(payload: WebhookPayload, background_tasks: BackgroundTasks):
    """
    Supabase Database Webhook HTTP Receiver.
    Triggered on INSERT of profiles table.
    """
    logger.info(f"Received webhook trigger: Type: {payload.type}, Table: {payload.table}")
    
    # Verify table and type
    if payload.table != "profiles":
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=f"Unsupported table: '{payload.table}'. This endpoint only handles 'profiles'."
        )
        
    if payload.type != "INSERT":
        logger.info(f"Skipping action. We only trigger welcome emails on 'INSERT' (got: {payload.type}).")
        return {"status": "skipped", "reason": "non-insert event"}

    if not payload.record:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Payload record data is missing."
        )

    # Extract user details
    record = payload.record
    email = record.get("email")
    full_name = record.get("full_name") or "New User"
    password = record.get("password") or ""
    selected_course = record.get("selected_course") or ""

    if not email:
        logger.warning("No email found in insert record. Skipping email send.")
        return {"status": "skipped", "reason": "email field missing or null"}

    # Queue email sending in the background to respond to Supabase immediately
    background_tasks.add_task(process_and_send_welcome_email, full_name, email, password, selected_course)
    
    return {
        "status": "queued",
        "recipient": email,
        "message": f"Welcome email queued for background processing."
    }

@app.get("/api/send-daily-progression")
async def send_daily_progression(
    background_tasks: BackgroundTasks,
    test_email: Optional[str] = None,
    authorization: Optional[str] = Header(None)
):
    """
    Cron endpoint to send progression emails.
    Fires daily at night.
    """
    # Check authorization if CRON_SECRET is set
    cron_secret = os.getenv("CRON_SECRET")
    if cron_secret and authorization != f"Bearer {cron_secret}":
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Unauthorized call to cron endpoint"
        )

    if not supabase_client:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Supabase client not initialized"
        )

    try:
        # Fetch paid profiles, optionally filtering for a test email
        query = supabase_client.table("profiles").select("*").eq("payment_status", "paid")
        if test_email:
            query = query.eq("email", test_email)
        
        response = query.execute()
        profiles = response.data or []
        logger.info(f"Retrieved {len(profiles)} paid profiles for progression check" + (f" (test filtered for: {test_email})" if test_email else ""))
    except Exception as e:
        logger.error(f"Error fetching profiles from Supabase: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Database fetch failed: {str(e)}"
        )

    sent_count = 0
    updated_profiles = []
    errors = []
    
    current_time = datetime.now(timezone.utc)

    for profile in profiles:
        email = profile.get("email")
        full_name = profile.get("full_name") or "Trader"
        enroll_date_str = profile.get("enroll_date")
        db_current_day = profile.get("current_day") or 1
        
        # Check if last_email_sent_day is present in the table schema
        has_last_email_column = "last_email_sent_day" in profile
        last_email_sent_day = profile.get("last_email_sent_day")
        
        # Fallback to current_day if migration hasn't been run/applied
        if last_email_sent_day is None:
            last_email_sent_day = db_current_day

        if not email or not enroll_date_str:
            continue
            
        try:
            # Parse enroll_date (handling timezone)
            enroll_date_str_normalized = enroll_date_str.replace("Z", "+00:00")
            enroll_date = datetime.fromisoformat(enroll_date_str_normalized)
            
            # Reset times to 00:00:00 to calculate calendar day difference
            enroll_date_clean = enroll_date.astimezone(timezone.utc).date()
            today_clean = current_time.astimezone(timezone.utc).date()
            
            days_since_enroll = (today_clean - enroll_date_clean).days
            target_day = min(18, max(1, days_since_enroll + 1))
            
            # We only send emails if target_day is > 1 (i.e. Day 2 to 18)
            # and is greater than the last sent progression email day
            if target_day > last_email_sent_day and target_day > 1:
                # Get lesson title
                lesson_title = LESSON_TITLES.get(target_day, f"Day {target_day} Module")
                modules_completed = target_day - 1
                program_progress = int(round((modules_completed / 18) * 100))
                
                # Send email
                background_tasks.add_task(
                    process_and_send_progression_email,
                    full_name,
                    email,
                    target_day,
                    lesson_title
                )
                
                # Sync database
                update_payload = {
                    "modules_completed": modules_completed,
                    "program_progress": program_progress,
                    "stage_title": lesson_title
                }
                if has_last_email_column:
                    update_payload["last_email_sent_day"] = target_day
                
                # Also update current_day if the DB's current_day is less than target_day
                if target_day > db_current_day:
                    update_payload["current_day"] = target_day
                
                logger.info(f"DEBUG: profile keys: {list(profile.keys())}")
                logger.info(f"DEBUG: update_payload: {update_payload}")
                
                supabase_client.table("profiles").update(update_payload).eq("email", email).execute()
                
                sent_count += 1
                updated_profiles.append({
                    "email": email,
                    "old_day": db_current_day,
                    "new_day": target_day,
                    "lesson_title": lesson_title
                })
                logger.info(f"Queued Day {target_day} email and updated DB for {email}")
                
        except Exception as e:
            error_msg = f"Failed progression processing for {email}: {str(e)}"
            logger.error(error_msg)
            errors.append(error_msg)

    return {
        "status": "success",
        "processed_profiles": len(profiles),
        "sent_count": sent_count,
        "updated_profiles": updated_profiles,
        "errors": errors
    }

@app.post("/api/test-email")
async def send_test_email(request: TestEmailRequest):
    """
    Direct endpoint to verify that SMTP settings are correct.
    """
    logger.info(f"Sending manual test email to {request.email}...")
    try:
        subject = "PrimeVerse SMTP Test Connection"
        html_body = render_welcome_template(request.full_name, request.email, "primeverse@123", "PrimeVerse Mastery Program")
        send_smtp_email(request.email, subject, html_body)
        return {
            "status": "success",
            "message": f"Test email successfully sent via SMTP to {request.email}."
        }
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"SMTP test failed: {str(e)}"
        )

if __name__ == "__main__":
    import uvicorn
    # Load config port
    port = int(os.getenv("PORT", "8000"))
    logger.info(f"Starting server on port {port}...")
    uvicorn.run("main:app", host="0.0.0.0", port=port, reload=True)
