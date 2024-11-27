
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
        user: "6363jigarpatel@gmail.com",
        pass: "saic boqc zzsy bqgz",
    },
    secure: true,
});

const sendOtp = (to, subject, html) => {
    const mailData = {
        from: "6363jigarpatel@gmail.com",
        to: to,
        subject: subject,
        html: html,
    }
    transporter.sendMail(mailData);
}

module.exports = sendOtp;
