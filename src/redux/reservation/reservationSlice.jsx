/* eslint-disable max-len */
/* eslint-disable no-param-reassign */

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const createReservations = createAsyncThunk('create/createReservations', async (reservation) => {
  const response = await fetch('http://localhost:3000/api/v1/reservations', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(reservation),
  });
  const data = await response.json();
  return data;
});

export const getReservations = createAsyncThunk('get/getReservations', async () => {
  const response = await fetch('http://localhost:3000/api/v1/reservations');
  const data = await response.json();
  return data;
});

export const deleteReservation = createAsyncThunk('delete/deleteReservation', async (id, thunkAPI) => {
  const response = await fetch(`http://localhost:3000/api/v1/reservations/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });

  if (!response.ok) {
    // Handle the error, e.g., throw an error or return an object indicating the failure
    throw new Error(`Failed to delete reservation with ID ${id}`);
  }
  thunkAPI.dispatch(getReservations());
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
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createReservations.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createReservations.fulfilled, (state, action) => {
      state.userReservations.push(action.payload);
    });
    builder.addCase(createReservations.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(getReservations.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getReservations.fulfilled, (state, action) => {
      state.isLoading = false;
      state.userReservations = action.payload;
    });
    builder.addCase(getReservations.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(deleteReservation.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteReservation.fulfilled, (state, action) => {
      state.isLoading = false;
      state.userReservations = state.userReservations.filter((reservation) => reservation.id !== action.payload);
    });
    builder.addCase(deleteReservation.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

// export const { addReservation, deleteReservation } = reservationSlice.actions;
export default reservationSlice.reducer;
