import React from "react";
import { NavLink } from "react-router-dom";
import locationIcon from "../../Assets/adv-aseets/icons/icon-1.png";
import mailIcon from "../../Assets/adv-aseets/icons/icon-2.png";
import phoneIcon from "../../Assets/adv-aseets/icons/icon-3.png";
import ig1 from "../../Assets/adv-aseets/insta/li-0.png";
import ig2 from "../../Assets/adv-aseets/insta/li-1.png";
import ig3 from "../../Assets/adv-aseets/insta/li-2.png";
import ig4 from "../../Assets/adv-aseets/insta/li-3.png";
import ig5 from "../../Assets/adv-aseets/insta/li-4.png";
import ig6 from "../../Assets/adv-aseets/insta/li-5.png";
import twIcon from '../../Assets/adv-aseets/icons/icons8-twitter-24.png'

import "./footer.css";

function Footer() {
  return (
    <div className="footer--container">
        
        <div className="footer--upper">  
      <div className="left">
        <NavLink className="navlink" to="/">
          <h1 className="footer--heading">
            Teknolojik <br /> Yemekler
          </h1>
        </NavLink>

        <div className="contact--info">
          <span className="contact--span">
            <img src={locationIcon} alt="" />
            <p>341 Londonderry Road, Istanbul Türkiye</p>
          </span>
          <span className="contact--span">
            <img src={mailIcon} alt="" />
            <p>aciktim@teknolojikyemekler.com</p>
          </span>
          <span className="contact--span">
            <img src={phoneIcon} alt="" />
            <p>+90 216 123 45 67</p>
          </span>
        </div>
      </div>

      <div className="middle">
        <p className="footer--heading--two">Sıccacık Menuler</p>
        <p className="footer--paragraph">5 Kişilik Hackathlon Pizza</p>
        <p className="footer--paragraph">useEffect Tavuklu Pizza</p>
        <p className="footer--paragraph">Beyaz Console Frosty</p>
        <p className="footer--paragraph">Testler Geçti Mutlu Burger</p>
        <p className="footer--paragraph">Position Absolute Acı Burger</p>
      </div>

      <div className="right">
        <p className="footer--heading--two">Instagram</p>
        <div className="ig--grid">
          <img src={ig1} alt="" />
          <img src={ig2} alt="" />
          <img src={ig3} alt="" />
          <img src={ig4} alt="" />
          <img src={ig5} alt="" />
          <img src={ig6} alt="" />
        </div>
      </div></div>
        <div className="footer--lower">
            <p className="footer--paragraph">© 2023 Teknolojik Yemekler. </p>
            <img className="footer--icon" src={twIcon} alt="" />
        </div>
      
    </div>
  );
}

export default Footer;
