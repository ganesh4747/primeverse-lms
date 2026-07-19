const path = require('path');
const fs = require('fs');
const { createClient } = require('@supabase/supabase-js');
const nodemailer = require('nodemailer');

// Load environment variables
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SUPABASE_KEY) {
    console.error("❌ SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY is missing from environment. Exiting.");
    process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const LESSON_TITLES = {
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
};

// Configure SMTP transporter
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_PORT === '465',
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    }
});

const sendEmail = async (to, subject, html) => {
    const mailOptions = {
        from: process.env.SMTP_FROM || `"PrimeVerse LMS" <${process.env.SMTP_USER}>`,
        to,
        subject,
        html
    };
    try {
        await transporter.sendMail(mailOptions);
        console.log(`✉️ Email successfully sent to ${to}`);
        return true;
    } catch (err) {
        console.error(`❌ Failed to send email to ${to}:`, err.message);
        throw err;
    }
};

const renderTemplate = (filename, data) => {
    const templatePath = path.join(__dirname, 'templates', filename);
    if (!fs.existsSync(templatePath)) {
        return `<html><body><h1>Notification</h1><p>${JSON.stringify(data)}</p></body></html>`;
    }
    let html = fs.readFileSync(templatePath, 'utf8');
    for (const key in data) {
        const regex = new RegExp(`{{\\s*${key}\\s*}}`, 'g');
        html = html.replace(regex, data[key] || '');
    }
    return html;
};

// 1. Listen for new profiles (INSERT) -> Send welcome email
supabase
    .channel('profiles-insert')
    .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'profiles' }, async (payload) => {
        console.log("Realtime event detected: public.profiles [INSERT]");
        const record = payload.new || {};
        const email = record.email;
        const full_name = record.full_name || 'New User';
        const password = record.password || '';
        const selected_course = record.selected_course || '';

        if (!email) return;

        console.log(`🚀 Triggering welcome email for ${full_name} (${email})...`);
        const subject = "Welcome to PrimeVerse!";
        const html = renderTemplate('welcome.html', {
            full_name,
            email,
            password,
            selected_course
        });

        try {
            await sendEmail(email, subject, html);
        } catch (err) {
            console.error("Welcome email failed:", err.message);
        }
    })
    .subscribe();

// 2. Listen for profiles updates (UPDATE) -> Progression email
supabase
    .channel('profiles-update')
    .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'profiles' }, async (payload) => {
        const record = payload.new || {};
        const email = record.email;
        const full_name = record.full_name || 'Trader';
        const current_day = record.current_day;
        const last_email_sent_day = record.last_email_sent_day;
        const payment_status = record.payment_status;

        if (!email || current_day === undefined || last_email_sent_day === undefined) return;

        if (payment_status !== 'paid' && payment_status !== 'free_access') return;

        if (current_day > last_email_sent_day && current_day > 1) {
            const lesson_title = LESSON_TITLES[current_day] || `Day ${current_day} Module`;
            console.log(`📅 Day ${current_day} unlocked for ${full_name} (${email})! Triggering progression email...`);
            
            const day_str = String(current_day).padStart(2, '0');
            const subject = `Day ${current_day} Unlocked`;
            const html = renderTemplate('progression.html', {
                full_name,
                name: full_name,
                day_str,
                day: day_str,
                lesson_title,
                module_name: lesson_title
            });

            try {
                await sendEmail(email, subject, html);
                // Update last_email_sent_day in DB
                await supabase
                    .from('profiles')
                    .update({ last_email_sent_day: current_day })
                    .eq('email', email);
                console.log(`✅ Updated last_email_sent_day to ${current_day} for ${email}`);
            } catch (err) {
                console.error("Progression email failed:", err.message);
            }
        }
    })
    .subscribe();

// 3. Listen for concept submissions (INSERT) -> Admin submission alert
supabase
    .channel('concept_submissions-insert')
    .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'concept_submissions' }, async (payload) => {
        console.log("Realtime event detected: public.concept_submissions [INSERT]");
        const record = payload.new || {};
        const student_email = record.user_email;
        const student_name = record.user_name || 'PrimeVerse Student';
        const module_name = record.module || 'Unknown Module';
        const concept_name = record.concept_name || 'Unknown Concept';
        const explanation = record.explanation || 'No description provided.';
        const screenshot_url = record.screenshot_url;

        if (!student_email) return;

        console.log(`🔔 Triggering submission admin alert for student ${student_name} (${student_email})...`);
        const subject = `New concept submission from ${student_name}`;
        
        let adminEmails = [];
        try {
            const { data, error } = await supabase.from('admins').select('email');
            if (!error && data) {
                adminEmails = data.map(r => r.email).filter(Boolean);
            }
        } catch (err) {
            console.error('Failed to fetch admins from DB:', err.message);
        }

        if (adminEmails.length === 0) {
            adminEmails = [process.env.ADMIN_EMAIL || 'harishramanan4415@gmail.com'];
        }

        const html = renderTemplate('admin_submission_alert.html', {
            student_name,
            student_email,
            module_name,
            concept_name,
            explanation,
            screenshot_url: screenshot_url || '',
            workspace_url: process.env.LMS_WORKSPACE_URL || 'https://www.primeverseportal.pro/html/oneonecommunity.html'
        });

        for (const email of adminEmails) {
            try {
                await sendEmail(email, subject, html);
            } catch (err) {
                console.error(`Failed to send submission alert to ${email}:`, err.message);
            }
        }
    })
    .subscribe();

