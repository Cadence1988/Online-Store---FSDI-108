import './Navbar.css';
import { Link } from 'react-router-dom';
import UserContext from '../services/UserContext';
import { UserContext } from '../services/UserContext';
import { useContext } from 'react';

function Navbar() {
    const {user} = useContext(UserContext);

    return (
        <nav className="navbar navbar-expand-lg bg-body-darkcyan">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Organika</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item"> 
        <Link className="nav-link active" aria-current="page" to="/Catalog">Catalog</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/About">About</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/Admin">Admin</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/Contact">Contact</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <div className='navbar-text me=3'>
        Welcome, {user.name}
      </div>
      <span className='fas fa-shopping-cart'></span> {/*shopping cart icon*/}
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    );
}

export default Navbar;

