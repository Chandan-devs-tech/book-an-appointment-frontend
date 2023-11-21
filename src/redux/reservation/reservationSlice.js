import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const createReservations = createAsyncThunk('create/createReservations', async (reservation) => {
  const token = JSON.parse(localStorage.getItem('token'));
  const response = await fetch('http://localhost:3001/reservations', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
    },
    body: JSON.stringify(reservation),
  });
  const data = await response.json();
  return data;
});

const initialState = {
  userReservations: [],
  isLoading: false,
  error: null,
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
        (reservation) => reservation.id !== action.payload,
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createReservations.fulfilled, (state, action) => {
      state.userReservations.push(action.payload);
    });
    builder.addCase(createReservations.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createReservations.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const { addReservation, deleteReservation } = reservationSlice.actions;
export default reservationSlice.reducer;
