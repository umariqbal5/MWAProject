const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let packageSchema = new Schema({
    package: {
        name: String ,
        package_type: String,
        description: String,
        image_url: String
    },
    destination: Array,
    hotel: String,
    price: Number

}, {collection: 'package'});

module.exports = mongoose.model('pkg', packageSchema);
