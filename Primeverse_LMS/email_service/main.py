import os
import smtplib
import ssl
import json
import urllib.request
import urllib.error
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
# pyrefly: ignore [missing-import]
from supabase import create_client, Client

# Configure Logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    handlers=[logging.StreamHandler()]
)
logger = logging.getLogger("email_service")

# Load environment variables
# Try loading .env from parent directory (local dev). On Railway/Vercel, env vars
# are injected by the platform so dotenv will simply find no file and skip silently.
base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
env_path = os.path.join(base_dir, ".env")
if os.path.exists(env_path):
    load_dotenv(dotenv_path=env_path, override=True)
    logger.info(f"Loaded .env from: {env_path}")
else:
    # Also try loading .env from the same directory (email_service/.env)
    local_env = os.path.join(os.path.dirname(os.path.abspath(__file__)), ".env")
    if os.path.exists(local_env):
        load_dotenv(dotenv_path=local_env, override=True)
        logger.info(f"Loaded .env from: {local_env}")
    else:
        logger.info("No .env file found. Using platform-injected environment variables (Railway/Vercel).")

ADMIN_EMAIL = os.getenv("ADMIN_EMAIL", "ganesh@primeverse.pro")
logger.info(f"Admin email alerts configured for: {ADMIN_EMAIL}")

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

class TestProgressionRequest(BaseModel):
    email: EmailStr
    full_name: str
    day: int

def print_message_email_flow(transport_type: str, sender_role: str, sender_name: str, sender_email: str, concept_name: str, module_name: str, message_text: str, recipients: list, status: str):
    border = "=" * 70
    header = f"📬 CONCEPT MESSAGE EMAIL FLOW [{transport_type}]"
    recipients_str = ", ".join(recipients) if recipients else "(None / Resolved empty)"
    
    cyan = "\033[36m"
    yellow = "\033[33m"
    green = "\033[32m"
    magenta = "\033[35m"
    bold = "\033[1m"
    reset = "\033[0m"

    print(f"\n{cyan}{border}{reset}")
    print(f"  {bold}{yellow}{header}{reset}")
    print(f"{cyan}{border}{reset}")
    print(f"  ▶ {bold}Message Details:{reset}")
    print(f"    • {green}Sender:{reset}    {sender_name} ({sender_email or 'N/A'}) [Role: {sender_role}]")
    print(f"    • {green}Concept:{reset}   {concept_name} (Module: {module_name})")
    print(f"    • {green}Text:{reset}      \"{message_text}\"")
    print(f"  ▶ {bold}Email Routing:{reset}")
    print(f"    • {magenta}To:{reset}        {recipients_str}")
    print(f"    • {yellow}Status:{reset}    {status}")
    print(f"{cyan}{border}{reset}\n")

def send_smtp_email(to_email: str, subject: str, html_content: str):
    """
    Fallback: sends email via raw SMTP (works on Railway, local dev).
    Does NOT work on Vercel (ports 465/587 are blocked).
    """
    host = os.getenv("SMTP_HOST", "smtpout.secureserver.net")
    port_str = os.getenv("SMTP_PORT", "465")
    user = os.getenv("SMTP_USER")
    password = os.getenv("SMTP_PASS")
    sender = os.getenv("SMTP_FROM", "PrimeVerse LMS <ganesh@primeverse.pro>")

    if not user or not password:
        logger.error("SMTP_USER or SMTP_PASS environment variables are missing.")
        raise ValueError("SMTP configuration credentials not set in environment.")

    try:
        port = int(port_str)
    except ValueError:
        logger.warning(f"Invalid SMTP_PORT: '{port_str}'. Defaulting to 465.")
        port = 465

    msg = MIMEMultipart('alternative')
    msg['Subject'] = subject
    msg['From'] = sender
    msg['To'] = to_email
    msg.attach(MIMEText(html_content, 'html'))

    try:
        logger.info(f"[SMTP] Connecting to {host}:{port}...")
        context = ssl.create_default_context()
        if port == 465:
            with smtplib.SMTP_SSL(host, port, context=context, timeout=20) as server:
                server.login(user, password)
                server.sendmail(sender, to_email, msg.as_string())
        else:
            with smtplib.SMTP(host, port, timeout=20) as server:
                server.ehlo()
                if server.has_extn('STARTTLS'):
                    server.starttls(context=context)
                    server.ehlo()
                server.login(user, password)
                server.sendmail(sender, to_email, msg.as_string())
        logger.info(f"✉️ [SMTP] Email sent to {to_email}")
        return True
    except Exception as e:
        logger.error(f"[SMTP] Failed to send email: {str(e)}")
        raise e


