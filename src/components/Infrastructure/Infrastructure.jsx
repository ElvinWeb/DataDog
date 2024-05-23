import "./Infrastructure.css";

const Infrastructure = () => {
  return (
    <div className="infrastructure">
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="video-container col-8 d-flex flex-column justify-content-center">
            <img
              src="https://imgix.datadoghq.com/img/home-hostmap-static.png?w=750&fit=crop&fm=jpg&auto=format&dpr=1.75&q=40"
              alt="serverless"
              className="h-100 w-100"
            />
          </div>
          <div className="col-4">
            <article>
              <h2 className="title">Infrastructure</h2>
              <h6 className="sub-title">From overview to deep details, fast</h6>
              <a href="./#" className="link">
                LEARN MORE <i className="fa-solid fa-chevron-right"></i>
              </a>
            </article>
            <ul className="infr-list">
              <li className="infr-item fw-semibold">Log Management</li>
              <li className="infr-item fw-semibold">APM</li>
              <li className="infr-item fw-semibold">Security Monitoring</li>
              <li className="infr-item fw-semibold">Network Monitoring</li>
              <li className="infr-item fw-semibold">Synthetic Monitoring</li>
              <li className="infr-item fw-semibold">Real User Monitoring</li>
              <li className="infr-item fw-semibold">Serverless</li>
              <div className="view-all">
                <a href="./#" className="btn-outline btn-view">
                  VIEW ALL FEATURES
                </a>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Infrastructure;
