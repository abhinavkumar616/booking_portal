const express = require('express');
const router = express.Router();
const { getSlots, createBooking } = require("../controllers/bookingController");

router.get('/slots', getSlots);
router.post('/book', createBooking);

module.exports = router;
