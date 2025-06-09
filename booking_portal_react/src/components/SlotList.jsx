import React from 'react';
import './SlotList.css';
import { Link } from 'react-router-dom';

const SlotList = ({ slots, onSelect }) => {
  // Group by date
  const grouped = slots.reduce((acc, slot) => {
    if (!acc[slot.date]) acc[slot.date] = [];
    acc[slot.date].push(slot.time);
    return acc;
  }, {});

  return (
    <>
      <div className="nav-links">
        <Link to="/">Home</Link> | <Link to="/admin">Admin</Link>
      </div>

      <div className="slot-container">
        <h2 className="slot-title">Available Slots</h2>

        {Object.keys(grouped).map(date => (
          <div key={date} className="date-block">
            <h3 className="slot-date">{date}</h3>
            <div className="time-slot-group">
              {grouped[date].map((time, index) => (
                <button
                  key={index}
                  className="slot-button"
                  onClick={() => onSelect({ date, time })}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SlotList;


