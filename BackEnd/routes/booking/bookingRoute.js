const express = require('express');
const User = require('../../models/users/User')
const package = require('../../models/packages/packageSchema');
const BookingInfo = require('../../models/booking/bookingSchema');
const router = express.Router();
const shortid = require('shortid');

// find all bookings for all users
router.get('/api/bookings', async (req, res) => {
    try {
        let result = await BookingInfo.find();
        res.status(200).json({success: 1, msg:'', data: result});
    } catch (e) {
        res.status(400).send(e);
    }
});

// find all bookings for a user
router.get('/api/bookings/:userID', async (req, res) => {
    try {
        console.log('headers', req.headers);
        console.log('userID',req.user);
        // console.log('userID ', req.params.userID);
        let result = await BookingInfo.find({'user': req.body.userID});
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
        let bookingInfo = new BookingInfo(req.body);
        console.log('headers',req.headers);

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
router.patch('/api/booking/:pnr', async (req, res) => {
    try {
        let pnr = req.params.pnr;
        let result = await updateBookingStatus(pnr, 'CANCELLED');
        res.status(200).json({success: 1, msg:'', data: result});
    } catch (e) {
        res.status(400).send(e);
    }
})

//delete a booking
router.delete('/api/booking/:pnr', async (req, res) => {
    try {
        let pnr = req.params.pnr;
        let result = await updateBookingStatus(pnr, 'DELETED');
        res.status(200).json({success: 1, msg:'', data: result});
    } catch (e) {
        res.status(400).send(e);
    }
})

module.exports = router;
