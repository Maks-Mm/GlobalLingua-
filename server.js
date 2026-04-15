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

// Simple response without email hanging
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
    
    // Send immediate response (don't wait for email)
    res.json({ 
        success: true, 
        message: "Request received successfully! We'll contact you within 24 hours."
    });
    
    // Try to send email in the background (don't await)
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
        // Create transporter only when needed
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
        
        // Send email without blocking the response
        transporter.sendMail({
            from: `"GlobalLingua Academy" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER,
            replyTo: email,
            subject: `📅 New Appointment: ${fullName}`,
            html: `
                <h2>New Appointment Request</h2>
                <p><strong>Name:</strong> ${fullName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Language:</strong> ${language}</p>
                <p><strong>Appointment:</strong> ${appointment || 'Not specified'}</p>
            `
        }).then(() => {
            console.log("✅ Email sent successfully");
        }).catch((err) => {
            console.error("❌ Email error:", err.message);
        });
    } else {
        console.log("📧 Email not configured - request saved to console only");
    }
});

// Health check endpoint for Render
app.get("/health", (req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Serve index.html for all other routes
app.get("*", (req, res) => {
    res.sendFile(path.join(process.cwd(), "public", "index.html"));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`\n🚀 Server running on port ${PORT}`);
    console.log(`📧 Email: ${process.env.EMAIL_USER ? "Configured (will send in background)" : "Not configured"}`);
    console.log(`✅ Health check: http://localhost:${PORT}/health\n`);
});