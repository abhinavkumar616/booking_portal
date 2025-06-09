const express = require('express');
const router = express.Router();
const { getAllBookings } = require("../controllers/bookingController");

router.get('/bookings', getAllBookings);

module.exports = router;
