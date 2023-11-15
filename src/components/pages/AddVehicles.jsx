/* eslint-disable */

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addVehicle } from '../../redux/apiCalls';

const AddVehicles = () => {
  const [name, setname] = useState('');
  const [model, setmodel] = useState('');
  const [img, setimg] = useState('');
  const [description, setdescription] = useState('');
  const [finance_fee, setfinance_fee] = useState('');
  const [total_amount, settotal_amount] = useState('');
  const [duration, setduration] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addNewVehicle = (e) => {
    e.preventDefault();

    // Ensure the field names match the Rails backend
    addVehicle(dispatch, {
      name,
      model,
      img,
      description,
      finance_fee,
      total_amount,
      duration,
    });
    navigate('/');
  };

  return (
    <div className="LoginDiv">
      <form className="LoginForm" onSubmit={addNewVehicle}>
        <input onChange={(e) => setname(e.target.value)} placeholder="vehicle name" />
        <input onChange={(e) => setmodel(e.target.value)} placeholder="vehicle model" />
        <input onChange={(e) => setimg(e.target.value)} placeholder="vehicle image" />
        <input onChange={(e) => setdescription(e.target.value)} placeholder="vehicle description" />
        <input onChange={(e) => setfinance_fee(e.target.value)} placeholder="finance_fee" />
        <input onChange={(e) => settotal_amount(e.target.value)} placeholder="total_amount" />
        <input onChange={(e) => setduration(e.target.value)} placeholder="duration" />

        <textarea maxLength={30} rows="5" onChange={(e) => setdescription(e.target.value)} type="text" placeholder="description" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddVehicles;
