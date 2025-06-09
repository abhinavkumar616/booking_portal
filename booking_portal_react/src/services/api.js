import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

export const fetchSlots = () => API.get('/slots');
export const bookSlot = (data) => API.post('/book', data);
export const fetchAllBookings = (page = 1) =>
  API.get(`/admin/bookings?page=${page}`);
