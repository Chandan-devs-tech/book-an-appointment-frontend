/* eslint-disable */
import React, { useState } from 'react';
import Modal from 'react-modal';

const AddCar = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    model: '',
    image: '',
    financeFee: '',
    totalAmount: '',
    duration: '',
  });

  const handleChange = (e) => {
    const { name, value} = e.target;
    setFormData({ ...formData, [name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <div className="container">
        <h2>Add New Car</h2>
        <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="model" className="form-label">Model</label>
          <input type="text" className="form-control" id="model" name="model" value={formData.model} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">Image URL</label>
          <input type="text" className="form-control" id="image" name="image" value={formData.image} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="financeFee" className="form-label">Finance Fee</label>
          <input type="text" className="form-control" id="financeFee" name="financeFee" value={formData.financeFee} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="totalAmount" className="form-label">Total Amount</label>
          <input type="text" className="form-control" id="totalAmount" name="totalAmount" value={formData.totalAmount} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="duration" className="form-label">Duration</label>
          <input type="text" className="form-control" id="duration" name="duration" value={formData.duration} onChange={handleChange} />
        </div>
          <button type="submit" className="btn btn-primary">Add Car</button>
        </form>
      </div>
    </Modal>
  );
};

export default AddCar;
