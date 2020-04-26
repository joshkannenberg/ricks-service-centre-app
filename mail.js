const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');
require('dotenv').config();

const auth = {
    auth: {
        api_key: process.env.API_KEY,
        domain: 'sandbox2ccbeefb3557473f929569c6fc7fc4bb.mailgun.org'
    }
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (name, email, subject, text, cb) => {
    const mailOptions = {
        name: name,
        from: email,
        to: 'joshkannenberg@icloud.com',
        subject,
        text: text + '\n' + '\n' + 'Message sent from ' + name + ' via ricksservicecentre.com'
    };

    transporter.sendMail(mailOptions, function(err, data) {
        if (err) {
            cb(err, null);
        } else {
            cb(null, data);
        }
    });
}

module.exports = sendMail;

