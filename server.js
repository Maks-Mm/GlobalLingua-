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
    const { fullName, email, phone, language, appointment } = req.body;

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
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: "Languages0909@gmail.com",
            subject: "New Appointment Request",
            text: `
Name: ${fullName}
Email: ${email}
Phone: ${phone}
Language: ${language}
Appointment: ${appointment}
`
        });

        res.json({ message: "Sent" });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Email failed" });
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});