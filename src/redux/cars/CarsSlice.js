import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCars = createAsyncThunk('car/fetchCars', async () => {
  const response = await axios.get('http://localhost:3000/api/v1/cars');
  return response.data.map((item) => ({
    id: item.id,
    name: item.name,
    img: item.img,
    model: item.model,
    finance_fee: item.finance_fee,
    total_amount: item.total_amount,
    description: item.description,
    duration: item.duration,
  }));
});

const initialState = {
  isLoading: false,
  cars: [],
  error: null,
};
const carsSlice = createSlice({
  name: 'car',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCars.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCars.fulfilled, (state, action) => {
      state.isLoading = false;
      state.cars = action.payload;
    });
    builder.addCase(fetchCars.rejected, (state, action) => {
      state.isLoading = false;
      state.cars = [];
      state.error = action.error.message;
    });
  },
});

export default carsSlice.reducer;
