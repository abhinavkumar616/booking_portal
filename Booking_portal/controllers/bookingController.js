const Booking = require('../models/Booking');
const generateSlots = require('../utils/slotGenerator');

exports.getSlots = async (req, res) => {
  const allSlots = generateSlots();
  const booked = await Booking.find();
  
  const available = allSlots.filter(slot => {
    return !booked.some(b => b.date === slot.date && b.time === slot.time);
  });

  res.json(available);
};

exports.createBooking = async (req, res) => {
  const { name, email, date, time } = req.body;

  const alreadyBooked = await Booking.findOne({ date, time });
  if (alreadyBooked) {
    return res.status(409).json({ message: 'Slot already booked' });
  }

  const booking = new Booking({ name, email, date, time });
  await booking.save();
  res.status(201).json({ message: 'Booking successful' });
};


exports.getAllBookings = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const skip = (page - 1) * limit;

    const bookings = await Booking.find()
      .sort({ created_at: -1 })
      .skip(skip)
      .limit(limit);

    const total = await Booking.countDocuments();

    res.json({
      data: bookings,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit)
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

