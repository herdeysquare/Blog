const functions = require('firebase-functions');
const admin = require('firebase-admin');
const mailgun = require('mailgun-js');

admin.initializeApp();

const mg = mailgun({apiKey: '5de4a98c979cb5b5316794b43c221885-51356527-9d0f2907', domain: 'sandboxc59bcc4a0afe4d0cb5933e03275d8957.mailgun.org'});

exports.sendWelcomeEmail = functions.firestore
    .document('subscriptions/{docId}')
    .onCreate((snap, context) => {
        const email = snap.data().email;

        const data = {
            from: 'Excited User <me@samples.mailgun.org>',
            to: email,
            subject: 'Welcome to Beau_tified Enterprises!',
            text: 'Thank you for subscribing to our newsletter!',
            html: '<strong>Thank you for subscribing to our newsletter!</strong>'
        };

        return mg.messages().send(data)
            .then(() => {
                console.log('Welcome email sent to:', email);
            })
            .catch((error) => {
                console.error('Error sending welcome email:', error);
            });
    });
