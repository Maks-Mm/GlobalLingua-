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
app.use(express.static(path.join(__dirname, "public")));

app.post("/api/contact", async (req, res) => {
    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            },
            tls: {
                minVersion: "TLSv1.2",
                rejectUnauthorized: false  // Add this line to bypass certificate verification
            }
        });

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: "Languages0909@gmail.com",
            subject: "New Appointment Request",
            text: `Name: ${req.body.fullName}
Email: ${req.body.email}
Phone: ${req.body.phone}
Language: ${req.body.language}
Appointment: ${req.body.appointment}`
        });

        return res.json({ message: "Sent" });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Email failed: " + err.message });
    }
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on ${PORT}`);
});