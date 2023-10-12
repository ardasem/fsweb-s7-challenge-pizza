import React from "react";
import ProductContainer from "../product-container/ProductContainer";
import heroPizza from './adv-form-banner.png'
import './hero.css'
function Hero() {
  return (
    <div className="hero--container">
        <img className="hero--img" src={heroPizza} alt="" />

        <p className="breadcrumb--container">Anasayfa-Seçenekler- <em>Sipariş Oluştur</em></p>

      <ProductContainer />
    </div>
  );
}

export default Hero;
