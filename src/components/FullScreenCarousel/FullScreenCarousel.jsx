import "./FullScreenCarousel.css";
import { useState } from "react";
import Slider from "react-slick";
import astronaut from "../../assets/img/pic2block5.png";
import celebrating from "../../assets/img/pic3block5.png";
import education from "../../assets/img/picblock5.png";
import taken from "../../assets/img/pic3block5.png";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const images = [astronaut, celebrating, education, taken];

function FullScreenCarousel() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="carousel-container">

      <div className="carousel-header">
        <h1 className="carousel-title">Менторство от студентов Stanford, Cornell и др.</h1>
        <p className="carousel-subtitle">Наши ментора</p>
      </div>
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
            <img src={img} alt={img} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default FullScreenCarousel;