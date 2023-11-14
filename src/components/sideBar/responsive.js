/* eslint-disable jsx-a11y/anchor-is-valid */
import Logo from '../../assets/logo-white.jpg';

const ResponsiveNav = () => (
  <div className="mobile-menu">
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <a className="navbar-brand" href="#"><img src={Logo} alt="Drive Easy Logo" className="bi-logo-white" /></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Add Reservation</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">My Reservations</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"> Add Car</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"> Delete Car</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"> Log out</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);

export default ResponsiveNav;
