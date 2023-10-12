import React from "react";
import { NavLink } from "react-router-dom";
import "./homepagehero.css";

function HomePageHero() {
  return (
    <div className="homepage--hero">
      <div className="hero--heading">
        <p className="satisfy">fırsatı kaçırma</p>
        <p className="bebas"> KOD ACIKTIRIR <br /> pizza, doyurur</p>

      </div>

      <NavLink id="order-pizza" className="navlink" to="/pizza">
        <button className="custom--button">ACIKTIM</button>
      </NavLink>
    </div>
  );
}

export default HomePageHero;