def send_resend_email(to_email: str, subject: str, html_content: str):
    """
    Primary: sends email via Resend HTTP API.
    Works on Vercel, Railway, everywhere — no port restrictions.
    Requires RESEND_API_KEY env var.
    Sender must be from a domain verified in Resend (e.g. ganesh@primeverse.pro).
    """
    import time
    # Sleep to stay within Resend's rate limit of 10 requests per second
    time.sleep(0.15)

    api_key = os.getenv("RESEND_API_KEY")
    from_addr = os.getenv("SMTP_FROM", "PrimeVerse LMS <ganesh@primeverse.pro>")

    if not api_key:
        raise ValueError("RESEND_API_KEY environment variable is not set.")

    payload = json.dumps({
        "from": from_addr,
        "to": [to_email],
        "subject": subject,
        "html": html_content
    }).encode("utf-8")

    req = urllib.request.Request(
        "https://api.resend.com/emails",
        data=payload,
        headers={
            "Authorization": f"Bearer {api_key}",
            "Content-Type": "application/json",
            "User-Agent": "resend-python/1.0.0"
        },
        method="POST"
    )

    try:
        with urllib.request.urlopen(req, timeout=15) as response:
            result = json.loads(response.read().decode())
            logger.info(f"✉️ [Resend] Email sent to {to_email} | id: {result.get('id')}")
            return True
    except urllib.error.HTTPError as e:
        error_body = e.read().decode()
        logger.error(f"[Resend] HTTP {e.code} error sending to {to_email}: {error_body}")
        raise Exception(f"Resend API error {e.code}: {error_body}")
    except Exception as e:
        logger.error(f"[Resend] Failed to send email to {to_email}: {str(e)}")
        raise e


def send_email(to_email: str, subject: str, html_content: str):
    """
    Unified email sender.
    - Uses Resend HTTP API if RESEND_API_KEY is set (works on Vercel + Railway).
    - Falls back to SMTP on error or if no Resend key (works on Railway + local dev).
    """
    resend_key = os.getenv("RESEND_API_KEY")
    if resend_key:
        try:
            logger.info(f"[Email] Using Resend API to send to {to_email}")
            return send_resend_email(to_email, subject, html_content)
        except Exception as resend_err:
            logger.error(f"[Email] Resend API failed: {str(resend_err)}. Falling back to SMTP...")
            try:
                return send_smtp_email(to_email, subject, html_content)
            except Exception as smtp_err:
                logger.error(f"[Email] SMTP fallback also failed: {str(smtp_err)}")
                raise smtp_err
    else:
        logger.info(f"[Email] RESEND_API_KEY not set — falling back to SMTP for {to_email}")
        return send_smtp_email(to_email, subject, html_content)


