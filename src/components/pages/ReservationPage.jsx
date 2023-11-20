import React from 'react';
import { useSelector } from 'react-redux';

const ReservationPage = () => {
  const userReservations = useSelector((state) => state.reservations.userReservations);
  const handleDeleteReservation = (reservationId) => {
    console.log('Delete reservation with ID:', reservationId);
  };

  return (
    <div>
      <h1>My Reservations</h1>
      {userReservations.length > 0 ? (
        <ul>
          {userReservations.map((reservation) => (
            <li key={reservation.id}>
              <p>{reservation.itemName}</p>
              <p>{reservation.date}</p>
              <p>{reservation.city}</p>
              <button type="button" onClick={() => handleDeleteReservation(reservation.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reservations found.</p>
      )}
    </div>
  );
};

export default ReservationPage;
