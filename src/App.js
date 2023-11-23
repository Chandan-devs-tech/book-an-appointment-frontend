import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Vehicles from './components/pages/Vehicles';
import CarDetails from './components/pages/CarDetails';
import ReservationPage from './components/pages/ReservationPage';
import ReservationForm from './components/pages/ReservationForm';
import DeleteCar from './components/car/DeleteCar';

const App = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <>
      <Routes>
        <Route
          path="/vehicles"
          element={currentUser ? <Vehicles /> : <Navigate to="/login" />}
        />
        <Route path="/details/:id" element={<CarDetails />} />
        <Route path="/reservations" element={<ReservationPage />} />
        <Route path="/add-reservation" element={<ReservationForm />} />
        <Route path="/delete" element={<DeleteCar />} />
        <Route
          path="/"
          element={currentUser ? <Navigate to="/vehicles" /> : <Login />}
        />
        <Route
          path="/register"
          element={currentUser ? <Navigate to="/vehicles" /> : <Register />}
        />
      </Routes>
    </>
  );
};

export default App;
