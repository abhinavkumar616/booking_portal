import React, { useState } from 'react';
import './BookingForm.css';
import { bookSlot } from '../services/api';
import { Link } from 'react-router-dom';

const BookingForm = ({ selectedSlot, onSuccess }) => {
  const [form, setForm] = useState({ name: '', email: '' });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await bookSlot({ ...form, ...selectedSlot });
      onSuccess();
    } catch (err) {
      setError(err.response?.data?.message || 'Booking failed');
    }
  };

  return (
    <>
      <div className="nav-links">
        <Link to="/">Home</Link> | <Link to="/admin">Admin</Link>
      </div>

      <div className="form-container">
        <h2 className="form-title">
          Book Slot: {selectedSlot.date} at {selectedSlot.time}
        </h2>
        <form className="booking-form" onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Enter your name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            name="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <button type="submit">Book</button>
        </form>
        {error && <p className="error-message">{error}</p>}
      </div>
    </>
  );
};

export default BookingForm;
