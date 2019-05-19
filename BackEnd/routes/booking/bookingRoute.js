const express = require('express');
const User = require('../../models/users/User')
const package = require('../../models/packages/packageSchema');
const router = express.Router();
const shortid = require('shortid');

const authEmail = 'henockasmelash@gmail.com';

//find all bookings
router.get('/booking', async (req, res) => {
    try {
        let result = await User.findOne({email: authEmail});
        res.send(result);
    } catch (e) {
        res.status(400).send(e);
    }
});

//find a booking base on pnr
router.get('/booking/:pnr', async (req, res) => {
    try {
        let pnr = req.params.pnr;
        let result = await User.findOne({'email': authEmail, 'bookingInfo.bookingRef': pnr});
        res.send(result);
    } catch (e) {
        res.status(400).send(e);
    }
});

//insert a new booking
router.post('/booking', async (req, res) => {
    try {
        let bookingData = req.body;
        let user = await User.findOne({email: authEmail});
        let bookingInfo = user.bookingInfo;
        bookingInfo.push(bookingData);
        let result = await User.update({'email': authEmail}, {$set: {'bookingInfo': bookingInfo}});
        res.send(result)
    } catch (e) {
        res.status(400).send(e);
    }
});

async function updateBookingStatus(bookingRef, newStatus) {
    let result = await User.update({
        email: authEmail,
        bookingInfo: {$elemMatch: {'bookingRef': bookingRef}}
    }, {$set: {'bookingInfo.$.bookingStatus': newStatus}});

    return result;
}

//update/cancel a booking
router.patch('/booking/:pnr', async (req, res) => {
    try {
        let pnr = req.params.pnr;
        let result = await updateBookingStatus(pnr, 'CANCELLED');
        res.send(result)
    } catch (e) {
        res.status(400).send(e);
    }
})

//delete a booking
router.delete('/booking/:pnr', async (req, res) => {
    try {
        let pnr = req.params.pnr;
        let result = await updateBookingStatus(pnr, 'DELETED');
        res.send(result)
    } catch (e) {
        res.status(400).send(e);
    }
})
module.exports = router;
