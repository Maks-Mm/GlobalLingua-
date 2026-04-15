import express from "express";
import path from "path";
import nodemailer from "nodemailer";
import { fileURLToPath } from "url";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.static(path.join(process.cwd(), "public")));

// Configure email transporter with Render environment variables
let transporter = null;

// Log environment variables status (without exposing values)
console.log("📧 Checking email configuration...");
console.log(`EMAIL_USER ${process.env.EMAIL_USER ? "✅ is set" : "❌ is NOT set"}`);
console.log(`EMAIL_PASS ${process.env.EMAIL_PASS ? "✅ is set" : "❌ is NOT set"}`);

if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
    try {
        transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            },
            tls: {
                rejectUnauthorized: false
            },
            connectionTimeout: 10000,
            socketTimeout: 10000
        });
        
        // Verify the connection
        await transporter.verify();
        console.log("✅ Email transporter ready - Gmail configured successfully");
    } catch (err) {
        console.error("❌ Email transporter error:", err.message);
        console.log("⚠️  Will continue without email (console logging only)");
        transporter = null;
    }
} else {
    console.log("❌ Email credentials missing - will use console logging only");
}

app.post("/api/contact", async (req, res) => {
    const { fullName, email, phone, language, appointment } = req.body;
    
    console.log("\n📨 New Appointment Request:");
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    console.log(`👤 Name: ${fullName || 'Not provided'}`);
    console.log(`📧 Email: ${email || 'Not provided'}`);
    console.log(`📱 Phone: ${phone || 'Not provided'}`);
    console.log(`🌍 Language: ${language || 'Not provided'}`);
    console.log(`📅 Appointment: ${appointment || 'Not specified'}`);
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");
    
    // Try to send email if transporter is configured
    let emailSent = false;
    let emailError = null;
    
    if (transporter) {
        try {
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
                                <div class="value">${fullName || 'Not provided'}</div>
                            </div>
                            <div class="field">
                                <div class="label">📧 Email:</div>
                                <div class="value">${email || 'Not provided'}</div>
                            </div>
                            <div class="field">
                                <div class="label">📱 Phone:</div>
                                <div class="value">${phone || 'Not provided'}</div>
                            </div>
                            <div class="field">
                                <div class="label">🌍 Language:</div>
                                <div class="value">${language || 'Not provided'}</div>
                            </div>
                            <div class="field">
                                <div class="label">📅 Preferred Appointment:</div>
                                <div class="value">${appointment || 'Not specified'}</div>
                            </div>
                        </div>
                        <div class="footer">
                            <p>🌐 GlobalLingua Academy - Language Consulting</p>
                            <p>📞 +380 66 267 9920 | 💬 WhatsApp Available</p>
                            <p>🌍 Helping you master languages for career and life</p>
                        </div>
                    </div>
                </body>
                </html>
            `;
            
            const mailOptions = {
                from: `"GlobalLingua Academy" <${process.env.EMAIL_USER}>`,
                to: process.env.EMAIL_USER, // Send to your email
                replyTo: email,
                subject: `📅 New Appointment: ${fullName} wants to learn ${language}`,
                html: emailHtml,
                text: `
                    New Appointment Request from GlobalLingua Academy
                    
                    Name: ${fullName}
                    Email: ${email}
                    Phone: ${phone}
                    Language: ${language}
                    Preferred Appointment: ${appointment || 'Not specified'}
                    
                    ---
                    GlobalLingua Academy
                    +380 66 267 9920
                `
            };
            
            const info = await transporter.sendMail(mailOptions);
            console.log("✅ Email sent successfully to:", process.env.EMAIL_USER);
            console.log("📧 Message ID:", info.messageId);
            emailSent = true;
            
        } catch (err) {
            console.error("❌ Email sending error:", err.message);
            emailError = err.message;
        }
    }
    
    // Return response
    res.json({ 
        success: true, 
        message: emailSent ? "Request received! We'll email you within 24 hours." : "Request received! We'll contact you within 24 hours.",
        emailSent: emailSent,
        emailError: emailError || null
    });
});

// Health check endpoint
app.get("/health", (req, res) => {
    res.json({ 
        status: "ok", 
        timestamp: new Date().toISOString(),
        emailConfigured: !!transporter
    });
});

// Serve index.html for all other routes
app.get("*", (req, res) => {
    res.sendFile(path.join(process.cwd(), "public", "index.html"));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`\n🚀 Server running on port ${PORT}`);
    console.log(`📧 Email: ${transporter ? "✅ ENABLED - Sending to " + process.env.EMAIL_USER : "❌ DISABLED (console only)"}`);
    console.log(`✅ Health check: https://globallingua.onrender.com/health`);
    console.log(`📝 Contact requests will be ${transporter ? "emailed AND " : ""}logged to console\n`);
});