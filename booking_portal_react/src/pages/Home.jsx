import React, { useEffect, useState } from 'react';
import { fetchSlots } from '../services/api';
import SlotList from '../components/SlotList';
import BookingForm from '../components/BookingForm';
import BookingSuccess from '../components/BookingSuccess';

const Home = () => {
  const [slots, setSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    fetchSlots().then((res) => setSlots(res.data));
  }, []);

  if (success) return <BookingSuccess />;
  if (selectedSlot) {
    return <BookingForm selectedSlot={selectedSlot} onSuccess={() => setSuccess(true)} />;
  }

  return <SlotList slots={slots} onSelect={setSelectedSlot} />;
};

export default Home;
