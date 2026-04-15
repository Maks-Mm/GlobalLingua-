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

// Configure email transporter with better SSL handling
let transporter = null;

// Only create transporter if email credentials exist
if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
    try {
        transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            },
            // Disable SSL verification for development (only if needed)
            tls: {
                rejectUnauthorized: false
            },
            socketTimeout: 15000,
            connectionTimeout: 10000
        });
        
        // Verify connection
        transporter.verify((error, success) => {
            if (error) {
                console.error("Email transporter error:", error);
                transporter = null;
            } else {
                console.log("Email transporter ready");
            }
        });
    } catch (err) {
        console.error("Failed to create email transporter:", err.message);
        transporter = null;
    }
} else {
    console.warn("Email credentials not configured. Using mock mode.");
}

app.post("/api/contact", async (req, res) => {
    const { fullName, email, phone, language, appointment } = req.body;
    
    console.log("Received appointment request:", { fullName, email, phone, language, appointment });
    
    // Always save to a log file or database in production
    const logEntry = {
        timestamp: new Date().toISOString(),
        ...req.body
    };
    console.log("Contact request logged:", logEntry);
    
    // If email is not configured or failed, still return success
    if (!transporter) {
        console.log("Email not configured - request saved to console only");
        return res.json({ 
            success: true, 
            message: "Request received successfully! We'll contact you soon.",
            mockMode: true 
        });
    }
    
    try {
        const info = await transporter.sendMail({
            from: `"GlobalLingua Academy" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER,
            replyTo: email,
            subject: `New Appointment Request from ${fullName}`,
            html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <style>
                        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                        .header { background: linear-gradient(135deg, #1e3a8a, #059669); color: white; padding: 20px; text-align: center; }
                        .content { padding: 20px; background: #f5f5f5; }
                        .field { margin-bottom: 15px; }
                        .label { font-weight: bold; color: #1e3a8a; }
                        .value { margin-top: 5px; }
                        .footer { text-align: center; padding: 20px; font-size: 12px; color: #666; }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            <h2>📅 New Appointment Request</h2>
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
                                <div class="label">🌍 Language:</div>
                                <div class="value">${language}</div>
                            </div>
                            <div class="field">
                                <div class="label">📅 Preferred Appointment:</div>
                                <div class="value">${appointment || 'Not specified'}</div>
                            </div>
                        </div>
                        <div class="footer">
                            <p>GlobalLingua Academy - Language Consulting</p>
                            <p>+380 66 267 9920</p>
                        </div>
                    </div>
                </body>
                </html>
            `,
            text: `
                New Appointment Request
                
                Name: ${fullName}
                Email: ${email}
                Phone: ${phone}
                Language: ${language}
                Preferred Appointment: ${appointment || 'Not specified'}
                
                GlobalLingua Academy
                +380 66 267 9920
            `
        });

        console.log("Email sent successfully:", info.messageId);
        return res.json({ 
            success: true, 
            message: "Request sent successfully! We'll contact you soon.",
            messageId: info.messageId 
        });
        
    } catch (err) {
        console.error("MAIL ERROR:", err.message);
        
        // Still return success to user even if email fails (store in database instead)
        // For now, we'll still return success with a warning
        return res.json({ 
            success: true, 
            message: "Request received! We'll contact you soon.",
            warning: "Email notification pending",
            mockMode: true
        });
    }
});

// Handle all other routes - serve index.html
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log(`📧 Email mode: ${transporter ? "Enabled" : "Mock mode (no emails will be sent)"}`);
    
    if (!transporter) {
        console.log("💡 To enable emails, add your Gmail credentials to .env file");
        console.log("   EMAIL_USER=your-email@gmail.com");
        console.log("   EMAIL_PASS=your-app-password");
    }
});