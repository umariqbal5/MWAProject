const mongoose = require('mongoose');
const shortid = require('shortid');
const Schema = mongoose.Schema;

let bookingSchema = new Schema({
    bookingRef:{
        type: String,
        default: shortid.generate
    } ,
    package: {
        type: Schema.Types.Object,
        ref: 'pkg'
    },
    user: {
        type: Schema.Types.Object,
        ref: 'User'
    },
    travelers: [{
        name: String,
        phone: String
    }],
    no_adult: Number,
    no_child: Number,
    bookingStatus: {
        type: String,
        enum: ['CONFIRMED', 'COMPLETED', 'CANCELLED', 'DELETED'],
        default: 'CONFIRMED'
    },
    departureDate: Date,
    duration: Number,
    totalPrice: Schema.Types.Decimal128
});

module.exports = mongoose.model('BookingInfo', bookingSchema, 'bookingInfo');
