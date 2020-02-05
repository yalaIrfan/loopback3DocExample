'use strict';
const loopback = require('loopback');

module.exports = function (Reviewer) {
    const user_login = loopback.findModel('User').login;

    // user_login(this, )
    Reviewer.login = function (credentials, include, fn) {
        var defaultError = new Error();
        defaultError.statusCode = 404;
        defaultError.code = 'LOGIN_FAILED';
        Reviewer.find({ "where": { "email": credentials.email } }, (err, user) => {

            if (user.length) {
                user_login.call(this, credentials, include, function (err, token) {
                    if (err) fn(err)
                    else fn(null, token)
                });
            } else {
                defaultError.message = `User does'nt exist.`
                fn(defaultError)

                // fn(defaultError)
            }

        });
    };

};

