import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getReservations, deleteReservation } from '../../redux/reservation/reservationSlice';

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
    <div>
      <h1>My Reservations</h1>
      {userReservations.length > 0 ? (
        <ul>
          {userReservations.map((reservation) => (
            currentUser.id === reservation.user_id ? (
              <li key={reservation.id}>
                <p>{reservation.car.name}</p>
                <img src={reservation.car.img} alt="car" />
                <p>{reservation.date}</p>
                <p>{reservation.city}</p>
                <button type="button" onClick={() => handleDeleteReservation(reservation.id)}>
                  Delete
                </button>
              </li>
            ) : (
              <p key={reservation.id}>No reservations yet</p>
            )
          ))}
        </ul>
      ) : (
        <p>Loading.....</p>
      )}
    </div>
  );
};

export default ReservationPage;
