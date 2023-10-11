import React from "react";
import "./foodcard.css";

function FoodCard(props) {
  const { imgSrc, name, price, rating } = props;
  return (
    <div className="food--card">
      <img src={imgSrc} alt="" />
      <p className="card--heading">{name}</p>

      <div className="card--info">
        <p>4.9 ({rating}) </p>
        <p className="bold">{price} ₺</p>
      </div>
    </div>
  );
}

export default FoodCard;
