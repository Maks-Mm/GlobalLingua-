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

app.post("/api/contact", async (req, res) => {
    try {
        const emailUser = (process.env.EMAIL_USER || "").trim();
        const emailPass = (process.env.EMAIL_PASS || "").replace(/\s/g, "");

        if (!emailUser || !emailPass) {
            return res.status(500).json({ message: "Missing email credentials" });
        }

        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: emailUser,
                pass: emailPass
            }
        });

        await transporter.verify();

        const info = await transporter.sendMail({
            from: `"GlobalLingua Academy" <${emailUser}>`,
            to: emailUser,
            replyTo: req.body.email,
            subject: "New Appointment Request",
            text: `Name: ${req.body.fullName}
Email: ${req.body.email}
Phone: ${req.body.phone}
Language: ${req.body.language}
Appointment: ${req.body.appointment}`
        });

        return res.json({ ok: true, messageId: info.messageId });

    } catch (err) {
        console.error(err);
        return res.status(500).json({ ok: false });
    }
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});