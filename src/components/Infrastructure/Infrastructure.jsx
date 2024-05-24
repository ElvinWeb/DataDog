import "./Infrastructure.css";
import { InfrastuctureList } from "../../Data/InfrastuctureData";

const Infrastructure = () => {
  return (
    <div className="infrastructure">
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="video-container h-100 col-8 d-flex justify-content-center">
            <img
              src="https://imgix.datadoghq.com/img/serverless/serverless-1-all-your-functions-poster.png?w=750&fit=crop&fm=jpg&auto=format&dpr=1.75&q=40"
              alt="serverless"
              className="img-fluid image-overlay img-top  d-xl-block d-none"
            />
            <img
              src="https://imgix.datadoghq.com/img/home-hostmap-static.png?w=750&fit=crop&fm=jpg&auto=format&dpr=1.75&q=40"
              alt="hostmap"
              className="img-fluid image-2"
            />
            <img
              src="https://imgix.datadoghq.com/img/clickthrough-logs.png?w=750&fit=crop&fm=jpg&auto=format&dpr=1.75&q=40"
              alt="serverless"
              className="img-fluid image-overlay img-bottom d-xl-block d-none"
            />
          </div>
          <div className="col-lg-4">
            <article className="infr-header d-flex flex-column">
              <h2 className="title">Infrastructure</h2>
              <h6 className="sub-title">From overview to deep details, fast</h6>
              <a href="./#" className="link">
                LEARN MORE <i className="fa-solid fa-chevron-right"></i>
              </a>
            </article>
            <ul className="infr-list">
              {InfrastuctureList.map((item) => (
                <li className="infr-item fw-semibold" key={item.id}>{item.title}</li>
              ))}
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
