// components/ReviewSlider/ReviewSlider.jsx
import React from "react";
import Carousel from "react-slick";
import "./Slider.css";
import img1 from "../../assets/img/image1.png";
import img2 from "../../assets/img/image2.png";
import img3 from "../../assets/img/image1.png";

const photos = [
  img1, // Пример фотографии
  img2,
  img3,
];

const ReviewSlider = ({scrollToSection}) => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="review-slider-section">
      <div className="left-content">
        <h2 className="section-title">Почему выбирают нас?</h2>
        <p className="section-description">
          Мы предоставляем высококачественные услуги, которые уже оценили наши
          клиенты. Ознакомьтесь с их отзывами, чтобы убедиться в этом!
        </p>
        <div className="info-box">
          <p className="box-text">Let’s Schedule a Meeting</p>
          <button onClick={scrollToSection} className="box-button">Оставить заявку</button>
        </div>
      </div>
      <div className="right-slider">
        <Carousel {...settings}>
          {photos.map((photo, index) => (
            <div key={index} className="slide_img">
              <img
                src={photo}
                alt={`Фото ${index + 1}`}
                className="slider-photo"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ReviewSlider;
