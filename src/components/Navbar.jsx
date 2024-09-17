import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

// Import the logo image
import logo from '../assets/logo.png';

const Navbar = () => {
  const location = useLocation(); // Get current location

  return (
    <nav className="navbar">
      <div className="logo">
        {/* Use the img tag to display the logo */}
        <img src={logo} alt="Website Logo" className="logo-image" />
      </div>
      <ul className="nav-links">
        <li>
          <Link
            to="/"
            className={location.pathname === '/' ? 'active' : ''}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/products"
            className={location.pathname === '/products' ? 'active' : ''}
          >
            Products
          </Link>
        </li>
        <li>
          <Link
            to="/cart"
            className={location.pathname === '/cart' ? 'active' : ''}
          >
            Cart
          </Link>
        </li>
        <li>
          <Link
            to="/account"
            className={location.pathname === '/account' ? 'active' : ''}
          >
            Account
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
