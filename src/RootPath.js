/* eslint-disable */
import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './App.css'
import SidebarComponents from './components/sideBar/sideBarComponent';
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Vehicles from './components/pages/Vehicles';
import Home from './components/Home';


function RootPath() {
  const { currentUser } = useSelector((state) => state.user)
  return (
    <div >
      <div className='root_container'>
      {currentUser && 
       <Home />}
      </div>
        <div>
        <Routes>
            <Route path="/vehicles" element={<Vehicles />} />
            <Route path="/" element={currentUser ? <Navigate to="/" /> : <Login />} />
            <Route path="/register" element={currentUser ? <Navigate to="/login" /> :   <Register />} />
          </Routes>
        </div>
    </div>
  )
}
export default RootPath;