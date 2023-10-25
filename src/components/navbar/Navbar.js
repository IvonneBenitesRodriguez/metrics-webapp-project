import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiMic, FiSettings } from 'react-icons/fi';
import s from './style.module.css';

const Navbar = () => (
  <nav className={s.navbar}>
    <NavLink to="/" exact="true" activeclassName="active">Home</NavLink>
    {' '}
    <NavLink to="/details/1" activeclassName="active">Details</NavLink>
    <FiMic />
    <FiSettings />
  </nav>
);

export default Navbar;
