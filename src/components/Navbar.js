import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <NavLink to="/" exact="true" activeclassName="active">Home</NavLink>
    {' '}
    <NavLink to="/details/1" activeclassName="active">Details</NavLink>
  </nav>
);

export default Navbar;
