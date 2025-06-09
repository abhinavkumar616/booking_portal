const generateSlots = () => {
  const slots = [];
  const today = new Date();
  const times = ['10:00 AM', '11:00 AM', '12:00 PM', '2:00 PM', '3:00 PM'];

  for (let i = 0; i < 7; i++) {
    const day = new Date(today);
    day.setDate(day.getDate() + i);
    const dateStr = day.toISOString().split('T')[0];

    times.forEach(time => {
      slots.push({ date: dateStr, time });
    });
  }

  return slots;
};

module.exports = generateSlots;
