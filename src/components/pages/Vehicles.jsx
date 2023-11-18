import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { register } from 'swiper/element/bundle';
import { Carousel } from 'react-bootstrap';
import { fetchCars } from '../../redux/cars/CarsSlice';
import SidebarComponents from '../sideBar/sideBarComponent';
import 'bootstrap/dist/css/bootstrap.min.css';

register();

const Vehicles = () => {
  const dispatch = useDispatch();
  const vehicles = useSelector((state) => state.car.cars);
  useEffect(() => {
    if (vehicles.length === 0) {
      dispatch(fetchCars());
    }
  }, [dispatch]);

  return (
    <div className="main-page">
      <SidebarComponents />
      <div className="vehiclesDiv">
        <h1>CARS ON SHOWROOM</h1>
        <h2>Please select a Car</h2>
        <Carousel interval={null} indicators={false}>
          {vehicles.map((veh) => (
            <Carousel.Item key={veh.id}>
              <Link className="details-link" to={`/details/${veh.id}`}>
                <div className="vehicleDiv">
                  <img src={veh.img} className="vehicleImg" alt="" />
                  <h3 className="car-name">{veh.name}</h3>
                  <p className="car-star">******************************</p>
                  <p className="car-description">{veh.description}</p>
                </div>
              </Link>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Vehicles;
