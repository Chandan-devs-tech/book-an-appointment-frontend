/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Logo from '../../assets/logo-white.jpg';
import AddCar from '../car/AddCar';
import { logout } from '../../redux/apiCalls';

const ResponsiveNav = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
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

  const getElement = document.getElementById('add');
  const getNav = document.getElementById('navbarNav');
  const closeMenu = () => {
    if (getElement) {
      getNav.classList.remove('show');
    }
  };

  const handleClick = () => {
    closeMenu();
    openModal();
  };

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };
  const closeSidebar = () => {
    setSidebarVisible(false);
  };

  const handleLogoutAndCloseSidebar = () => {
    logouts();
    closeSidebar();
  };

  const handleClickAndCloseSidebar = () => {
    handleClick();
    closeSidebar();
  };

  return (
    <div className={`mobile-menu ${sidebarVisible ? 'visible' : ''}`}>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <a className="navbar-brand" href="/"><img src={Logo} alt="Drive Easy Logo" className="bi-logo-white" /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onClick={toggleSidebar}>
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
              <a className="nav-link" href="/add-reservation" onClick={closeSidebar}>Add Reservation</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/reservations" onClick={closeSidebar}>My Reservations</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" id="add" onClick={handleClickAndCloseSidebar}> Add Car</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/delete" onClick={closeSidebar}> Delete Car</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/" onClick={handleLogoutAndCloseSidebar}> Log out</a>
            </li>
          </ul>
        </div>
      </nav>
      <AddCar isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default ResponsiveNav;
