var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
var session = require('express-session');
var path = require('path');


//will normalize the port into a useable number
function normalizePort(val) {
    const port = parseInt(val, 10);
    if (Number.isNaN(port)) {
      // named pipe
      return val;
    }
    if (port >= 0) {
      // port number
      return port;
    }
    return false;
  }

 //so we can use heroku's port OR the one we hardcoded
var port = normalizePort(process.env.PORT || '3001');

//login functionality
var passport = require('./passport.js');

//to API routes
var authenticate = require('./routes/authenticate.js');
var update = require ('./routes/update.js')

//ability to use data that is passed to app and store into session
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({ secret: 'triplecatscenario' }));

//login and storing info in session
app.use(passport.initialize());
app.use(passport.session());

//setting up for deploying, api will serve client folder
app.use(express.static(path.join(__dirname, 'client/build')));

//if the app is pointing to /authenticate use authenticate.js in routes which will control everything after authenticate/...
app.use('/authenticate', authenticate);
app.use ('/update', update);

//allows react router to handle routes, anything other that what is listed above will go through react-router
app.get('/*', function(req,res) {
  res.sendFile(path.join)(__dirname, 'client/build', 'index.html')
})

app.listen(port, () => {
    console.log(`Starting app on ${port}`);
  });

module.exports = app;