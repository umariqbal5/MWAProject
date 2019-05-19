const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

/**
 * routes
 */
const packageRout = require('./routes/package/packageRoute');
const userRoute = require('./routes/user/userRoute');
const db_url = require('./models/db_url');

/**
 * create a write stream (in append mode)
 */
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'REQUEST_LOG.log'), { flags: 'a'});

const app = express();
const port = 4000;

/**
 * middleware
 */
app.use(morgan('combined', { stream: accessLogStream}));
app.use(bodyParser.json());



//========================connection=================


mongoose.connect(db_url.url);

const connection = mongoose.connection;
connection.once('open',()=>{
    console.log('MongoDB ddatabase connetion established successfully!');
});
//================================================


app.use('/users', userRoute);
app.use('/package', packageRout);

app.listen(port, ()=>console.log("listening to : " + port));
