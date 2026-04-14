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

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    },
    socketTimeout: 15000,
    connectionTimeout: 10000
});

app.post("/api/contact", async (req, res) => {
    try {
        const info = await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            replyTo: req.body.email,
            subject: "New Appointment Request",
            text: JSON.stringify(req.body)
        });

        return res.json({ ok: true, messageId: info.messageId });
    } catch (err) {
        console.error("MAIL ERROR:", err);
        return res.status(500).json({ ok: false, error: err.message });
    }
});
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});


//http://localhost:3000/