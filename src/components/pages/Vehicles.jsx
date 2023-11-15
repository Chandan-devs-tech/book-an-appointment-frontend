/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getVehicles } from '../../redux/cars/vehicles';

const Vehicles = () => {
  const dispatch = useDispatch();
  const vehicles = useSelector((state) => state.vehicles); // Changed 'vehicle' to 'vehicles'
  useEffect(() => {
    dispatch(getVehicles());
  }, [dispatch]); // Added 'dispatch' to the dependency array

  const [get, setGet] = useState(null);

  const getId = (id) => async () => { // Corrected the getId function
    try {
      const response = await fetch(
        `http://localhost:3000/api/v1/cars/${id}`,
      );
      const data = await response.json();
      setGet(data);
    } catch (error) {
      console.error('Error fetching vehicle details:', error);
    }
  };

  return (
    <div className="vehiclesDiv">
      <h1>CARS ON SHOWROOM </h1>
      <h2>Please select a Car</h2>
      <div className="vehicles">
        {vehicles.vehicles.map((veh) => ( // Changed 'vehicle' to 'vehicles'
          <NavLink
            key={veh.id} // Added a unique key prop
            to={`/details/${veh.id}`}
          >
            <div className="vehicleDiv" onClick={getId(veh.id)}>
              <img src={veh.img} className="vehicleImg" alt="" />
              <h3>{veh.name}</h3>
              <p>{veh.description}</p>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Vehicles;
