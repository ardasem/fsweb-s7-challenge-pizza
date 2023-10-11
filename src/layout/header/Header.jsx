import React from "react";
import './Header.css'
import {NavLink} from 'react-router-dom'

function Header() {
  return (
    <div className="header--container">
    <NavLink className="navlink" to="/">
    <h1 className="header--heading">Teknolojik Yemekler</h1>
  </NavLink>
   
    </div>
  );
}

export default Header;
