/* eslint-disable */
import './styles/App.css';
import './styles/SideBar.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Car from './components/car/car';
import SidebarComponents from './components/sideBar/sideBarComponent';

function App() {
  const { currentUser } = useSelector((state) => state.user)
  console.log(currentUser)
  return (
    <div className="AppDiv">
      <div className="App">
        <div className="navRoute">
          <Routes>
            <Route path="/" element={ <SidebarComponents />} />
            <Route path="/login" element={currentUser ? <Navigate to="/" /> : <Login />} />
            <Route path="/register" element={  <Register />} />
          </Routes>
        </div>
      </div>
    </div>

  );
}

export default App;