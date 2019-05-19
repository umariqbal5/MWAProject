const User =  require("../../models/users/User");

const express = require('express');
const router = express.Router();
//JWT Token Libs
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');

router.post('/login',(req,res)=>{
    //getting from DB
    User.findOne({ username: req.body.username }, (err,user)=>{
        if (err) throw err;

        if (user && user.password == req.body.password){
                var token = jwt.sign({userID: user._id}, 'specialsecret', {expiresIn: '12h'});
                res.json({
                    success: 1,
                    msg: 'login success',
                    token: token,
                    user: {
                        username: user.username,
                        name: user.first_name +" "+ user.last_name,
                        email: user.email,
                        phone_number: user.phone_number,
                        address: user.address
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
