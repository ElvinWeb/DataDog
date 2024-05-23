import "./Hero.css";

const Hero = () => {
  return (
    <header className="header main-banner">
      <div className="container main-content">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <div className="content align-center">
              <h1 className="title">Modern monitoring & security</h1>
              <h3 className="sub-title">
                See inside any stack, any app, at any scale, anywhere.
              </h3>
              <div className="button-group text-center">
                <button href="#" className="btn btn-gradient">
                  FREE TRIAL
                </button>
                <button href="#" className="btn btn-video">
                  <div className="d-flex justify-content-center align-items-center">
                    <i className="fa-solid fa-circle-play me-1"></i>
                    SEE THE PLATFORM
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container main-animation-dash">
        <div className="row">
          <div className="col-12">
            <div className="d-block mobile-dash">
              <figure className="text-center">
                <img
                  src="../../images/home-animation-mobile-1.jpg"
                  className="img-fluid"
                  alt=""
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
      <div className="container main-customers">
        <div className="row justify-content-center">
          <div className="col-12 mb-3">
            <h6 className="text-center text-uppercase text-gray fw-bold title">
              Thousands of customers love & trust Datadog
            </h6>
          </div>
          <div className="col-12 col-sm-10">
            <div className="company-logos d-flex justify-content-center">
              <a href="./#">
                <img src="../../images/hashi-corp.jpg" alt="" />
              </a>
              <a href="./#">
                <img src="../../images/21st-century.jpg" alt="" />
              </a>
              <a href="./#">
                <img src="../../images/peloton.jpg" alt="" />
              </a>
              <a href="./#">
                <img src="../../images/samsung.jpg" alt="" />
              </a>
              <a href="./#">
                <img src="../../images/whole-foods.jpg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
