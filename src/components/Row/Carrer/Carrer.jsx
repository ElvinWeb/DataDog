
const Carrer = () => {
  return (
    <div className="carrer-relative-row position-relative">
      <div className="row col-12 mx-0">
        <div className="row-text col-12 col-lg-6 px-0 d-flex">
          <div className="row-content col-lg-8" style={{ color: "#000" }}>
            <p className="text-uppercase small fw-semibold">Carrers</p>
            <h2 className="post-title">Join Our Pack</h2>
            <p className="mt-0">
              We are building the monitoring and security platform for
              developers, IT operations teams and business users in the cloud
              age. And we need talented people like you to join our team.
            </p>
            <a href="./#" style={{ color: "#000" }} className="link text-uppercase fw-semibold">
              Learn More <i className="fa-solid fa-chevron-right"></i>
            </a>
          </div>
        </div>
        <div className="row-img col-12 col-lg-6 px-0">
          <img
            src="https://imgix.datadoghq.com/img/home/join_our_pack_desktop.jpg?auto=format&w=1200"
            className="img-fluid"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Carrer;
