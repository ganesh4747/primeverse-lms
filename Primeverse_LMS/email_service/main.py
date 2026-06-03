import os
import smtplib
import logging
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from typing import Dict, Any, Optional

from fastapi import FastAPI, HTTPException, BackgroundTasks, status
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from dotenv import load_dotenv
from jinja2 import Environment, FileSystemLoader

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

def render_welcome_template(full_name: str) -> str:
    """
    Loads and renders the welcome.html template using Jinja2
    """
    try:
        template = jinja_env.get_template("welcome.html")
        return template.render(full_name=full_name)
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

def process_and_send_welcome_email(full_name: str, email: str):
    """
    Worker task to compile and send the welcome email.
    """
    try:
        subject = "Welcome to PrimeVerse LMS!"
        html_body = render_welcome_template(full_name)
        send_smtp_email(email, subject, html_body)
    except Exception as e:
        logger.error(f"Background task failed to process email for {email}: {str(e)}")

@app.get("/")
def read_root():
    return {
        "status": "online",
        "service": "PrimeVerse LMS Email Notification Service",
        "endpoints": {
            "/api/send-welcome": "POST - Database webhook trigger",
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

    if not email:
        logger.warning("No email found in insert record. Skipping email send.")
        return {"status": "skipped", "reason": "email field missing or null"}

    # Queue email sending in the background to respond to Supabase immediately
    background_tasks.add_task(process_and_send_welcome_email, full_name, email)
    
    return {
        "status": "queued",
        "recipient": email,
        "message": f"Welcome email queued for background processing."
    }

@app.post("/api/test-email")
async def send_test_email(request: TestEmailRequest):
    """
    Direct endpoint to verify that SMTP settings are correct.
    """
    logger.info(f"Sending manual test email to {request.email}...")
    try:
        subject = "PrimeVerse SMTP Test Connection"
        html_body = render_welcome_template(request.full_name)
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
