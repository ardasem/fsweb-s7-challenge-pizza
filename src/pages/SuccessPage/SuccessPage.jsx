import React from "react";
import Header from "../../layout/header/Header";
import "./successpage.css";

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
        <p className="barlow">
          Boyut: <strong>{finalOrderState.size}</strong>
        </p>
        <p className="barlow">
          Hamur:{" "}
          <strong>{finalOrderState.dough === "thin" ? "İnce" : "Kalın"}</strong>
        </p>
        <p className="barlow">
          Ek Malzemeler: <strong>{finalOrderState.ingredients + " "}</strong>
        </p>
        <p className="barlow">
          Sipariş Numarası: <strong>{finalOrderState.id + " "}</strong>
        </p>
        <p className="barlow">
          Sipariş Tarihi: <strong>{finalOrderState.createdAt}</strong>
        </p>
      </div>

      <div className="success--price--container">
        <p className="success--heading--two">Sipariş Toplamı</p>
        <div className="price--listing">
          <p className="success--heading--two">Seçimler:</p>
          <p className="success--heading--two">
            {finalOrderState["ingredients"].length * 5} ₺
          </p>
        </div>

        <div className="price--listing">
          <p className="success--heading--two">Toplam:</p>
          <p className="success--heading--two">
            {finalOrderState.totalPrice + " "} ₺
          </p>
        </div>
      </div>
    </div>
  );
}

export default SuccessPage;