def render_welcome_template(full_name: str, email: str = "", password: str = "", selected_course: str = "") -> str:
    """
    Loads and renders the welcome.html template using Jinja2
    """
    try:
        template = jinja_env.get_template("welcome.html")
        display_password = password if (password and str(password).strip()) else "(Set by Admin / Use Forgot Password)"
        return template.render(
            full_name=full_name,
            email=email,
            password=display_password,
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
        send_email(email, subject, html_body)
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
        send_email(email, subject, html_body)
    except Exception as e:
        logger.error(f"Background task failed to process progression email for {email}: {str(e)}")

def render_admin_submission_alert_template(student_name: str, student_email: str, module_name: str, concept_name: str, explanation: str, screenshot_url: Optional[str] = None) -> str:
    """
    Loads and renders the admin_submission_alert.html template using Jinja2
    """
    workspace_url = os.getenv("LMS_WORKSPACE_URL", "https://www.primeverseportal.pro/html/oneonecommunity.html")
    try:
        template = jinja_env.get_template("admin_submission_alert.html")
        return template.render(
            student_name=student_name,
            student_email=student_email,
            module_name=module_name,
            concept_name=concept_name,
            explanation=explanation,
            screenshot_url=screenshot_url,
            workspace_url=workspace_url
        )
    except Exception as e:
        logger.error(f"Error rendering JINJA2 admin submission alert template: {str(e)}")
        return f"""
        <html>
            <body style='background-color:#0d0d0e; color:#ffffff; font-family:sans-serif; padding:40px;'>
                <h1 style='color:#D4AF37;'>New Ticket Submission Alert</h1>
                <p><strong>Student:</strong> {student_name} ({student_email})</p>
                <p><strong>Module:</strong> {module_name}</p>
                <p><strong>Concept:</strong> {concept_name}</p>
                <p><strong>Explanation:</strong> {explanation}</p>
                <a href='{workspace_url}' style='background:#D4AF37; color:#000; padding:10px 20px; text-decoration:none; font-weight:bold; border-radius:5px;'>Open Workspace</a>
            </body>
        </html>
        """

def render_admin_message_alert_template(sender_name: str, sender_email: str, message_text: str, concept_name: str, module_name: str) -> str:
    """
    Loads and renders the admin_message_alert.html template using Jinja2
    """
    workspace_url = os.getenv("LMS_WORKSPACE_URL", "https://www.primeverseportal.pro/html/oneonecommunity.html")
    try:
        template = jinja_env.get_template("admin_message_alert.html")
        return template.render(
            sender_name=sender_name,
            sender_email=sender_email,
            message_text=message_text,
            concept_name=concept_name,
            module_name=module_name,
            workspace_url=workspace_url
        )
    except Exception as e:
        logger.error(f"Error rendering JINJA2 admin message alert template: {str(e)}")
        return f"""
        <html>
            <body style='background-color:#0d0d0e; color:#ffffff; font-family:sans-serif; padding:40px;'>
                <h1 style='color:#D4AF37;'>New Support Message Alert</h1>
                <p><strong>Sender:</strong> {sender_name} ({sender_email})</p>
                <p><strong>Concept:</strong> {concept_name} ({module_name})</p>
                <p><strong>Message:</strong> {message_text}</p>
                <a href='{workspace_url}' style='background:#D4AF37; color:#000; padding:10px 20px; text-decoration:none; font-weight:bold; border-radius:5px;'>Open Workspace</a>
            </body>
        </html>
        """

def process_and_send_admin_submission_alert(student_name: str, student_email: str, module_name: str, concept_name: str, explanation: str, screenshot_url: Optional[str] = None):
    """
    Background worker task to compile and send new submission email to admin.
    """
    try:
        subject = f"New Concept Submission: {concept_name} by {student_name}"
        html_body = render_admin_submission_alert_template(
            student_name=student_name,
            student_email=student_email,
            module_name=module_name,
            concept_name=concept_name,
            explanation=explanation,
            screenshot_url=screenshot_url
        )
        
        # Fetch admins dynamically from Supabase
        admin_emails = []
        if supabase_client:
            try:
                res = supabase_client.table("admins").select("email").execute()
                if res.data:
                    admin_emails = [r["email"] for r in res.data if r.get("email")]
            except Exception as db_err:
                logger.error(f"Failed to fetch admin emails from DB: {str(db_err)}")
                
        # Fallback to config if DB query is empty/fails
        if not admin_emails:
            admin_emails = [email.strip() for email in ADMIN_EMAIL.split(",") if email.strip()]
            
        for admin_email in admin_emails:
            send_smtp_email(admin_email, subject, html_body)
    except Exception as e:
        logger.error(f"Background task failed to process admin submission alert: {str(e)}")

def process_and_send_admin_message_alert(sender_name: str, sender_email: str, message_text: str, concept_name: str, module_name: str, transport_type: str = "FastAPI Webhook Server"):
    """
    Background worker task to compile and send new message email to admin.
    """
    try:
        subject = f"New support message from {sender_name} (Concept: {concept_name})"
        html_body = render_admin_message_alert_template(
            sender_name=sender_name,
            sender_email=sender_email,
            message_text=message_text,
            concept_name=concept_name,
            module_name=module_name
        )
        
        # Fetch admins dynamically from Supabase
        admin_emails = []
        if supabase_client:
            try:
                res = supabase_client.table("admins").select("email").execute()
                if res.data:
                    admin_emails = [r["email"] for r in res.data if r.get("email")]
            except Exception as db_err:
                logger.error(f"Failed to fetch admin emails from DB: {str(db_err)}")
                
        # Fallback to config if DB query is empty/fails
        if not admin_emails:
            admin_emails = [email.strip() for email in ADMIN_EMAIL.split(",") if email.strip()]

        print_message_email_flow(
            transport_type=transport_type,
            sender_role="student",
            sender_name=sender_name,
            sender_email=sender_email,
            concept_name=concept_name,
            module_name=module_name,
            message_text=message_text,
            recipients=admin_emails,
            status="SENDING"
        )
            
        success_count = 0
        fail_count = 0
        for admin_email in admin_emails:
            try:
                send_smtp_email(admin_email, subject, html_body)
                success_count += 1
            except Exception as send_err:
                logger.error(f"Failed to send admin alert to {admin_email}: {str(send_err)}")
                fail_count += 1

        print_message_email_flow(
            transport_type=transport_type,
            sender_role="student",
            sender_name=sender_name,
            sender_email=sender_email,
            concept_name=concept_name,
            module_name=module_name,
            message_text=message_text,
            recipients=admin_emails,
            status=f"SENT ({success_count} Succeeded, {fail_count} Failed)"
        )
    except Exception as e:
        logger.error(f"Background task failed to process admin message alert: {str(e)}")

def render_student_message_alert_template(student_name: str, message_text: str, concept_name: str, module_name: str) -> str:
    """
    Loads and renders the student_message_alert.html template using Jinja2
    """
    workspace_url = os.getenv("LMS_WORKSPACE_URL", "https://www.primeverseportal.pro/html/oneonecommunity.html")
    try:
        template = jinja_env.get_template("student_message_alert.html")
        return template.render(
            student_name=student_name,
            message_text=message_text,
            concept_name=concept_name,
            module_name=module_name,
            workspace_url=workspace_url
        )
    except Exception as e:
        logger.error(f"Error rendering JINJA2 student message alert template: {str(e)}")
        return f"""
        <html>
            <body style='background-color:#0d0d0e; color:#ffffff; font-family:sans-serif; padding:40px;'>
                <h1 style='color:#D4AF37;'>New Reply from PrimeVerse Mentor</h1>
                <p>Hi {student_name},</p>
                <p>Your mentor has replied to your concept submission: <strong>{concept_name}</strong> (Module: {module_name}).</p>
                <p><strong>Reply:</strong> {message_text}</p>
                <a href='{workspace_url}' style='background:#D4AF37; color:#000; padding:10px 20px; text-decoration:none; font-weight:bold; border-radius:5px;'>View Reply in Workspace</a>
            </body>
        </html>
        """

def process_and_send_student_message_alert(student_name: str, student_email: str, message_text: str, concept_name: str, module_name: str, transport_type: str = "FastAPI Webhook Server"):
    """
    Background worker task to compile and send new reply email to student.
    """
    try:
        subject = f"New reply from your PrimeVerse Mentor (Concept: {concept_name})"
        html_body = render_student_message_alert_template(
            student_name=student_name,
            message_text=message_text,
            concept_name=concept_name,
            module_name=module_name
        )
        print_message_email_flow(
            transport_type=transport_type,
            sender_role="admin",
            sender_name="Mentor/Admin",
            sender_email="admin@primeverse.com",
            concept_name=concept_name,
            module_name=module_name,
            message_text=message_text,
            recipients=[student_email] if student_email else [],
            status="SENDING"
        )
        status_str = "SENT"
        try:
            send_smtp_email(student_email, subject, html_body)
        except Exception as send_err:
            logger.error(f"Failed to send student alert to {student_email}: {str(send_err)}")
            status_str = f"FAILED: {str(send_err)}"

        print_message_email_flow(
            transport_type=transport_type,
            sender_role="admin",
            sender_name="Mentor/Admin",
            sender_email="admin@primeverse.com",
            concept_name=concept_name,
            module_name=module_name,
            message_text=message_text,
            recipients=[student_email] if student_email else [],
            status=status_str
        )
    except Exception as e:
        logger.error(f"Background task failed to process student message alert: {str(e)}")

def render_announcement_template(trader_name: str, sender_name: str, sender_title: str, message_text: str) -> str:
    """
    Loads and renders the announcement.html template using Jinja2
    """
    workspace_url = os.getenv("LMS_WORKSPACE_URL", "https://www.primeverseportal.pro/html/communitypage.html")
    try:
        template = jinja_env.get_template("announcement.html")
        return template.render(
            trader_name=trader_name,
            sender_name=sender_name,
            sender_title=sender_title,
            message_text=message_text,
            workspace_url=workspace_url
        )
    except Exception as e:
        logger.error(f"Error rendering JINJA2 announcement template: {str(e)}")
        return f"""
        <html>
            <body style='background-color:#0d0d0e; color:#ffffff; font-family:sans-serif; padding:40px;'>
                <h1 style='color:#D4AF37;'>📢 New Announcement</h1>
                <p>Hi {trader_name},</p>
                <p><strong>Announced By:</strong> {sender_name} ({sender_title})</p>
                <p><strong>Message:</strong> {message_text}</p>
                <a href='{workspace_url}' style='background:#D4AF37; color:#000; padding:10px 20px; text-decoration:none; font-weight:bold; border-radius:5px;'>Open Community Feed</a>
            </body>
        </html>
        """

def process_and_send_broadcast_emails(sender_name: str, sender_title: str, message_text: str):
    """
    Background worker task to compile and send announcement emails to all active/enrolled traders.
    """
    try:
        profiles = []
        if supabase_client:
            try:
                res = supabase_client.table("profiles").select("email, full_name").execute()
                if res.data:
                    profiles = [p for p in res.data if p.get("email")]
            except Exception as db_err:
                logger.error(f"Failed to fetch profiles for announcement broadcast: {str(db_err)}")
        
        if not profiles:
            default_admin = os.getenv("ADMIN_EMAIL", "harishramanan4415@gmail.com")
            profiles = [{"email": default_admin, "full_name": "PrimeVerse Admin"}]

        logger.info(f"Broadcasting announcement to {len(profiles)} active profiles...")
        subject = f"📢 New Announcement from PrimeVerse"

        for p in profiles:
            email = p.get("email")
            trader_name = p.get("full_name") or "PrimeVerse Trader"
            html_body = render_announcement_template(trader_name, sender_name, sender_title, message_text)
            try:
                send_email(email, subject, html_body)
            except Exception as send_err:
                logger.error(f"Failed to send announcement email to {email}: {str(send_err)}")
    except Exception as e:
        logger.error(f"Background task failed to process community broadcast: {str(e)}")

@app.get("/")
def read_root():
    return {
        "status": "online",
        "service": "PrimeVerse LMS Email Notification Service",
        "endpoints": {
            "/api/send-welcome": "POST - Database webhook trigger (INSERT)",
            "/api/send-progression": "POST - Database webhook trigger (UPDATE)",
            "/api/send-daily-progression": "GET - Cron daily automation check",
            "/api/send-admin-alert": "POST - Database webhook trigger (INSERT on concept_submissions or concept_messages)",
            "/api/send-broadcast": "POST - Database webhook trigger (INSERT on community_messages)",
            "/api/test-email": "POST - Manual SMTP email check"
        }
    }

@app.post("/api/send-admin-alert", status_code=status.HTTP_202_ACCEPTED)
async def send_admin_alert_webhook(payload: WebhookPayload):
    """
    Supabase Database Webhook HTTP Receiver.
    Triggered on INSERT of concept_submissions or concept_messages.
    """
    logger.info(f"Received admin alert webhook trigger: Table: {payload.table}, Type: {payload.type}")
    
    if payload.type != "INSERT":
        logger.info(f"Skipping admin alert. Only trigger on 'INSERT' (got: {payload.type}).")
        return {"status": "skipped", "reason": "non-insert event"}
        
    if not payload.record:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Payload record data is missing."
        )

    record = payload.record

    if payload.table == "concept_submissions":
        student_email = record.get("user_email")
        student_name = record.get("user_name") or "PrimeVerse Student"
        module_name = record.get("module") or "Unknown Module"
        concept_name = record.get("concept_name") or "Unknown Concept"
        explanation = record.get("explanation") or "No description provided."
        screenshot_url = record.get("screenshot_url")
        
        if not student_email:
            logger.warning("No student email found in submission record. Skipping alert.")
            return {"status": "skipped", "reason": "student email missing"}
            
        logger.info(f"Sending submission admin alert for student {student_name} ({student_email})")
        process_and_send_admin_submission_alert(
            student_name,
            student_email,
            module_name,
            concept_name,
            explanation,
            screenshot_url
        )
        return {
            "status": "sent",
            "table": "concept_submissions",
            "message": "Admin submission alert email sent."
        }
        
    elif payload.table == "concept_messages":
        logger.info("Skipping email alert for concept feedback message (concept_messages) - notifications disabled.")
        return {
            "status": "skipped",
            "table": "concept_messages",
            "reason": "email notifications for feedback/chat messages are disabled"
        }
        
    else:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=f"Unsupported table for admin alert: '{payload.table}'."
        )

