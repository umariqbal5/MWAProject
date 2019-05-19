const mongoose = require('mongoose');
const shortid = require('shortid');
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
    },
    bookingInfo: [{
        bookingRef:{
            type: String,
            default: shortid.generate
        } ,
        package: {
            type: Schema.Types.ObjectId,
            ref: 'pkg'
        },
        travelers: [{
            name: String,
            phone: String
        }],
        no_adult: Number,
        no_child: Number,
        bookingStatus: {
            type: String,
            enum: ['NEW', 'COMPLETED', 'CANCELLED', 'DELETED'],
            default: 'NEW'
        },
        startDate: Date,
        endDate: Date,
        totalPrice: Schema.Types.Decimal128
    }]

});

module.exports = mongoose.model('User', User);
