const path = require('path');
const nodemailer = require('nodemailer');

// Load env
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const host = process.env.SMTP_HOST || 'smtp.gmail.com';
const port = parseInt(process.env.SMTP_PORT || '587');
const user = process.env.SMTP_USER;
const pass = process.env.SMTP_PASS;
const sender = process.env.SMTP_FROM || `"PrimeVerse LMS" <${user}>`;
const toEmail = process.env.ADMIN_EMAIL || 'harishramanan4415@gmail.com';

console.log("--- SMTP Configuration (Node) ---");
console.log(`Host: ${host}`);
console.log(`Port: ${port}`);
console.log(`User: ${user}`);
console.log(`Pass set: ${pass ? 'Yes' : 'No'}`);
console.log(`Sender: ${sender}`);
console.log(`To: ${toEmail}`);
console.log("---------------------------------");

if (!user || !pass) {
    console.error("Error: SMTP_USER or SMTP_PASS not set in .env");
    process.exit(1);
}

const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: {
        user,
        pass
    }
});

const mailOptions = {
    from: sender,
    to: toEmail,
    subject: "PrimeVerse Node SMTP Diagnostics Test",
    text: "This is a Node.js diagnostics test email from the PrimeVerse LMS service."
};

console.log("Attempting to send email...");
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error("FAILED: Email could not be sent. Error message:");
        console.error(error);
        process.exit(1);
    } else {
        console.log("SUCCESS: Test email sent successfully!");
        console.log("Response details:", info.response);
        process.exit(0);
    }
});
