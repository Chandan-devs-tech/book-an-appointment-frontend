/* eslint-disable */

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addVehicle } from '../../redux/apiCalls';

const AddVehicles = () => {
  const [name, setname] = useState('');
  const [model, setmodel] = useState('');
  const [image, setimage] = useState('');
  const [description, setdescription] = useState('');
  const [finance_fee, setfinance_fee] = useState('');
  const [down_payment, setdown_payment] = useState('');
  const [total_amount, settotal_amount] = useState('');
  const [duration, setduration] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addNewVehicle = (e) => {
    e.preventDefault();

    addVehicle(dispatch, {
      name, model, image, description, finance_fee, down_payment, total_amount, duration,
    });
    navigate('/');
  };

  return (
    <div className="LoginDiv">
      <form className="LoginForm">
        <input onChange={(e) => setname(e.target.value)} type="text" placeholder="vehicle name" />
        <input onChange={(e) => setmodel(e.target.value)} type="text" placeholder="vehicle model" />
        <input onChange={(e) => setimage(e.target.value)} type="text" placeholder="vehicle image" />
        <input onChange={(e) => setdescription(e.target.value)} type="text" placeholder="vehicle description" />
        <input onChange={(e) => setfinance_fee(e.target.value)} type="number" placeholder="finance_fee" />
        <input onChange={(e) => setdown_payment(e.target.value)} type="number" placeholder="down_payment" />
        <input onChange={(e) => settotal_amount(e.target.value)} type="number" placeholder="total_amount" />
        <input onChange={(e) => setduration(e.target.value)} type="text" placeholder="duration" />

        <textarea maxLength={30} rows="5" onChange={(e) => setdescription(e.target.value)} type="text" placeholder="description" />
        <button type="submit" onClick={addNewVehicle}>Add</button>
      </form>
    </div>
  );
};

export default AddVehicles;