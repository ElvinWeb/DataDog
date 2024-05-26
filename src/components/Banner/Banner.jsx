import "./Banner.css";

const Banner = () => {
  return (
    <div className="home-banner position-relative">
      <div className="container banner-content py-6 py-lg-4">
        <div className="row d-lg-flex">
          <div className="text-container text-white col-12 col-md-10 col-lg-12">
            <h5 className="title text-uppercase">
              EBOOK: REDUCING IT COSTS WITH OBSERVABILITY
            </h5>
            <h2 className="sub-title">
              Learn five ways engineering teams can optimize spend
            </h2>
            <a
              href="./#"
              className="btn-outline btn-get"
            >
              GET THE EBOOK
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
