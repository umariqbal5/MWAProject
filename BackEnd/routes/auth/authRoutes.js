const User =  require("../../models/users/User");

const express = require('express');
const router = express.Router();
const db_url = require('../../models/db_url');
//JWT Token Libs
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');

router.post('/login',(req,res)=>{
    //getting from DB
    User.findOne({ username: req.body.username }, (err,user)=>{
        if (err) throw err;

        if (user && user.password == req.body.password){
                var token = jwt.sign(
                    {
                        userID: user._id
                    }
                    , db_url.secrete, {expiresIn: '1200h'});
                res.json({
                    success: 1,
                    msg: 'login success',
                    token: token,
                    user: {
                        "username": user.username,
                        "name": user.first_name +" "+ user.last_name,
                        "email": user.email,
                    }
                });
            } else{
                res.status(401).json({
                    success : 0,
                    msg: 'login fail! wrong username or password'
                });
            }

    });

});

router.post('/register', (req, res) => {
    let user = new User(req.body);
    user.save()
        .then(user=>{
            res.status(200).json({'user':'Added successfully'});
        })
        .catch(err=>{
            res.status(400).send('Failed to create new login'+ err.message);
        })
})
module.exports=router;
