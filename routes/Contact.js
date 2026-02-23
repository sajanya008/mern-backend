const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

router.post("/send-contact", async (req, res) => {
    const { name, email, phone, subject, message } = req.body;

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.ADMIN_EMAIL,
            subject: subject,
            text: `
Name: ${name}
Email: ${email}
Phone: ${phone}

Message:
${message}
            `,
        };

        await transporter.sendMail(mailOptions);

        res.json({ message: "Message sent successfully!" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Email sending failed" });
    }
});

module.exports = router;