import "./MainPage.css";
import Header from "../../components/Header/Header";
import HeroSection from "../../components/HeroSection/HeroSection";
import Courses from "../../components/Courses/Courses";
import FullScreenCarousel from "../../components/FullScreenCarousel/FullScreenCarousel";
import Slider from "../../components/Slider/Slider";
import Form from "../../components/Form/Form";
import Footer from "../../components/Footer/Footer";
import { useRef } from "react";
// import Courses from "../../components/Courses/Courses";
function MainPage() {
  const sectionRef = useRef(null);

  const scrollToSection = () => {
    sectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="m_header">
      <Header />

      <HeroSection />
      <Courses />
      <Slider scrollToSection={scrollToSection} />
      <FullScreenCarousel />
      <Form sectionRef={sectionRef} />
      <Footer />
    </div>
  );
}
export default MainPage;
