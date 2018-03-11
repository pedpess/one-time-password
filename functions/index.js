const functions = require('firebase-functions');
const create_user = require('./create_user');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.create_user = functions.https.onRequest(create_user);


