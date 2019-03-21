var express = require('express');
var router = express.Router();
var db = require('../db');
var bcrypt = require('bcryptjs');
var passport = require('../passport.js');

// log in existing user
router.post('/login', passport.authenticate('local'), function (req, res, next) {
    res.json({ username: req.user.username });
});


//log out out of session
router.post('/logout', function (req, res, next) {
    req.logout();
    res.json({ status: 'OK' });
    // res.redirect('/');
});

// check session to see if user is logged in
router.get('/status', function (req, res, next) {
    if (req.user) {
        res.send({ username: req.user.username, isLoggedIn: true})
    } else {
        res.send({ username: null, isLoggedIn: false })
    }
});

//register a new user
router.post('/register', function (req, res, next) {
    let username = req.body.username;
    let password = req.body.password;
    if (!username || !password) {
        res.status(400).send({
            error: "You must enter a username and a password"
        })
    }
    db.any('SELECT * FROM users WHERE username = $1', [username])
        .then(function (data) {
            //checking to see if a user exists in the database
            if  ( data.length == 1) {
                res.status(400).send({error: "Username already exists"});
            } else {
                let hashedPassword = bcrypt.hashSync(password, 10);
                return db.one('INSERT INTO users(username, password) VALUES($1, $2) RETURNING id', [username, hashedPassword])   
            }    
        })
        .then(() => {
            console.log("User has been created");
            res.send('success')
        })
        .catch(function (error) {
            console.log('ERROR:', error);
            res.status(400).send(error)
        });
});

module.exports = router;