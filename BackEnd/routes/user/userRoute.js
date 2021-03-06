//=====================Routing =============================
const express = require('express');
const User = require('../../models/users/User');

const router = express.Router();

router.route('/api/').get((req,res)=>{
    User.find((err,users)=>{
        if(err)
            console.log(err);
        else
            res.json(users);
    });
});

router.route('/api/:id').get((req,res)=>{
    User.findById(req.params.id, (err,user)=>{
        if(err)
            console.log(err);
        else
            res.json(user);
    });
    

});

router.route('/api/add').post((req,res)=>{
    let user = new User(req.body);
    user.save()
        .then(user=>{
            res.status(200).json({success: 1,'user':'Added successfully'});
        })
        .catch(err=>{
            res.status(400).send({success: 0,msg: 'Failed to create new record'});
        })
});

router.route('/api/update/:id').post((req,res)=>{
    User.findById(req.params.id, (err,user)=>{
        if(!user)
            return next(new Error('Could not load document'));
        else
            user.first_name = req.body.first_name;
            user.last_name = req.body.last_name;
            user.email = req.body.email;
            user.username = req.body.username;
            user.password = req.body.password;
            user.address.state = req.body.address.state;
            user.address.city = req.body.address.city;
            user.address.zipcde = req.body.address.zipcde;
            user.role = req.body.role;
            

            user.save().then(user=>{
                res.status(200).json({success: 1,msg: 'Update done'});
            }).catch(err=>{
                res.status(400).send({success: 0, msg: 'Update field'});
            });
    });
});

router.route('/api/delete/:id').delete((req,res)=>{
    User.findByIdAndRemove({_id: req.params.id}, (err, user)=>{
       if(err)
          res.json(err);  
       else
            res.json({success: 1,msg: 'Removed successfully'});
    });
});

module.exports=router;
