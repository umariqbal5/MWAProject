const mongoose = require('mongoose');
const chalk = require('chalk');
const morgan = require('morgan');
const db_url = require('./db_url');

const connected = chalk.bold.cyan;
const error = chalk.bold.yellow;
const disconnected = chalk.bold.red;
const termination = chalk.bold.magenta;

//const accessLogStream = fs.createWriteStream(__dirname + '/access.log', { flags: 'a' });

modelu.exports = function() {

    mongoose.connect(db_url.url);

    mongoose.connection.on('connected', () => {
        console.log( connected("Mongoose default connection is open to db"));
    });

    mongoose.connection.on('error', (err) => {
        console.log( error("Mongoose default connection has occured " + err + " error."));
    });

    mongoose.connection.on('disconnected', () => {
        console.log( disconnected("Mongoose default connection is disconnected"));
    });

    process.on('SIGINT', () => {
       mongoose.connection.close( () => {
           console.log( termination("Mongoose default connection is " +
               "disconnected due to application termination"));
       });
    });
}
