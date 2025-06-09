import React from 'react';
import './BookingSuccess.css';
import { Link } from 'react-router-dom';

const BookingSuccess = () => (
  <>
    <div className="nav-links">
      <Link to="/">Home</Link> | <Link to="/admin">Admin</Link>
    </div>

    <div className="success-container">
      <div className="success-icon">🎉</div>
      <h2 className="success-title">Booking Confirmed!</h2>
      <p className="success-message">Thank you for booking. See you soon!</p>
    </div>
  </>
);

export default BookingSuccess;
