import "./Hero.css";
import HeroCustomers from "./HeroCustomers";
import HeroContent from "./HeroContent";
import HeroVideoPoster from "./HeroVideoPoster";
import HeroDash from "./HeroDash";

const Hero = ({ handleShow }) => {
  return (
    <header className="header main-banner">
      <HeroVideoPoster />
      <HeroContent onShow={handleShow} />
      <HeroDash />
      <HeroCustomers />
    </header>
  );
};

export default Hero;
