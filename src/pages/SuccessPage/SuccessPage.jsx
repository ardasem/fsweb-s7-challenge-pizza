import React from "react";
import Header from "../../layout/header/Header";
import "./successpage.css";
import ingredients from "../../components/checkbox/data";

function SuccessPage(props) {
  const { finalOrderState } = props;

  return (
    <div className="success--container">
      <Header />
      <div className="success--heading">
        <p className="satisfy">lezzetin yolda</p>
        <p className="bebas"> SİPARİŞ ALINDI</p>
      </div>

      <div className="success--order--info">
        <p className="success--heading--two">{finalOrderState.foodName}</p>
        <p className="barlow">Boyut: {finalOrderState.size}</p>
        <p className="barlow">
          Hamur: {finalOrderState.dough === "thin" ? "İnce" : "Kalın"}
        </p>
        <p className="barlow">
          Ek Malzemeler: {finalOrderState.ingredients + " "}
        </p>
      </div>

      <div className="success--price--container">
        <p className="success--heading--two">Sipariş Toplamı</p>
        <div className="price--listing">
          <p className="success--heading--two">Seçimler:</p>
          <p className="success--heading--two">{finalOrderState["ingredients"].length * 5} ₺</p>
        </div>

        <div className="price--listing">
          <p className="success--heading--two">Toplam:</p>
          <p className="success--heading--two">{finalOrderState.totalPrice + " "} ₺</p>
        </div>
      </div>
    </div>
  );
}

export default SuccessPage;
