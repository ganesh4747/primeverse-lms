const http = require('http');
const fs = require('fs');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');
const nodemailer = require('nodemailer');

// Load environment variables from the root .env file
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

const supabase = (SUPABASE_URL && SUPABASE_KEY) ? createClient(SUPABASE_URL, SUPABASE_KEY) : null;

if (!supabase) {
    console.warn("WARNING: SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY missing. Supabase integration disabled.");
}

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

// Simple template renderer using string replacement
const renderTemplate = (filename, data) => {
    const templatePath = path.join(__dirname, 'templates', filename);
    if (!fs.existsSync(templatePath)) {
        // Fallback fallback simple template if files are missing
        return `<html><body><h1>Notification</h1><p>${JSON.stringify(data)}</p></body></html>`;
    }
    let html = fs.readFileSync(templatePath, 'utf8');
    for (const key in data) {
        const regex = new RegExp(`{{\\s*${key}\\s*}}`, 'g');
        html = html.replace(regex, data[key] || '');
    }
    return html;
};

const server = http.createServer(async (req, res) => {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }

    if (req.url === '/api/send-admin-alert' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => { body += chunk.toString(); });
        req.on('end', async () => {
            try {
                if (!body) {
                    res.writeHead(400, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ error: 'Empty payload' }));
                    return;
                }
                const payload = JSON.parse(body);
                console.log(`[HTTP] Received email trigger request: Table: ${payload.table}, Type: ${payload.type}`);
                
                if (payload.type !== 'INSERT') {
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ status: 'skipped', reason: 'unsupported event type' }));
                    return;
                }

                const record = payload.record || {};

                if (payload.table === 'concept_submissions') {
                    const student_email = record.user_email;
                    const student_name = record.user_name || 'PrimeVerse Student';
                    const module_name = record.module || 'Unknown Module';
                    const concept_name = record.concept_name || 'Unknown Concept';
                    const explanation = record.explanation || 'No description provided.';
                    const screenshot_url = record.screenshot_url;

                    if (!student_email) {
                        res.writeHead(200, { 'Content-Type': 'application/json' });
                        res.end(JSON.stringify({ status: 'skipped', reason: 'missing student email' }));
                        return;
                    }

                    let adminEmails = [];
                    if (supabase) {
                        try {
                            const { data, error } = await supabase.from('admins').select('email');
                            if (!error && data) {
                                adminEmails = data.map(r => r.email).filter(Boolean);
                            }
                        } catch (err) {
                            console.error('Failed to fetch admins from DB:', err.message);
                        }
                    }

                    if (adminEmails.length === 0) {
                        const rawAdminEmail = process.env.ADMIN_EMAIL || 'harishramanan4415@gmail.com';
                        adminEmails = rawAdminEmail.split(',').map(e => e.trim()).filter(Boolean);
                    }

                    console.log(`Sending new submission alert to ${adminEmails.length} admin(s)...`);
                    const subject = `New concept submission from ${student_name}`;
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
                        await sendEmail(email, subject, html);
                    }

                    res.writeHead(202, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ status: 'queued', recipient: 'admin' }));
                    return;
                } else if (payload.table !== 'concept_messages') {
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ status: 'skipped', reason: 'unsupported table' }));
                    return;
                }
                const sender_role = record.sender_role;
                const sender_name = record.sender_name || 'Student';
                const sender_email = record.sender_email;
                const message_text = record.message_text || '';
                const submission_id = record.submission_id;

                if (!message_text) {
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ status: 'skipped', reason: 'empty message' }));
                    return;
                }

                let concept_name = record.concept_name || "Unknown Concept";
                let module_name = record.module || record.module_name || "Unknown Module";
                let student_email = record.student_email || record.user_email || null;
                let student_name = record.student_name || record.user_name || "Student";

                if ((!student_email || concept_name === "Unknown Concept") && supabase && submission_id) {
                    try {
                        const { data, error } = await supabase
                            .from('concept_submissions')
                            .select('concept_name, module, user_email, user_name')
                            .eq('id', submission_id);
                        if (!error && data && data.length > 0) {
                            if (concept_name === "Unknown Concept") {
                                concept_name = data[0].concept_name || concept_name;
                            }
                            if (module_name === "Unknown Module") {
                                module_name = data[0].module || module_name;
                            }
                            if (!student_email) {
                                student_email = data[0].user_email;
                            }
                            if (student_name === "Student") {
                                student_name = data[0].user_name || student_name;
                            }
                            console.log(`Resolved database context: Concept: '${concept_name}', Student: '${student_email}'`);
                        }
                    } catch (err) {
                        console.error('Failed to query Supabase context:', err.message);
                    }
                }

                if (sender_role === 'student') {
                    // Fetch admins dynamically
                    let adminEmails = [];
                    if (supabase) {
                        try {
                            const { data, error } = await supabase.from('admins').select('email');
                            if (!error && data) {
                                adminEmails = data.map(r => r.email).filter(Boolean);
                            }
                        } catch (err) {
                            console.error('Failed to fetch admins from DB:', err.message);
                        }
                    }

                    if (adminEmails.length === 0) {
                        const rawAdminEmail = process.env.ADMIN_EMAIL || 'aashiqmustak5969@gmail.com';
                        adminEmails = rawAdminEmail.split(',').map(e => e.trim()).filter(Boolean);
                    }

                    console.log(`Sending student support notification to ${adminEmails.length} admin(s)...`);
                    const subject = `New support message from ${sender_name} (Concept: ${concept_name})`;
                    const html = renderTemplate('admin_message_alert.html', {
                        sender_name,
                        sender_email,
                        message_text,
                        concept_name,
                        module_name,
                        workspace_url: process.env.LMS_WORKSPACE_URL || 'https://www.primeverseportal.pro/html/oneonecommunity.html'
                    });

                    for (const email of adminEmails) {
                        await sendEmail(email, subject, html);
                    }

                    res.writeHead(202, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ status: 'queued', recipient: 'admin' }));
                } else if (sender_role === 'admin' || sender_role === 'mentor' || sender_role === 'system') {
                    // Check if this is the generic system auto-reply message ("Thanks for providing additional details...")
                    if (sender_role === 'system' && message_text.includes("Thanks for providing additional details")) {
                        console.log("Skipping student notification for automatic system comment.");
                        res.writeHead(200, { 'Content-Type': 'application/json' });
                        res.end(JSON.stringify({ status: 'skipped', reason: 'system auto-reply email skipped to prevent spam' }));
                        return;
                    }

                    if (!student_email) {
                        res.writeHead(400, { 'Content-Type': 'application/json' });
                        res.end(JSON.stringify({ status: 'skipped', reason: 'could not resolve student email' }));
                        return;
                    }

                    console.log(`Sending mentor reply notification to student ${student_email}...`);
                    const subject = `New reply from your PrimeVerse Mentor (Concept: ${concept_name})`;
                    const html = renderTemplate('student_message_alert.html', {
                        student_name,
                        message_text,
                        concept_name,
                        module_name,
                        workspace_url: process.env.LMS_WORKSPACE_URL || 'https://www.primeverseportal.pro/html/oneonecommunity.html'
                    });

                    await sendEmail(student_email, subject, html);

                    res.writeHead(202, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ status: 'queued', recipient: 'student' }));
                } else {
                    console.log(`Skipping notification: unsupported sender role '${sender_role}'`);
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ status: 'skipped', reason: `unsupported sender_role: ${sender_role}` }));
                }
            } catch (err) {
                console.error('Error handling request:', err.message);
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: err.message }));
            }
        });
    } else if (req.url === '/api/send-broadcast' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => { body += chunk.toString(); });
        req.on('end', async () => {
            try {
                if (!body) {
                    res.writeHead(400, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ error: 'Empty payload' }));
                    return;
                }
                const payload = JSON.parse(body);
                console.log(`[HTTP] Received broadcast trigger request: Table: ${payload.table}, Type: ${payload.type}`);
                
                if (payload.type !== 'INSERT' || payload.table !== 'community_messages') {
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ status: 'skipped', reason: 'unsupported table or event type' }));
                    return;
                }

                const record = payload.record || {};
                const sender_name = record.sender_name || 'Founder';
                const sender_title = record.sender_title || 'Founder';
                const message_text = record.message_text || '';

                if (!message_text) {
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ status: 'skipped', reason: 'empty message' }));
                    return;
                }

                // Fetch all enrolled/paid profiles to send notifications
                let profiles = [];
                if (supabase) {
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
                }

                console.log(`Broadcasting announcement to ${profiles.length} trader(s)...`);
                
                const subject = `📢 New Announcement from PrimeVerse`;
                
                // Send email to all profiles
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

                res.writeHead(202, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ status: 'queued', count: profiles.length }));
            } catch (err) {
                console.error('Error handling broadcast request:', err.message);
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: err.message }));
            }
        });
    } else if (req.url === '/api/send-welcome' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => { body += chunk.toString(); });
        req.on('end', async () => {
            try {
                if (!body) {
                    res.writeHead(400, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ error: 'Empty payload' }));
                    return;
                }
                const payload = JSON.parse(body);
                console.log(`[HTTP] Received welcome trigger request: Table: ${payload.table}, Type: ${payload.type}`);
                
                if (payload.type !== 'INSERT' || payload.table !== 'profiles') {
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ status: 'skipped', reason: 'unsupported table or event type' }));
                    return;
                }

                const record = payload.record || {};
                const email = record.email;
                const full_name = record.full_name || 'New User';
                const password = record.password || '';
                const selected_course = record.selected_course || '';

                if (!email) {
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ status: 'skipped', reason: 'email field missing or null' }));
                    return;
                }

                console.log(`Sending welcome email to ${email}...`);
                const subject = "Welcome to PrimeVerse!";
                const html = renderTemplate('welcome.html', {
                    full_name,
                    email,
                    password,
                    selected_course
                });

                await sendEmail(email, subject, html);

                res.writeHead(202, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ status: 'queued', recipient: email }));
            } catch (err) {
                console.error('Error handling welcome request:', err.message);
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: err.message }));
            }
        });
    } else {
        res.writeHead(404);
        res.end();
    }
});

const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
    console.log(`🚀 Node.js Email Trigger Service listening on port ${PORT}...`);
});
