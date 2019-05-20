const mongoose = require('mongoose');
const shortid = require('shortid');
const Schema = mongoose.Schema;

let bookingSchema = new Schema({
    bookingRef:{
        type: String,
        default: shortid.generate
    } ,
    package: {
        type: Schema.Types.ObjectId,
        ref: 'pkg'
    },
    customer: {
        type: Schema.Types.ObjectId,
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
        enum: ['NEW', 'COMPLETED', 'CANCELLED', 'DELETED'],
        default: 'NEW'
    },
    startDate: Date,
    endDate: Date,
    totalPrice: Schema.Types.Decimal128
});

module.exports = mongoose.model('BookingInfo', bookingSchema);
