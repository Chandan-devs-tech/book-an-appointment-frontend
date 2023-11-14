/* eslint-disable */
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Vehicles from './components/pages/Vehicles';
import VehiclesDetails from './components/pages/VehiclesDetails';
import AddVehicles from './components/pages/AddVehicles';

function App() {
  const { currentUser } = useSelector((state) => state.user)
 
  return (
    <div className="AppDiv">
      <div className="App">
        <div className="navRoute">
          <Routes>
            <Route path="/details/:id" element={currentUser ? <VehiclesDetails /> : <Navigate to="/" />} />
            <Route path="/addvehicle" element={currentUser ? <AddVehicles /> : <Navigate to="/" />} />
            <Route index element={currentUser ? <Vehicles /> : <Splash />} />
            <Route path="/login" element={currentUser ? <Navigate to="/" /> : <Login />} />
            <Route path="/register" element={currentUser ? <Navigate to="/login" /> :   <Register />} />
          </Routes>
        </div>
      </div>
    </div>

  );
}

export default App;