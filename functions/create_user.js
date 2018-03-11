const admin = require('firebase-admin');

module.exports = function(req, res) {

    // Check if user has inputed a phone number
    if (!req.body.phone) {
        return res.status(422).send({ error: 'Bad Input' });
    }

    // Sanitize the input to make sure phone is a string and has no special char
    const phone = String(req.body.phone).replace(/[^\d]/g, "");

    // Create a new user account using phone and return if was rejected or solved promise
    return admin.auth.createUser({ uid: phone })
        .then(user => res.send(user))
        .catch(error => res.status(422).send({ error }));
}