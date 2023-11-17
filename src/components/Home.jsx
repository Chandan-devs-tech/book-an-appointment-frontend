/* eslint-disable */
import React from 'react'
import Vehicles from './pages/Vehicles';
import '../App.css'
import SidebarComponents from './sideBar/sideBarComponent';


function Home() {
  return (
    <div className='container'>
        <SidebarComponents />
        <Vehicles />
    </div>
  )
}

export default Home;