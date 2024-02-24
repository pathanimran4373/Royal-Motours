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
        <Link className='menu' to='/'>HOME</Link>
        <Link className='menu' to='vehicles'>VEHICLES</Link>
        <Link className='menu' to='services'>SERVICES</Link>
        <Link className='menu' to='cars'>ALL CARS</Link>

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


// import React from 'react'
// import './Navbar.css'
// import { useRef } from 'react'
// import { FaBars, FaTimes } from 'react-icons/fa'
// import { Link, useNavigate } from 'react-router-dom';


// function Navbar() {

// const navigate =useNavigate()

//   const handleLogout = () =>{
//     localStorage.removeItem("loggedIn");
//     navigate("/login")
//   }

//   const navRef = useRef();

//   const showNavbar = () => {
//     navRef.current.classList.toggle("responsive_nav");
//   }


//   return (

//     <div className="header">
//       <a href="#" class="logo"> <span>max</span>wheels </a>

//       <nav className="navbar" ref={navRef}>

//         <Link className='menu' to='/'>HOME</Link>
//         <Link className='menu' to='vehicles'>VEHICLES</Link>
//         <Link className='menu' to='services'>SERVICES</Link>
//         <Link className='menu' to='cars'>ALL CARS</Link>

//         {(localStorage.getItem("loggedIn")) ?
//           <div> <Link className='menu' to='Rating'>REVIEWS</Link>
//             <Link className='menu' to='Contact'>CONTACT</Link></div>
//           : ""

//         }

//         <button className='nav-btn nav-close-btn' onClick={showNavbar}><FaTimes /></button>

//       </nav>

//       {(!localStorage.getItem("loggedIn")) ?
//         <div id="login-btn">
//           <Link className="btn SignUp" to="Resister">Sign up</Link>
//           <Link className="btn SignUp" to="SignUP">Login</Link>

//         </div> : <button className="btn SignUp" onClick={handleLogout}>LOGOUT</button>

//       }

//       <button className='nav-btn' onClick={showNavbar}><FaBars /></button>


//     </div>
//   )
// }

// export default Navbar;
