/* eslint-disable */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import { fetchCars } from '../../redux/cars/CarsSlice';
import SidebarComponents from '../sideBar/sideBarComponent';
import ReservationForm from './ReservationForm';

function CarDetails() {
  const [showReservationForm, setShowReservationForm] = useState(false);
  const dispatch = useDispatch();
  const { id } = useParams();
  const intId = parseInt(id, 10);
  const carData = useSelector((state) => state.car.cars);
  const filteredData = carData.filter((item) => item.id === intId);
  const handleReservationSubmit = (reservationData) => {
    console.log('Reservation submitted:', reservationData);
    setShowReservationForm(false);
  };
  useEffect(() => {
    if (carData.length === 0) {
      dispatch(fetchCars());
    }
  }, [dispatch]);
  return (
    <div className="sidebar-detail-container">
      <SidebarComponents />
      <div className="details-page">
        {
        filteredData.map((item) => (
          <div className="car-detail-page" key={item.id}>
            <div className="img-container">
              <img src={item.img} alt="car-img" className="img" />
            </div>
            <div className="car-detail-container">
              <div className="car-name-container">
                <p className="details-car-name">{item.name}</p>
                <p className="car-model">{item.model}</p>
              </div>
              <div className="car-amount-container">
                <p className="car-finance">
                  <span>Finance Fee</span>
                  <span>{item.finance_fee}</span>
                </p>
                <p className="car-amount">
                  <span>Total Amount</span>
                  <span>{item.total_amount}</span>
                </p>
                <p className="car-duration">
                  <span>Duration</span>
                  <span>{item.duration}</span>
                </p>
              </div>
              <p className="discount">🎉 Enjoy 5.9% OFF Today! 🌟 Reserve now for exclusive savings! 🛍️</p>
              <button type="button" className="reserve-btn" onClick={() => setShowReservationForm(true)}>
                <FontAwesomeIcon icon={faGear} className="setting-icon" />
                Reserve
                <FontAwesomeIcon icon={faCircleChevronRight} className="setting-icon" />
              </button>
            </div>
          </div>
        ))
      }
      </div>
    </div>
  );
}

export default CarDetails;
