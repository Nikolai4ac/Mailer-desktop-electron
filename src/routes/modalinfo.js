const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const mailSendRouter = express.Router();
const { getReceiversString } = require('../routes/prepare');
mailSendRouter.use(bodyParser.json({limit: '20mb'}))
mailSendRouter.use(bodyParser.urlencoded({limit: '20mb',extended: false}))
let emailSubject, emailText, emailReceivers;
mailSendRouter.post('/send-email-data', (req, res) => {
    const data = req.body;
    emailSubject = data.subject;
    emailText = data.message;
    emailReceivers = getReceiversString();
    async function test () {
        let transportUnit = nodemailer.createTransport({
            service: '',
            auth: {
                user: "",
                pass: ""
            }
        });
        let infoMail = {
            from: '"" <>',
            to: emailReceivers,
            subject: emailSubject,
            text: emailText
        }
        transportUnit.sendMail(infoMail, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log(`Email sent: ${info.response}`);
            }
        })
    }
    test()
    res.end();
})
module.exports = mailSendRouter;

