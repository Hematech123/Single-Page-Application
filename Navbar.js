import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
   <center>
        <div className='navbar'>
<NavLink to="/" style={{ marginRight: '15px' }}>Home</NavLink>
<NavLink to="/about" style={{ marginRight: '10px' }}>About</NavLink>
<NavLink to="/contact" style={{ marginRight: '10px' }}>Contact</NavLink>
<NavLink to="/stuff" style={{ marginRight: '10px' }}>Stuff</NavLink>
<NavLink to="/product" style={{ marginRight: '10px' }}>Shopping</NavLink>
    </div></center>
  );
};
export default Navbar