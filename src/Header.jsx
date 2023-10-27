import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <div className="banner"></div>
    <ul className="main-nav">
      <li><NavLink to="/">Learn Japanese</NavLink></li>
      <li><NavLink to="courseinfo">Course Info</NavLink></li>
      <li><NavLink to="beyond">Beyond the Classroom</NavLink></li>
    </ul>    
  </header>
);

export default Header;