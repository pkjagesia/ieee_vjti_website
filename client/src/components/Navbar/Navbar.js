import React from 'react';
import './Navbar.css';
import IEEE_logo from '../../assets/images/ieee_logo.png';

const Navbar =()=>{

    return (
        <div className="navbar" id="navbar">
      <div className="flex">
        <img src={IEEE_logo} loading="lazy"  alt='ieee_logo' className="m-1" />
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">Events</a></li>
            <li><a href="/">R&D</a></li>
            <li><a href="/">Magazine</a></li>
            <li><a href="/">Membership</a></li>
            <li><a href="/">Team</a></li>
            <li><a href="/">Contact Us</a></li>
          </ul>
        </nav>
      </div>
    </div>

    );
}

export default Navbar;