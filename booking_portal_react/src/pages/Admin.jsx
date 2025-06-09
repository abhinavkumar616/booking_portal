import React, { useEffect, useState } from 'react';
import { fetchAllBookings } from '../services/api';
import './Admin.css';
import { Link } from 'react-router-dom';

const Admin = () => {
  const [bookings, setBookings] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const loadBookings = async (currentPage) => {
    try {
      const res = await fetchAllBookings(currentPage);

    setBookings(res.data.data);       
    setTotalPages(res.data.totalPages);

    } catch (err) {
      console.error('Failed to fetch bookings:', err);
    }
  };

  useEffect(() => {
    loadBookings(page);
  }, [page]);

  return (
    <>
      <div className="nav-links">
        <Link to="/">Home</Link> | <Link to="/admin">Admin</Link>
      </div>

      <div className="admin-container">
        <h2 className="admin-title">All Bookings</h2>
        <table className="booking-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((b, i) => (
              <tr key={i}>
                <td>{b.name}</td>
                <td>{b.email}</td>
                <td>{b.date}</td>
                <td>{b.time}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="pagination">
          <button
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
            className="pagination-btn"
          >
            ⬅ Previous
          </button>

          <span className="pagination-info">
            Page {page} of {totalPages}
          </span>

          <button
            onClick={() => setPage(page + 1)}
            disabled={page === totalPages}
            className="pagination-btn"
          >
            Next ➡
          </button>
        </div>
      </div>
    </>
  );
};

export default Admin;
