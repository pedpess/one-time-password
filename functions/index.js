const admin = require('firebase-admin');
const functions = require('firebase-functions');
const create_user = require('./create_user');
const serviceAccount = require('./service_account.json');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://one-time-password-6f6b1.firebaseio.com"
    });

exports.create_user = functions.https.onRequest(create_user);


