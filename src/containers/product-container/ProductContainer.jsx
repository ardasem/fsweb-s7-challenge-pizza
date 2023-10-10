import React from "react";
import "./ProductContainer.css";

function ProductContainer() {
  return (
    <div className="product--container">
      <h1>Position Absolute Acı Pizza</h1>

      <div className="info--container">
        <div className="info--header">
          <p className="price--tag">85.50₺</p>
          <p className="rating">4.9 (200)</p>
        </div>

        <p className="pizza--info--text">
          Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı
          pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
          diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
          ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak,
          düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli
          lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.
        </p>
      </div>
    </div>
  );
}

export default ProductContainer;
