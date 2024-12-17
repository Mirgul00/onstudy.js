
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h2 className="footer-logo">OnStudy</h2>
          <p className="footer-text">
            Ready to elevate your online presence? <br />
            Contact us today to discuss your project and <br /> discover how we can bring your vision to life.
          </p>
          <p className="footer-powered">
            ❤️ Made with love powered by inkyy.com
          </p>
        </div>
        <div className="footer-right">
        <ul className="footer-links">
            <li><a href="#contacts">Контакты</a></li>
            <li><a href="#about">О нас</a></li>
            <li><a href="#reviews">Отзывы</a></li>
          </ul>
          <div className="footer-icons">
            <a href="#instagram" className="icon">📷</a>
            <a href="#linkedin" className="icon">🔗</a>
            <a href="#tiktok" className="icon">🎵</a>
            <a href="#github" className="icon">👨‍💻</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
