var express = require('express');
var router = express.Router();
var db = require('../database');


//when user is logged in get their data from the database so it can be stored in state
router.get('/progress/:username', function (req,res,next) {
    let username = req.params.username;
    if (!username) {
        res.status(400).send({
            error: "NO USERNAME PROVIDED"
        })
    } else { 
        db.one('SELECT * FROM users WHERE username = $1', [username])
            .then(function (data) {
                //successful
                console.log("got users information from DB");
                res.json(data);
            })
            .catch(function (error) {
                //send error
                res.status(400).send(error)
            });
    }
})

//update progress whenever user completes a lesson
router.post('/store', function (req, res, next) {
    let username = req.body.username;
    let firstLesson = req.body.firstLesson;
    let secondLesson = req.body.secondLesson;
    let thirdLesson = req.body.thirdLesson;
    db.none('UPDATE users SET firstlesson = $2, secondlesson = $3, thirdlesson = $4 WHERE username = $1', [username, firstLesson, secondLesson, thirdLesson])
        .then(data => {
            console.log("updated users information in DB");
            res.json(data)
        })
        .catch(error => {
            console.log('ERROR:', error);
            res.status(400).send(error)

    });
})

module.exports = router;