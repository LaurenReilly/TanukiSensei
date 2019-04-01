# Tanuki Sensei

A game based solution to learning Japanese! Create an account and Tanuki Sensei will track your progress as you learn. Check out the Practice pages to use flashcards while you memorize vocabulary and Japanese characters, then head over to the Play pages and play a game to test what you know in a low stress learning environment. Unlock new chapters after completing the previous chapters with a score of 100%. Revisit completed material to make sure you are still at the top of your game.

[Learn Japanese The Fun Way!](https://tanukisensei.herokuapp.com/)

## Front End Specs

The color scheme for this project was inspired by a picture of a blooming cherry tree in Japan. All art assets are my original creations.
This project was created with React.js and Redux. I used a combination of custom CSS and Bootstrap for the styling. Other packages included for functionality are:
- react-bootstrap
- react-router
- react-redux
- axios

## Back End Specs

### API

I built an API on the backend to easily record and retrieve a users information into and from the database on login and when a lesson has been completed. I used axios to communicate between the front end and the back end API.

### Server
I created the server using Node.js and express to serve the application.

### Login

- The login feature was built using the local strategy of passport.js. All passwords are encrypted using bcrypt.js. In order to keep track of a logged in user I also used express sessions. 

- When a user registers error messages will be shown if that username is already taken, and if the password and confirm password fields do not match. After a successful registration the user is also logged in and taken to the home page. 

- The login form in the header will shake if username/password are incorrect. On successful login the user will be taken to the homepage and the login form will change to a logout button.

### Database
 I created a postgres database using heroku and also deployed the site via heroku. I communicated with the database using the pg-promise library and postgreSQL commands.

 ## About The Developer

 I created this full-stack application for my final project at Digital Crafts coding bootcamp. I worked independently so that I could be sure I was confident in every stage of building a full-stack web application from idea to deployment. I am part Japanese and I enjoy gaming so I decided to merge those two aspects of myself to build something fun that could help people learn. Full stack web development is a field that excites and inspires me. I am beyond excited to continue working in this field while learning new skills and enhancing those that I already have. I would love to continue working on Tanuki Sensei in the future, adding new lessons and functionality that will help people learn beginner Japanese. 