// 4. Listen for concept messages (INSERT) -> Chat replies alert
supabase
    .channel('concept_messages-insert')
    .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'concept_messages' }, async (payload) => {
        console.log("Realtime event detected: public.concept_messages [INSERT]");
        const record = payload.new || {};
        const sender_email = record.sender_email;
        const sender_name = record.sender_name || 'Student';
        const sender_role = record.sender_role || 'student';
        const message_text = record.message_text || '';
        const submission_id = record.submission_id;

        if (!message_text) return;

        let concept_name = "Unknown Concept";
        let module_name = "Unknown Module";
        let student_email = null;
        let student_name = "Student";

        if (submission_id) {
            try {
                const { data, error } = await supabase
                    .from('concept_submissions')
                    .select('concept_name, module, user_email, user_name')
                    .eq('id', submission_id);
                if (!error && data && data.length > 0) {
                    concept_name = data[0].concept_name || concept_name;
                    module_name = data[0].module || module_name;
                    student_email = data[0].user_email;
                    student_name = data[0].user_name || student_name;
                }
            } catch (err) {
                console.error('Failed to fetch submission context for realtime message alert:', err.message);
            }
        }

        // 1. Send notification to admin(s)
        console.log(`💬 Triggering message admin alert for message from ${sender_name}...`);
        let adminEmails = [];
        try {
            const { data, error } = await supabase.from('admins').select('email');
            if (!error && data) {
                adminEmails = data.map(r => r.email).filter(Boolean);
            }
        } catch (err) {
            console.error('Failed to fetch admins from DB:', err.message);
        }

        if (adminEmails.length === 0) {
            adminEmails = [process.env.ADMIN_EMAIL || 'harishramanan4415@gmail.com'];
        }

        const adminSubject = `New support message from ${sender_name} (Concept: ${concept_name})`;
        const adminHtml = renderTemplate('admin_message_alert.html', {
            sender_name,
            sender_email,
            message_text,
            concept_name,
            module_name,
            workspace_url: process.env.LMS_WORKSPACE_URL || 'https://www.primeverseportal.pro/html/oneonecommunity.html'
        });

        for (const email of adminEmails) {
            try {
                await sendEmail(email, adminSubject, adminHtml);
            } catch (err) {
                console.error(`Failed to send message alert to admin ${email}:`, err.message);
            }
        }

        // 2. Send notification to student
        if (student_email) {
            console.log(`💬 Triggering message student alert for student ${student_name} (${student_email})...`);
            const studentSubject = `New reply from your PrimeVerse Mentor (Concept: ${concept_name})`;
            const studentHtml = renderTemplate('student_message_alert.html', {
                student_name,
                message_text,
                concept_name,
                module_name,
                workspace_url: process.env.LMS_WORKSPACE_URL || 'https://www.primeverseportal.pro/html/oneonecommunity.html'
            });

            try {
                await sendEmail(student_email, studentSubject, studentHtml);
            } catch (err) {
                console.error(`Failed to send reply to student ${student_email}:`, err.message);
            }
        }
    })
    .subscribe();

// 5. Listen for community messages (INSERT) -> Broadcast announcement to all traders
supabase
    .channel('community_messages-insert')
    .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'community_messages' }, async (payload) => {
        console.log("Realtime event detected: public.community_messages [INSERT]");
        const record = payload.new || {};
        const sender_name = record.sender_name || 'Founder';
        const sender_title = record.sender_title || 'Founder';
        const message_text = record.message_text || '';

        if (!message_text) return;

        // Fetch all enrolled/paid profiles to send notifications
        let profiles = [];
        try {
            const { data, error } = await supabase
                .from('profiles')
                .select('email, full_name')
                .in('payment_status', ['paid', 'free_access']);
            if (!error && data) {
                profiles = data.filter(p => p.email);
            }
        } catch (err) {
            console.error('Failed to fetch profiles for broadcast:', err.message);
        }

        console.log(`Broadcasting announcement to ${profiles.length} trader(s)...`);
        
        const subject = `📢 New Announcement from PrimeVerse`;
        
        for (const profile of profiles) {
            const html = renderTemplate('announcement.html', {
                trader_name: profile.full_name || 'PrimeVerse Trader',
                sender_name,
                sender_title,
                message_text,
                workspace_url: process.env.LMS_WORKSPACE_URL || 'https://www.primeverseportal.pro/html/communitypage.html'
            });
            try {
                await sendEmail(profile.email, subject, html);
            } catch (err) {
                console.error(`Failed to send broadcast email to ${profile.email}:`, err.message);
            }
        }
    })
    .subscribe();

console.log("⚡ Node.js Realtime Listener initialized. Listening to public schema events...");
