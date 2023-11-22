import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SidebarComponents from '../sideBar/sideBarComponent';
import { fetchCars, deleteCar } from '../../redux/cars/CarsSlice';

const DeleteCar = () => {
  const dispatch = useDispatch();
  const carData = useSelector((state) => state.car.cars);
  useEffect(() => {
    dispatch(fetchCars());
  }, [carData.length, dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteCar(id));
  };
  return (
    <div className="deleteCarMainContainer">
      {/* <div className="delete-side-menu"> */}
      <SidebarComponents />
      {/* </div> */}
      <div className="deleteCarContainer">
        {carData.map((item) => (
          <div className="deletePage" key={item.id}>
            <img src={item.img} alt="car-img" className="deleteCarImg" />
            <div className="delete-car-details">
              <p className="details-car-name">{item.name}</p>
              <p className="car-model">{item.model}</p>
              <p className="car-amount">
                <span>Price: $</span>
                {item.total_amount}
              </p>
            </div>
            <button className="delete-car-btn" type="button" onClick={() => handleDelete(item.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeleteCar;
