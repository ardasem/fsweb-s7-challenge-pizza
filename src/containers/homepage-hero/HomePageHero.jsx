import React from "react";
import { NavLink } from "react-router-dom";
import heroBG from "../../Assets/adv-aseets/mvp-banner.png";
import "./homepagehero.css";

function HomePageHero() {
  return (
    <div className="homepage--hero">

        <p className="satisfy">fırsatı kaçırma</p>
        <p className="bebas"> KOD ACIKTIRIR</p>
        <p className="bebas">  pizza, doyurur</p>
        
      <div className="custom--button">
        <NavLink className='navlink' to="/pizza">ACIKTIM</NavLink>
      </div>
    </div>
  );
}

export default HomePageHero;
