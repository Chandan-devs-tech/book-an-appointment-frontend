/* eslint-disable */
import './styles/App.css';
import './styles/SideBar.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Splash from './components/auth/Splash'
import Vehicles from './components/pages/Vehicles';
import SidebarComponents from './components/sideBar/sideBarComponent';
import ResponsiveNav from './components/sideBar/responsive';
import './App.css'

function App() {
  const { currentUser } = useSelector((state) => state.user)
 
  return (
    <div className="AppDiv">
       {currentUser && <div className="navApp">
       <SidebarComponents />
       </div>}
        <div className="navRoute">
          <Routes>
            <Route path="/" element={ <SidebarComponents />} />
            <Route path="/vehicles" element={<Vehicles />} />
            <Route path="/login" element={currentUser ? <Navigate to="/" /> : <Login />} />
            <Route path="/register" element={currentUser ? <Navigate to="/login" /> :   <Register />} />
          </Routes>
        </div>
      </div>

  );
}

export default App;