let passport = require('passport');
let LocalStrategy = require('passport-local').Strategy;

var bcrypt = require('bcryptjs');
var db = require('./database');


// Strategies require what is known as a verify callback. The purpose of a verify callback is to find the user that possesses a set of credentials.
// When Passport authenticates a request, it parses the credentials contained in the request. It then invokes the verify callback with those credentials as arguments, in this case username and password. If the credentials are valid, the verify callback invokes done to supply Passport with the user that authenticated.

passport.use(new LocalStrategy(function (username, password, done) {
    db.one('SELECT * FROM users WHERE username = $1', [username])
        .then(function (user) {
            if (!user) {
                return done(null, false, { message: 'Incorrect username' });
            }
            const passwordMatch = bcrypt.compareSync(password, user.password_hash)
            if (!passwordMatch) {
                return done(null, false, { message: 'Incorrect password' });
            }
            return done(null, user);
        }).catch(function (err) {
            return done(err);
        })
    }
));


// the credentials used to authenticate a user will only be transmitted during the login request. If authentication succeeds, a session will be established and maintained via a cookie set in the user's browser.

// Each subsequent request will not contain credentials, but rather the unique cookie that identifies the session. In order to support login sessions, Passport will serialize and deserialize user instances to and from the session.

passport.serializeUser(function (user, done) {
    done(null, user.username);
});

passport.deserializeUser(function (username, done) {
    db.one('SELECT * FROM users WHERE username = $1', [username])
        .then(user => done(null, user))
});

module.exports = passport;