import React from 'react'
import './Navbar.css'
import { useRef } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom';


function Navbar() {
const navigate =useNavigate()
  const handleLogout = () =>{
    localStorage.removeItem("loggedIn");
    navigate("/login")
  }

  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }


  return (

    <div className="header">
      <a href="#" class="logo"> <span>max</span>wheels </a>

      <nav className="navbar" ref={navRef}>
        <Link className='menu' to='car-shop'>HOME</Link>
        <Link className='menu' to='vehicles'>VEHICLES</Link>
        <Link className='menu' to='services'>SERVICES</Link>
        <Link className='menu' to='cars'>ALL CARS</Link>
        {(localStorage.getItem("loggedIn")) ?
          <div> <Link className='menu' to='Rating'>REVIEWS</Link>
            <Link className='menu' to='Contact'>CONTACT</Link></div>
          : ""

        }

        <button className='nav-btn nav-close-btn' onClick={showNavbar}><FaTimes /></button>

      </nav>

      {(!localStorage.getItem("loggedIn")) ?
        <div id="login-btn">
          <Link className="btn SignUp" to="Resister">Sign up</Link>
          <Link className="btn SignUp" to="SignUP">Login</Link>

        </div> : <button className="btn SignUp" onClick={handleLogout}>LOGOUT</button>

      }

      <button className='nav-btn' onClick={showNavbar}><FaBars /></button>


    </div>
  )
}

export default Navbar;
