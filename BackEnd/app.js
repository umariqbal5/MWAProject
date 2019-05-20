const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const expressJwt = require('express-jwt');

/**
 * routes
 */
const packageRout = require('./routes/package/packageRoute');
const userRoute = require('./routes/user/userRoute');
const bookingRoute = require('./routes/booking/bookingRoute');
const db_url = require('./models/db_url');
const authRoute = require('./routes/auth/authRoutes');

/**
 * create a write stream (in append mode)
 */
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'SERVER_LOG.log'), { flags: 'a'});

const app = express();
const port = 4000;

/**
 * middleware
 */
app.use(morgan('combined', { stream: accessLogStream}));
app.use(bodyParser.json());
app.use(cors());
// app.use(expressJwt({secret: db_url.secrete}).unless({path: ['/auth/login','/auth/register']}));

//========================connection=================


mongoose.connect(db_url.url);

const connection = mongoose.connection;
connection.once('open',()=>{
    console.log('MongoDB ddatabase connetion established successfully!');
});
//================================================

app.use('/auth', authRoute);
app.use('/users', userRoute);
app.use('/package', packageRout);
app.use('', bookingRoute);

app.listen(port, ()=>console.log("listening to :  http://localhost:" + port));
