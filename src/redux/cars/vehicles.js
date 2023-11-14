/* eslint_disable */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  vehicles: [],
  status: null,
};

export const getVehicles = createAsyncThunk('vehicles/vehicles', async () => {
  const response = await fetch('http://localhost:3000/api/v1/cars');
  const data = await response.json();
  return data;
});

const vehicleSlice = createSlice({
  name: 'vehicles',
  initialState,
  reducers: {},
  extraReducers(reduce) {
    reduce
      .addCase(getVehicles.fulfilled, (state, action) => {
        const isFulfilled = state;
        isFulfilled.status = 'Fulfilled';
        isFulfilled.vehicles = action.payload;
      });
  },
});

export default vehicleSlice.reducer;
