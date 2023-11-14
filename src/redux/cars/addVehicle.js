import { createSlice } from '@reduxjs/toolkit';

const addVehicleSlice = createSlice({
  name: 'addVehicle',
  initialState: {
    isFetching: false,
    error: false,
  },
  reducers: {
    addStart: (state) => ({
      ...state,
      isFetching: true,
    }),
    addSuccess: (state) => ({
      ...state,
      isFetching: false,
    }),
    addFailure: (state) => ({
      ...state,
      isFetching: false,
      error: true,
    }),
  },
});

export const { addStart, addSuccess, addFailure } = addVehicleSlice.actions;
export default addVehicleSlice.reducer;
