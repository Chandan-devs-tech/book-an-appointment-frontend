/* eslint-disable jsx-a11y/anchor-is-valid */
import Logo from '../../assets/drive-easy-logo.png';

const SidebarComponents = () => (
  <>
    <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{ width: '280px' }}>
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
        <img src={Logo} alt="Drive Easy Logo" width="164" height="49" className="bi me-2" />
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <a href="#" className="nav-link" aria-current="page">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Add Reservation
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link ">
            My Reservations
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link ">
            Add Car
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link ">
            Delete Car
          </a>
        </li>
        <li className="nav-item logout">
          <a href="#" className="nav-link ">
            Log out
          </a>
        </li>
      </ul>

    </div>
  </>
);

export default SidebarComponents;
