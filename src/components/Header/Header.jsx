import React from "react";
import "./Header.css";
// import logo_image from "../../assets/img/logo_onstudy.png"
import logo from "../../assets/icons/logo.onstudy.png"
function Header() {
  return (
    <header className="header">
      <div className="logo">
          <img src={logo} alt="Logo" />
          OnStudy
        </div>

      {/* <nav className="header-nav">
        <ul>
          <li><a href="#about">О нас</a></li>
          <li><a href="#courses">Курсы</a></li>
          <li><a href="#contacts">Контакты</a></li>
        </ul>
      </nav> */}
      <div className="navbar">
          <a href="#">Контакты</a>
          <a href="#">Онас</a>
          <a href="#">Отзывы</a>
        </div>
    </header>
  );
}

export default Header;


