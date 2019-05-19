
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

/**
 * routes
 */
const packageRout = require('./routes/package/packageRoute');
const userRoute = require('./routes/user/userRoute');
const db_url = require('./models/db_url');

const app = express();
const port = 4000;
app.use(cors());
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
