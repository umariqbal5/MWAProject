const express = require('express');
const User = require('../../models/users/User')
const package = require('../../models/packages/packageSchema');
const BookingInfo = require('../../models/booking/bookingSchema');
const router = express.Router();
const shortid = require('shortid');

// find all bookings
router.get('/api/booking', async (req, res) => {
    try {
        let result = await BookingInfo.findOne({_id: req.body.userID});
        res.send(result);
    } catch (e) {
        res.status(400).send(e);
    }
});

// find a booking base on pnr
router.get('/api/booking/:pnr', async (req, res) => {
    try {
        let pnr = req.params.pnr;
        let result = await BookingInfo.findOne({'_id': req.body.userID, 'bookingRef': pnr});
        res.send(result);
    } catch (e) {
        res.status(400).send(e);
    }
});

// insert a new booking
router.post('/api/booking', async (req, res) => {
    try {
        let bookingData = req.body;
        bookingData.push(localStorage.getItem('user'));
        let booking = await BookingInfo.save();
        res.send(booking)
    } catch (e) {
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
        res.send(result)
    } catch (e) {
        res.status(400).send(e);
    }
})

//delete a booking
router.delete('/api/booking/:pnr', async (req, res) => {
    try {
        let pnr = req.params.pnr;
        let result = await updateBookingStatus(pnr, 'DELETED');
        res.send(result)
    } catch (e) {
        res.status(400).send(e);
    }
})

module.exports = router;
