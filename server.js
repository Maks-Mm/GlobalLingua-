import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.static(path.join(process.cwd(), "public")));

// Simple contact endpoint that always works
app.post("/api/contact", (req, res) => {
    const { fullName, email, phone, language, appointment } = req.body;
    
    console.log("\n📨 New Appointment Request:");
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    console.log(`👤 Name: ${fullName || 'Not provided'}`);
    console.log(`📧 Email: ${email || 'Not provided'}`);
    console.log(`📱 Phone: ${phone || 'Not provided'}`);
    console.log(`🌍 Language: ${language || 'Not provided'}`);
    console.log(`📅 Appointment: ${appointment || 'Not specified'}`);
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");
    
    // Always return success
    res.json({ 
        success: true, 
        message: "Request received! We'll contact you within 24 hours."
    });
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
    console.log(`✅ Health check: https://globallingua.onrender.com/health`);
    console.log(`📝 Contact requests will be logged to console\n`);
});