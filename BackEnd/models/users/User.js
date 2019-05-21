const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = new Schema({
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    email: {
        type: String
    },
    phone_number: {
        type: String
    },
    username: {
        type: String,
        required: true,
        index: { unique: true }
    },
    password: {
        type: String,
        required: true
    },
    address: {
        state: {type: String},
        city: {type: String},
        zipcode: {type: String}
    },
    role: {
        type: String,
        default: 'Client'
    }
});

module.exports = mongoose.model('User', User);
