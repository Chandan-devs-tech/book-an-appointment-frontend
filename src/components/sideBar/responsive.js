/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Logo from '../../assets/logo-white.jpg';
import AddCar from '../car/AddCar';
import { logout } from '../../redux/apiCalls';

const ResponsiveNav = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const dispatch = useDispatch();
  const logouts = () => {
    logout(dispatch, false);
  };

  return (
    <div className="mobile-menu">
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <a className="navbar-brand" href="/"><img src={Logo} alt="Drive Easy Logo" className="bi-logo-white" /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Add Reservation</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">My Reservations</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={openModal}> Add Car</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/"> Delete Car</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/" onClick={logouts}> Log out</a>
            </li>
          </ul>
        </div>
      </nav>
      <AddCar isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default ResponsiveNav;
