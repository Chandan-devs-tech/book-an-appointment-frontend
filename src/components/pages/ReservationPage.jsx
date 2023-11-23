/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getReservations, deleteReservation } from '../../redux/reservation/reservationSlice';
import './reservationPage.css';
import SidebarComponents from '../sideBar/sideBarComponent';

const ReservationPage = () => {
  const userReservations = useSelector((state) => state.reservation.userReservations);
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const handleDeleteReservation = (reservationId) => {
    dispatch(deleteReservation(reservationId));
  };

  useEffect(() => {
    dispatch(getReservations());
  }, [dispatch]);

  return (
    <>
      <SidebarComponents />
      <div className="my-component-page">
        <h1 className="title">My Reservations</h1>
        {userReservations.length > 0 ? (
          <ul className="reserve-list">
            {userReservations.map((reservation) => (
              <li className="reserv-list" key={reservation.id}>
                <p className="rer">{reservation.car?.name}</p>
                <img className="reservation-image" src={reservation.car?.img} alt="car" />
                <p className="rer">{reservation.date}</p>
                <p className="rer">{reservation.city}</p>
                <button className="rer-btn" type="button" onClick={() => handleDeleteReservation(reservation.id)}>
                  Delete
                </button>
              </li>

            ))}
          </ul>
        ) : (
          <p className="reservation-title">Book car 🚗 reservation, please!</p>
        )}
      </div>
    </>
  );
};

export default ReservationPage;
