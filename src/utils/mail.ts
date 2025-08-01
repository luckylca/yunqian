import * as nodemailer from 'nodemailer';
import { Options as SMTPTransportOptions } from 'nodemailer/lib/smtp-transport';

const transporter = nodemailer.createTransport({
    host: 'smtp.qq.com',
    port: 465,
    secure: true,
    secureConnection: true,
    auth: {
        user: '2777681179@qq.com',
        pass: 'eftkmleaduqmdcha'
    }
} as SMTPTransportOptions);

const mailOptions = {
    from: '2777681179@qq.com',
    to: '',
    subject: '',
    text: ''
};

const sendMail = (to: string, subject: string, text: string) => {
    mailOptions.to = to;
    mailOptions.subject = subject;
    mailOptions.text = text;

    transporter.sendMail(mailOptions, (error: Error | null, info: nodemailer.SentMessageInfo) => {
        if (error) {
            console.error('Error sending email:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });
};


export {
    sendMail
};
