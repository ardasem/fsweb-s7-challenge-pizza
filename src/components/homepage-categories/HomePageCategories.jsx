import React from "react";
import koreanLogo from "../../Assets/adv-aseets/icons/1.svg";
import pizzaLogo from "../../Assets/adv-aseets/icons/2.svg";
import burgerLogo from "../../Assets/adv-aseets/icons/3.svg";
import friesLogo from "../../Assets/adv-aseets/icons/4.svg";
import fastfoodLogo from "../../Assets/adv-aseets/icons/5.svg";
import drinksLogo from "../../Assets/adv-aseets/icons/6.svg";
import './homepage-categories.css'

function HomePageCategories(props) {
  return (
    <div className="homepage--categories--container">
      <span className="category">
        <img src={koreanLogo} alt="" />
        <p>{props.food}</p>
      </span>
      <span className="category active">
        <img src={pizzaLogo} alt=""/>
        <p>Pizza</p>
      </span>
      <span className="category">
        <img src={burgerLogo} alt=""/>
        <p>Burger</p>
      </span>
      <span className="category">
        <img src={friesLogo} alt="" />
        <p>Kızartmalar</p>
      </span>
      <span className="category">
        <img src={fastfoodLogo} alt="" />
        <p>Fast food</p>
      </span>
      <span className="category">
        <img src={drinksLogo} alt=""/>
        <p>Gazlı İçecekler</p>
      </span>
    </div>
  );
}

export default HomePageCategories;
