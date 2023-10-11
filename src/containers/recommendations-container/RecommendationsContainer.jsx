import React from "react";
import "./recommendations-container.css";

function RecommendationsContainer() {
  return (
    <div className="recommendations--container">
      <div className="foodcard--big">
        <p className="big--paragraph">
          Özel <br /> Lezzetus
        </p>
        <p className="small--paragraph"> Position:Absolute Acı Burger</p>
        <button className="home--orderbtn">SİPARİŞ VER</button>
      </div>

      <div>
        <div className="foodcard--small">
          <p className="big--paragraph">
            Hackathlon <br /> Burger Menü
          </p>
          <button className="home--orderbtn">SİPARİŞ VER</button>
        </div>

        <div className="foodcard--small card-two">
          <p>
            <em>Çoooook</em> hızlı <br />
            npm gibi kurye
          </p>
          <button className="home--orderbtn">SİPARİŞ VER</button>
        </div>
      </div>
    </div>
  );
}

export default RecommendationsContainer;
