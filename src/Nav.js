import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Nav() {
  const navStyle={
    color: 'white'
  };

  return (
    <nav>
        <h3>COVID-19 Update</h3>
        <ul className="nav-links">
            <Link style={navStyle} to="/about">
              <li>About</li>
            </Link>
            <Link style={navStyle} to="/shop">
              <li>Country</li>
            </Link>
        </ul>
    </nav>
  );
}

export default Nav;
