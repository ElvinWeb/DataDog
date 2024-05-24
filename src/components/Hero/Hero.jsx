import "./Hero.css";
import HeroCustomers from "./HeroCustomers";
import HeroContent from "./HeroContent";
import HeroVideoPoster from "./HeroVideoPoster";

const Hero = () => {
  return (
    <header className="header main-banner">
      <HeroVideoPoster />
      <HeroContent />
      <div className="container main-animation-dash">
        <div className="row">
          <div className="col-12">
            <div className="col-10 mobile-dash">
              <figure className="text-center d-none">
                <img
                  src="https://imgix.datadoghq.com/img/home-animation-mobile.png?w=345&h=202&auto=compress,format&dpr=2 2x"
                  className="img-fluid "
                  alt=""
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
      <HeroCustomers />
    </header>
  );
};

export default Hero;
