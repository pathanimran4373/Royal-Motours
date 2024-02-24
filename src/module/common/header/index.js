import React, { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {

  const navigate = useNavigate(); 
  const navRef = useRef(); 

  // Function to handle logout action
  const handleLogout = () => {
    localStorage.removeItem("loggedIn"); // Remove logged in status from local storage
    navigate("/login"); // Redirect user to login page
  }

  // Function to toggle display of the navigation menu
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav"); // Toggle the 'responsive_nav' class
  }

  return (
    <div className="header">
      {/* Logo */}
      <a href="/" className="logo">
        <span>max</span>wheels
      </a>

      {/* Navigation Menu */}
      <nav className="navbar" ref={navRef}>
        {/* Links */}
        <Link className='menu' to='/' onClick={showNavbar}>HOME</Link>
        <Link className='menu' to='vehicles' onClick={showNavbar}>VEHICLES</Link>
        <Link className='menu' to='services' onClick={showNavbar}>SERVICES</Link>
        <Link className='menu' to='cars' onClick={showNavbar}>ALL CARS</Link>

        {/* Conditional rendering of additional links if user is logged in */}
        {localStorage.getItem("loggedIn") && (
          <>
            <Link className='menu' to='Rating'>REVIEWS</Link>
            <Link className='menu' to='Contact'>CONTACT</Link>
          </>
        )}

        {/* Close button for navigation menu */}
        <button className='nav-btn nav-close-btn' onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>

      {/* Login/Register buttons */}
      {!localStorage.getItem("loggedIn") ? (
        <div id="login-btn">
          <Link className="btn SignUp" to="register">Sign up</Link>
          <Link className="btn SignUp" to="Login">Login</Link>
        </div>
      ) : (
        <button className="btn SignUp" onClick={handleLogout}>LOGOUT</button>
      )}

      {/* Button to toggle display of navigation menu */}
      <button className='nav-btn' onClick={showNavbar}>
        <FaBars />
      </button>
    </div>
  );
}

export default Navbar;


