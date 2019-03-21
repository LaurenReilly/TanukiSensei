// Loading and initializing the library:
const pgp = require('pg-promise')({});

// Preparing the connection details:
const cn = 'postgres://ykhfnoncszigiu:68d7b6b559c36ea0dc7c5596c6bcdc461d9678e02c1924c6230939b0e01875c6@ec2-174-129-10-235.compute-1.amazonaws.com:5432/d9kjo64um7aj0p';


// Creating a new database instance from the connection details:
const db = pgp(cn);

// Exporting the database object for shared use:
module.exports = db;



// //if heroku isn't running it use the environment variables   
// if(process.env.NODE_ENV !== 'production') require('dotenv').config();

// // Loading and initializing the library:
// const pgp = require('pg-promise')({});

// const cn = {
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     database: process.env.DATABASE,
//     user: process.env.USERNAME,
//     password: process.env.PASSWORD
// };

// // connecting to the database
// const db = pgp(cn);

// module.exports = db;


