import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userReservations: [],
};

const reservationSlice = createSlice({
  name: 'reservation',
  initialState,
  reducers: {
    addReservation(state, action) {
      state.userReservations.push(action.payload);
    },
    deleteReservation(state, action) {
      state.userReservations = state.userReservations.filter(
        (reservation) => reservation.id !== action.payload
      );
    },
  },
});

export const { addReservation, deleteReservation } = reservationSlice.actions;
export default reservationSlice.reducer;
