import "./Hero.css";
import HeroCustomers from "./HeroCustomers";
import HeroContent from "./HeroContent";
import HeroVideoPoster from "./HeroVideoPoster";
import HeroAnimatedDash from "./HeroAnimatedDash";

const Hero = () => {
  return (
    <header className="header main-banner">
      <HeroVideoPoster />
      <HeroContent />
      <HeroAnimatedDash />
      <HeroCustomers />
    </header>
  );
};

export default Hero;
