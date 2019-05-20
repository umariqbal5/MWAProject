//=====================Routing =============================
const express = require('express');
const User = require('../../models/users/User');

const router = express.Router();

router.route('/').get((req,res)=>{

    User.find((err,users)=>{
        if(err)
            console.log(err);
        else
            res.json(users);
    });
});

router.route('/:id').get((req,res)=>{
    User.findById(req.params.id, (err,user)=>{
        if(err)
            console.log(err);
        else
            res.json(user);
    });
    

});

router.route('/add').post((req,res)=>{
    console.log(req.user)
    let user = new User(req.body);
    // user.save()
    //     .then(user=>{
    //         res.status(200).json({'user':'Added successfully'});
    //     })
    //     .catch(err=>{
    //         res.status(400).send('Failed to create new record');
    //     })
    res.json({'user':'Added successfully' })
});

router.route('/update/:id').post((req,res)=>{
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
            

            user.save().then(user=>{
                res.json('Update done');
            }).catch(err=>{
                res.status(400).send('Update field');
            });
    });
});

router.route('/delete/:id').delete((req,res)=>{
    User.findByIdAndRemove({_id: req.params.id}, (err, user)=>{
       if(err)
          res.json(err);  
       else
            res.json('Removed successfully');
    });
});

module.exports=router;
