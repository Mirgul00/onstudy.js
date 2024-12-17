import React from "react";
import "./HeroSection.css";
import redbig from "../../assets/img/redBig — копия.png"
import small from "../../assets/img/small — копия.png"
import ceh from "../../assets/img/ceh — копия.png"
// import glavpic from "../../assets/img/glavpic.png"
function HeroSection() {
  return (
    <div className="container">
      <div className="content">
        {/* Основной текст */}
        <div className="text">
          <h1>
            <span>ON</span> <span className="text-POS">STUDY</span>
          </h1>
          <p className="text-Bec">BECOME BETTER TOGETHER WITH ONSTUDY</p>
        </div>

        {/* Пузыри */}
        <img className="bubble large" src={redbig} alt="Large Bubble" />
        <img className="bubble medium" src={small} alt="Medium Bubble" />
        <img className="bubble small" src={ceh} alt="Small Bubble" />
      </div>
      </div>
  );
}

export default HeroSection;