@app.post("/api/send-broadcast", status_code=status.HTTP_202_ACCEPTED)
async def send_broadcast_webhook(payload: WebhookPayload):
    """
    Supabase Database Webhook HTTP Receiver.
    Triggered on INSERT of community_messages.
    """
    logger.info(f"Received community broadcast webhook trigger: Table: {payload.table}, Type: {payload.type}")
    
    if payload.type != "INSERT":
        logger.info(f"Skipping alert. Only trigger on 'INSERT' (got: {payload.type}).")
        return {"status": "skipped", "reason": "non-insert event"}
        
    if not payload.record:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Payload record data is missing."
        )

    record = payload.record
    sender_name = record.get("sender_name") or "Founder"
    sender_title = record.get("sender_title") or "Founder"
    message_text = record.get("message_text") or ""

    if not message_text:
        logger.info("Empty message body, skipping broadcast.")
        return {"status": "skipped", "reason": "empty message_text"}

    logger.info(f"Sending community announcement broadcast from {sender_name}")
    process_and_send_broadcast_emails(
        sender_name,
        sender_title,
        message_text
    )
    
    return {
        "status": "sent",
        "table": "community_messages",
        "message": "Community broadcast emails sent."
    }

@app.post("/api/send-welcome", status_code=status.HTTP_202_ACCEPTED)
async def send_welcome_webhook(payload: WebhookPayload):
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

    # Send email synchronously
    process_and_send_welcome_email(full_name, email, password, selected_course)
    
    return {
        "status": "sent",
        "recipient": email,
        "message": "Welcome email sent successfully."
    }

