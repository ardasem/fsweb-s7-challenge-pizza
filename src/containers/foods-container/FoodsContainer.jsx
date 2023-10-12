import React from "react";
import HomePageCategories from "../../components/homepage-categories/HomePageCategories";
import FoodCard from "../../components/food-card/FoodCard";
import foodImgSrc1 from "../../Assets/adv-aseets/food-1.png";
import foodImgSrc2 from "../../Assets/adv-aseets/food-2.png";
import foodImgSrc3 from "../../Assets/adv-aseets/food-3.png";
import "./foods-container.css";

function FoodsContainer() {
  return (
    <div className="foods--container">
      <div className="foods--headings">
        <p className="satisfy red">en çok paketlenen menüler</p>
        <p className="barlow">Acıktıran Kodlara Doyuran Lezzetler</p>
      </div>

      <HomePageCategories food={"Ramen"} />

      <div className="food--cards--container">
        <FoodCard
          imgSrc={foodImgSrc2}
          name={"Terminal Pizza"}
          price={60}
          rating={200}
        />
        <FoodCard
          imgSrc={foodImgSrc1}
          name={"Position Absolute Acı Pizza"}
          price={85}
          rating={928}
        />
        <FoodCard
          imgSrc={foodImgSrc3}
          name={"useEffect Tavuklu Burger"}
          price={75}
          rating={462}
        />
      </div>
    </div>
  );
}

export default FoodsContainer;
