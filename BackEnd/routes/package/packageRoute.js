const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

const package = require('../../models/packages/packageSchema');
const router = express.Router();


router.get('/', ( req, res ) => {
    console.log('indise get package by nothing');
    package.find((err, pkg)=>{
        if(err){
            console.log(err);
            res.status(500).json('{success: 0, ' +
                'message: "Error happened while fetching packages."}');
            return;
        }
        res.json(pkg);
        return;
    })

});


router.get('/name/:name', ( req, res ) => {
    console.log('indise get package by name');
    package.find({ 'package.name': req.params.name.toLowerCase() }, (err, pkg) => {
        if(err){
            console.log(err);
            res.status(500).json('{success: 0, ' +
                'message: "Error happened while fetching packages by name."}')
            return;
        }
        res.json(pkg);
        return;
    });

})


router.get('/type/:type', ( req, res ) => {
    console.log('indise get package by type');
    package.find({ 'package.package_type': req.params.type.toLowerCase() }, (err, pkg) => {
        if(err){
            console.log(err);
            res.status(500).json('{success: 0, ' +
                'message: "Error happened while fetching packages by name."}')
            return;
        }
        res.json(pkg);
        return;
    });

})


router.get('/id/:id', ( req, res ) => {
    console.log('indise get package by id');
    package.find({ '_id': req.params.id }, (err, pkg) => {
        if(err){
            console.log(err);
            res.status(500).json('{success: 0, ' +
                'message: "Error happened while fetching packages by name."}')
            return;
        }
        res.json(pkg);
        return;
    });

})


router.get('/destination/:destination', ( req, res ) => {
    console.log('indise get package by destination');
    package.find({ 'destination': req.params.destination.toLowerCase() }, (err, pkg) => {
        if(err){
            console.log(err);
            res.status(500).json('{success: 0, ' +
                'message: "Error happened while fetching packages by name."}')
            return;
        }
        res.json(pkg);
        return;
    });

})


router.post('/add', ( req, res ) => {
    console.log('indise post package ');
    let pk = new package(req.body);
    pk.save()
        .then( p => {
            res.json('{success: 1, message: package added successfully.}')
        })
        .catch( err => {
            res.status(500).json({'success': '0',
                'message': 'Error occurred while inserting package.'});
        })
})


router.put('/update/name/:name', ( req, res ) => {
    console.log('indise put package by name');
    package.findOne({ 'package.name': req.params.name.toLowerCase() }, (err, pkg) => {
        if(err){
            res.status(500).json({'success': '0',
                'message': 'Error occurred while trying to update by id.'});
            return;
        }
        else if(!pkg){
            res.status(204).json({'success': '0', 'message': 'Document couldn\'t be found'});
        }
        else{
            pkg.package.name = req.body.package.name;
            pkg.package.description = req.body.package.description;
            pkg.package.package_type = req.body.package.package_type;
            pkg.package.image_url = req.body.package.image_url;
            pkg.destination = req.body.destination;
            pkg.hotel = req.body.hotel;
            pkg.price = req.body.price;

            pkg.save().then(p => {
                res.json({'success': '1', 'message': 'Update done.'});
            }).catch(err => {
                res.status(400).send({'success': '0', 'message': 'Update failed.'});
            });
        }
    })
})


router.put('/update/id/:id', ( req, res ) => {
console.log('indise updated package by id');
    package.findById(req.params.id, (err, pkg) => {
        if (err) {
            res.status(500).json({
                'success': '0',
                'message': 'Error occurred while trying to update by id.'
            });
            return;
        } else if (!pkg) {
            res.status(204).json({'success': '0', 'message': 'Document couldn\'t be found'});
        } else {
            pkg.package.name = req.body.package.name;
            pkg.package.description = req.body.package.description;
            pkg.package.package_type = req.body.package.package_type;
            pkg.package.image_url = req.body.package.image_url;
            pkg.destination = req.body.destination;
            console.log("hotellll iss ", req.body.hotel);
            pkg.hotel = req.body.hotel;
            pkg.price = req.body.price;

            pkg.save().then(p => {
                res.json({'success': '1', 'message': 'Update done.'});
            }).catch(err => {
                res.status(400).send({'success': '0', 'message': 'Update failed.'});
            });
        }
    })
})


router.delete('/delete/id/:id', ( req, res ) => {
console.log('inside delete');
    package.deleteOne({_id: req.params.id}, (err)=>{
        if(err){
            res.status(500).json({
                'success': '0',
                'message': 'Error occurred while trying to remove by id.'
            });
            return;
        }
        res.json({
            'success': '1',
            'message': 'Removed successfully'
        });
    });
})


router.delete('/delete/name/:name', ( req, res ) => {
    console.log('inside delete');
    package.deleteOne({'package.name': req.params.name}, (err)=>{
        if(err){
            res.status(500).json({
                'success': '0',
                'message': 'Error occurred while trying to remove by id.'
            });
            return;
        }
        res.json({
            'success': '1',
            'message': 'Removed successfully'
        });
    });
})
module.exports = router;
