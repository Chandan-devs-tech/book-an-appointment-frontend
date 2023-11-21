import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { createReservation } from '../../redux/reservations/ReservationsSlice';

function ReservationForm({ onSubmit, car }) {
  const currentUser = useSelector((state) => state.user.currentUser);
  const cars = useSelector((state) => state.car.cars);

  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    user_id: currentUser.id,
    car_id: parseInt(car.id || '', 10),
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
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Reserve this car</h2>
      <input type="text" name="user_id" value={currentUser.name} readOnly />
      { car ? <input type="text" name="car_id" value={car.name} readOnly />
        : (
          <select name="car_id" value={formData.car} onChange={handleInputChange}>
            <option disabled value="Select a car">Select a Car</option>
            {cars?.map((car) => (
              <option key={car.id} value={car.id}>{car.name}</option>
            ))}
          </select>
        )}
      <select name="city" value={formData.city} onChange={handleInputChange}>
        <option value="">Select City</option>
        <option value="San Francisco">San Francisco</option>
        <option value="Los Angeles">Los Angeles</option>
        <option value="New York">New York</option>
        <option value="Chicago">Chicago</option>
      </select>
      <input type="date" name="date" value={formData.date} onChange={handleInputChange} placeholder="Date" />
      <button type="submit">Add Reservation</button>
    </form>
  );
}

ReservationForm.propTypes = {
  onSubmit: PropTypes.func,
  car: PropTypes.string,
};

ReservationForm.defaultProps = {
  onSubmit: () => {},
  car: '',
};

export default ReservationForm;
