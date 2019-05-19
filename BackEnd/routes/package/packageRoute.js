const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

const package = require('../../models/packages/packageSchema');
const router = express.Router();


router.get('/', ( req, resp ) => {

    package.find((err, pkg)=>{
        if(err){

        }
        resp.json(pkg);
        return;
    })

});


router.get('/:name', ( req, resp ) => {



});
module.exports = router;