@app.post("/api/send-progression", status_code=status.HTTP_202_ACCEPTED)
async def send_progression_webhook(payload: WebhookPayload):
    """
    Supabase Database Webhook HTTP Receiver for UPDATE events.
    Triggered when a user's profile is updated (e.g., day unlocked).
    """
    logger.info(f"Received webhook trigger: Type: {payload.type}, Table: {payload.table}")
    
    if payload.table != "profiles":
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=f"Unsupported table: '{payload.table}'. This endpoint only handles 'profiles'."
        )
        
    if payload.type != "UPDATE":
        logger.info(f"Skipping action. We only trigger progression emails on 'UPDATE' (got: {payload.type}).")
        return {"status": "skipped", "reason": "non-update event"}

    if not payload.record:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Payload record data is missing."
        )

    record = payload.record
    old_record = payload.old_record or {}
    
    email = record.get("email")
    full_name = record.get("full_name") or "Trader"
    current_day = record.get("current_day")
    last_email_sent_day = record.get("last_email_sent_day")
    payment_status = record.get("payment_status")

    if not email:
        logger.warning("No email found in update record. Skipping.")
        return {"status": "skipped", "reason": "email missing"}

    # Only process for paid/free_access users
    if payment_status not in ["paid", "free_access"]:
        logger.info(f"Skipping progression check for non-paid user: {email} ({payment_status})")
        return {"status": "skipped", "reason": "user is not paid/free_access"}

    if current_day is None:
        logger.info("current_day is null. Skipping.")
        return {"status": "skipped", "reason": "current_day is null"}

    # Handle default if last_email_sent_day is missing or null
    if last_email_sent_day is None:
        last_email_sent_day = 1

    # Check if current_day has actually changed/increased
    old_current_day = old_record.get("current_day")
    if old_current_day is not None and current_day == old_current_day:
        logger.info(f"current_day didn't change (was {old_current_day}, is {current_day}). Skipping.")
        return {"status": "skipped", "reason": "current_day did not change"}

    if current_day <= last_email_sent_day:
        logger.info(f"current_day ({current_day}) is not greater than last_email_sent_day ({last_email_sent_day}). Skipping.")
        return {"status": "skipped", "reason": "progression email already sent or not advanced"}

    if current_day <= 1:
        logger.info("current_day is 1 or less (welcome stage). Skipping progression email.")
        return {"status": "skipped", "reason": "current_day <= 1"}

    # Trigger progression email
    lesson_title = LESSON_TITLES.get(current_day, f"Day {current_day} Module")
    logger.info(f"Day {current_day} unlocked for {full_name} ({email})! Sending progression email...")
    
    # Send email synchronously
    process_and_send_progression_email(
        full_name,
        email,
        current_day,
        lesson_title
    )

    # Sync database last_email_sent_day to avoid duplicate triggers
    if supabase_client:
        try:
            modules_completed = current_day - 1
            program_progress = int(round((modules_completed / 18) * 100))
            
            update_payload = {
                "last_email_sent_day": current_day,
                "modules_completed": modules_completed,
                "program_progress": program_progress,
                "stage_title": lesson_title
            }
            supabase_client.table("profiles").update(update_payload).eq("email", email).execute()
            logger.info(f"Successfully updated database progression state for {email}")
        except Exception as e:
            logger.error(f"Failed to update database progression state: {str(e)}")
    else:
        logger.warning("Supabase client not initialized, skipping database sync.")

    return {
        "status": "sent",
        "recipient": email,
        "current_day": current_day,
        "message": f"Progression email for Day {current_day} sent."
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
        query = supabase_client.table("profiles").select("*").in_("payment_status", ["paid", "free_access"])
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
            
            # Reset times to 00:00:00 in IST (+05:30) to calculate calendar day difference
            from datetime import timedelta
            ist = timezone(timedelta(hours=5, minutes=30))
            enroll_date_clean = enroll_date.astimezone(ist).date()
            today_clean = current_time.astimezone(ist).date()
            
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
    Direct endpoint to verify that email settings are correct.
    """
    logger.info(f"Sending manual test email to {request.email}...")
    try:
        subject = "PrimeVerse Test Connection"
        html_body = render_welcome_template(request.full_name, request.email, "primeverse@123", "PrimeVerse Mastery Program")
        send_email(request.email, subject, html_body)
        return {
            "status": "success",
            "message": f"Test email successfully sent to {request.email}."
        }
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Email test failed: {str(e)}"
        )

@app.post("/api/test-progression")
async def send_test_progression_email(request: TestProgressionRequest):
    """
    Direct endpoint to verify and test rendering/sending of the daily progression email.
    """
    logger.info(f"Sending test progression email for Day {request.day} to {request.email}...")
    try:
        lesson_title = LESSON_TITLES.get(request.day, f"Day {request.day} Module")
        day_str = f"{request.day:02d}"
        subject = f"Day {request.day} Unlocked"
        html_body = render_progression_template(request.full_name, day_str, lesson_title)
        send_email(request.email, subject, html_body)
        return {
            "status": "success",
            "message": f"Test progression email (Day {request.day}) successfully sent to {request.email}."
        }
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Email test failed: {str(e)}"
        )

if __name__ == "__main__":
    import uvicorn
    # Load config port
    port = int(os.getenv("PORT", "8000"))
    logger.info(f"Starting server on port {port}...")
    uvicorn.run("main:app", host="0.0.0.0", port=port, reload=True)
