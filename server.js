import express from "express";
import nodemailer from "nodemailer";
import path from "path";
import dotenv from "dotenv";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.static(path.join(process.cwd(), "public")));

// Configure email transporter
let transporter = null;

// Try multiple email configurations
function setupTransporter() {
    // Option 1: Gmail with App Password
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
        try {
            const transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS
                },
                tls: {
                    rejectUnauthorized: false
                }
            });
            
            transporter.verify((error, success) => {
                if (!error) {
                    console.log("✅ Gmail transporter ready");
                }
            });
            
            return transporter;
        } catch (err) {
            console.error("Gmail setup failed:", err.message);
        }
    }
    
    // Option 2: SendGrid (if you have API key)
    if (process.env.SENDGRID_API_KEY) {
        // You'll need to install: npm install @sendgrid/mail
        console.log("SendGrid not configured in this version");
    }
    
    return null;
}

transporter = setupTransporter();

// Log all requests to a file (for backup)
import fs from 'fs';
const LOG_FILE = 'contact-requests.log';

function logToFile(data) {
    const logEntry = {
        timestamp: new Date().toISOString(),
        ...data
    };
    fs.appendFileSync(LOG_FILE, JSON.stringify(logEntry) + '\n');
    console.log("📝 Logged to file:", logEntry);
}

app.post("/api/contact", async (req, res) => {
    const { fullName, email, phone, language, appointment } = req.body;
    
    console.log("\n📨 New Appointment Request:");
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    console.log(`👤 Name: ${fullName}`);
    console.log(`📧 Email: ${email}`);
    console.log(`📱 Phone: ${phone}`);
    console.log(`🌍 Language: ${language}`);
    console.log(`📅 Appointment: ${appointment || 'Not specified'}`);
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");
    
    // Always log to file (backup)
    logToFile({ fullName, email, phone, language, appointment });
    
    // Prepare email content
    const emailHtml = `
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: linear-gradient(135deg, #1e3a8a, #059669); color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0; }
                .content { padding: 20px; background: #f5f5f5; border: 1px solid #ddd; }
                .field { margin-bottom: 15px; padding: 10px; background: white; border-radius: 5px; }
                .label { font-weight: bold; color: #1e3a8a; }
                .value { margin-top: 5px; color: #333; }
                .footer { text-align: center; padding: 20px; font-size: 12px; color: #666; }
                .badge { display: inline-block; background: #059669; color: white; padding: 5px 10px; border-radius: 5px; font-size: 12px; }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h2>📅 New Appointment Request</h2>
                    <p class="badge">GlobalLingua Academy</p>
                </div>
                <div class="content">
                    <div class="field">
                        <div class="label">👤 Full Name:</div>
                        <div class="value">${fullName}</div>
                    </div>
                    <div class="field">
                        <div class="label">📧 Email:</div>
                        <div class="value">${email}</div>
                    </div>
                    <div class="field">
                        <div class="label">📱 Phone:</div>
                        <div class="value">${phone}</div>
                    </div>
                    <div class="field">
                        <div class="label">🌍 Language Interested:</div>
                        <div class="value">${language}</div>
                    </div>
                    <div class="field">
                        <div class="label">📅 Preferred Appointment:</div>
                        <div class="value">${appointment || 'Not specified'}</div>
                    </div>
                </div>
                <div class="footer">
                    <p>🌐 GlobalLingua Academy - Language Consulting</p>
                    <p>📞 +380 66 267 9920 | 💬 WhatsApp Available</p>
                    <p>📧 ${email}</p>
                </div>
            </div>
        </body>
        </html>
    `;
    
    const emailText = `
        New Appointment Request from GlobalLingua Academy
        
        Name: ${fullName}
        Email: ${email}
        Phone: ${phone}
        Language: ${language}
        Preferred Appointment: ${appointment || 'Not specified'}
        
        ---
        GlobalLingua Academy
        +380 66 267 9920
    `;
    
    // Try to send email if transporter is configured
    let emailSent = false;
    
    if (transporter) {
        try {
            const info = await transporter.sendMail({
                from: `"GlobalLingua Academy" <${process.env.EMAIL_USER}>`,
                to: process.env.EMAIL_USER, // Send to your email
                replyTo: email,
                subject: `📅 New Appointment: ${fullName} wants to learn ${language}`,
                html: emailHtml,
                text: emailText
            });
            
            console.log("✅ Email sent successfully:", info.messageId);
            emailSent = true;
            
        } catch (err) {
            console.error("❌ Email error:", err.message);
        }
    }
    
    // Always return success to the user
    // The request is saved in the log file even if email fails
    res.json({ 
        success: true, 
        message: "Request received successfully! We'll contact you within 24 hours.",
        emailSent: emailSent,
        timestamp: new Date().toISOString()
    });
});

// Optional: Endpoint to view logs (protect this in production)
app.get("/api/logs", (req, res) => {
    // In production, add authentication here
    if (process.env.NODE_ENV === 'production') {
        return res.status(403).json({ error: "Access denied" });
    }
    
    try {
        const logs = fs.readFileSync(LOG_FILE, 'utf8').split('\n').filter(Boolean);
        const last10Logs = logs.slice(-10).map(log => JSON.parse(log));
        res.json(last10Logs);
    } catch (err) {
        res.json([]);
    }
});

// Serve index.html for all other routes
app.get("*", (req, res) => {
    res.sendFile(path.join(process.cwd(), "public", "index.html"));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`\n🚀 Server running on http://localhost:${PORT}`);
    console.log(`📧 Email mode: ${transporter ? "✅ ENABLED" : "❌ DISABLED (using file logging)"}`);
    console.log(`📝 Contact requests are logged to: ${LOG_FILE}\n`);
    
    if (!transporter) {
        console.log("⚠️  To enable emails, add these environment variables on Render:");
        console.log("   EMAIL_USER=your-email@gmail.com");
        console.log("   EMAIL_PASS=your-gmail-app-password");
        console.log("\n   Or use a different email service.\n");
    }
});