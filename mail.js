const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');
require('dotenv').config();

const auth = {
    auth: {
        api_key: process.env.API_KEY,
        domain: 'sandboxbf0c02f690aa46a9814189021443d8e1.mailgun.org'
    }
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (name, email, subject, text, cb) => {
    const mailOptions = {
        name: name,
        from: email,
        to: 'ricksservice1974@gmail.com',
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

