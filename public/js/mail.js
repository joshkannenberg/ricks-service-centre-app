const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');
require('dotenv').config();

const auth = {
    auth: {
        api_key: '07845d664cfc649b36f215e340bcda82-f135b0f1-5914917e',
        domain: 'sandbox2ccbeefb3557473f929569c6fc7fc4bb.mailgun.org'
    }
};

const transporter = nodemailer.createTransport(mailGun(auth));

const mailOptions = {
    from: 'jr23yt@gmail.com',
    to: 'joshkannenberg@icloud.com',
    subject: 'Testing',
    text: 'I would like to get in touch with you'
};

transporter.sendMail(mailOptions, function(err, data) {
    if (err) {
        console.log('Error Occurs');
    } else {
        console.log('Message Sent!')
    }
});