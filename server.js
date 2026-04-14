import express from "express";
import nodemailer from "nodemailer";
import path from "path";
import dotenv from "dotenv";
import open from "open";
dotenv.config();

const app = express();

app.use(express.static("public")); // serve frontend
app.use(express.json({ limit: "1mb" }));

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

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);

    if (process.env.NODE_ENV !== "production") {
        open(`http://localhost:${PORT}`);
    }
});
//http://localhost:3000