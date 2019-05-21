const mongoose = require("mongoose");

const express = require('express');
const User = require('../../models/users/User')
const package = require('../../models/packages/packageSchema');
const BookingInfo = require('../../models/booking/bookingSchema');
const router = express.Router();
const shortid = require('shortid');

// find all bookings for all users
router.get('/api/all-bookings', async (req, res) => {
    try {
        let result = await BookingInfo.find();
        res.status(200).json({success: 1, msg:'', data: result});
    } catch (e) {
        res.status(400).send(e);
    }
});

// find all bookings for a user
router.get('/api/user-bookings', async (req, res) => {
    try {
        console.log('headers', req.user.userID);
        let userId = mongoose.Types.ObjectId(req.user.userID);
        let result = await BookingInfo.find({'user._id': userId});
        res.status(200).json({success: 1, msg:'', data: result});
    } catch (e) {
        res.status(400).send(e);
    }
});

// find a booking details on pnr
router.get('/api/booking/:pnr', async (req, res) => {
    try {
        let pnr = req.params.pnr;
        let result = await BookingInfo.findOne({'bookingRef': pnr});
        res.status(200).json({success: 1, msg:'', data: result});
    } catch (e) {
        res.status(400).send(e);
    }
});

// insert a new booking
router.post('/api/booking', async (req, res) => {
    try {
        console.log('req.headers: ', req.headers);
        let userId = req.user.userID;
        let user = await User.findById(userId);
        let booking = req.body;
        booking.user = user;
        let bookingInfo = new BookingInfo(booking);

        let result = await bookingInfo.save();
        res.status(200).json({success: 1, msg:'', data: result});
    } catch (e) {
        console.log(e);
        res.status(400).send(e);
    }
});

async function updateBookingStatus(bookingRef, newStatus) {
    let result = await BookingInfo.update({'bookingRef': bookingRef}, {$set: {'bookingStatus': newStatus}});
    return result;
}

// update/cancel a booking
router.get('/api/booking/cancel/:pnr', async (req, res) => {
    try {
        let pnr = req.params.pnr;
        let result = await updateBookingStatus(pnr, 'CANCELLED');
        res.status(200).json({success: 1, msg:'', data: result});
    } catch (e) {
        res.status(400).send(e);
    }
})

//delete a booking
router.get('/api/booking/delete/:pnr', async (req, res) => {
    try {
        let pnr = req.params.pnr;
        let result = await updateBookingStatus(pnr, 'DELETED');
        res.status(200).json({success: 1, msg:'', data: result});
    } catch (e) {
        res.status(400).send(e);
    }
})

module.exports = router;
