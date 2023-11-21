import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Vehicles from './components/pages/Vehicles';
import CarDetails from './components/pages/CarDetails';
import DeleteCar from './components/car/DeleteCar';

function App() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <>
      {/* <div className="root_container"> */}
      <Routes>
        <Route
          path="/vehicles"
          element={currentUser ? <Vehicles /> : <Navigate to="/login" />}
        />
        <Route path="/details/:id" element={<CarDetails />} />
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
      {/* </div> */}
    </>
  );
}

export default App;
