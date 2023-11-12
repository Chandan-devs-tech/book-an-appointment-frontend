/* eslint-disable */
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from './components/auth/Login'
import Register from './components/auth/Register'

function App() {
  const { currentUser } = useSelector((state) => state.user)
  console.log(currentUser)
  return (
    <div className="AppDiv">
      <div className="App">
        <div className="navRoute">
          <Routes>
            <Route path="/login" element={currentUser ? <Navigate to="/" /> : <Login />} />
            <Route path="/register" element={currentUser ? <Navigate to="/login" /> : <Register />} />
          </Routes>
        </div>
      </div>
    </div>

  );
}

export default App;