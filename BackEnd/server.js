let userRoute = require('./routes/user/userRoute.js');
let authRoute = require('./routes/auth/authRoutes.js');
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import User from './models/users/User';
import db_url from './models/db_url';
const app = express();
const port = 4000;

//Middle Wares
app.use(cors());
app.use(bodyParser.json());





//========================connection=================


mongoose.connect(db_url.url);

const connection = mongoose.connection;
connection.once('open',()=>{
    console.log('MongoDB ddatabase connetion established successfully!');
});
//================================================

app.use('/auth', authRoute);
app.use('/users', userRoute);


app.listen(port, ()=>console.log("listening to : http://localhost:" + port));
