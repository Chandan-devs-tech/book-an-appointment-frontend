import React, { useState } from 'react';
import { useSelector } from 'react-redux';

function ReservationForm({ onSubmit }) {
  const currentUser = useSelector((state) => state.user.currentUser);
  const [formData, setFormData] = useState({
    username: currentUser.username,
    car: item.name,
    city: '',
    date: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" value={formData.username} readOnly />
      <input type="text" name="car" value={formData.car} readOnly />
      <input type="text" name="city" value={formData.city} onChange={handleInputChange} placeholder="City" />
      <input type="date" name="date" value={formData.date} onChange={handleInputChange} placeholder="Date" />
      <button type="submit">Add Reservation</button>
    </form>
  );
}

export default ReservationForm;
