/* eslint-disable */
import React, { useEffect, useState } from 'react';
// import './styles/vehicle.css';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getVehicles } from '../../redux/cars/vehicles';

const Vehicles = () => {
  const dispatch = useDispatch();
  const vehicle = useSelector((state) => state.vehicles);
  useEffect(() => {
    dispatch(getVehicles());
  }, []);

  const [get, setGet] = useState(null);

  const getId = (id) => {
    // getVehicleId(dispatch, { id })
    const getVehicleId = async () => {
      const response = await fetch(
        `http://localhost:3000/api/v1/cars/${id}`,
      );
      const data = await response.json();
      setGet(data);
      return data;
    };
    return getVehicleId;
  };

  return (
    <div className="vehiclesDiv">
      <h1>CARS ON SHOWROOM </h1>
      <h2>Please select a Car</h2>
      <div className="vehicles">
          {vehicle.vehicles.map((veh) => (
              <div className="vehicleDiv">
                  onClick={getId(veh.id)}
                  state={veh}
                  to={`/details/${veh.id}`}
                  <img src={veh.image} className="vehicleImg" alt="" />
                  <h3>{veh.name}</h3>
                  <p>{veh.description}</p>
              </div>
          ))}
      </div>
    </div>
  );
};

export default Vehicles;