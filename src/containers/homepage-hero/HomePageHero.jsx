import React from "react";
import { NavLink } from "react-router-dom";
import heroBG from "../../Assets/adv-aseets/mvp-banner.png";
import "./homepagehero.css";

function HomePageHero() {
  return (
    <div className="homepage--hero">
      <p className="satisfy">fırsatı kaçırma</p>
      <p className="bebas"> KOD ACIKTIRIR</p>
      <p className="bebas"> pizza, doyurur</p>

      <NavLink className="navlink" to="/pizza">
        <button className="custom--button">ACIKTIM</button>
      </NavLink>
    </div>
  );
}

export default HomePageHero;
