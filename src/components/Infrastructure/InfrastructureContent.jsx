import React from "react";
import { InfrastuctureList } from "../../Data/InfrastuctureData";

const InfrastructureContent = () => {
  return (
    <div className="col-lg-4">
      <article className="infr-header d-flex flex-column">
        <h2 className="title">Infrastructure</h2>
        <h6 className="sub-title">From overview to deep details, fast</h6>
        <a href="./#" className="link text-uppercase fw-semibold">
          Learn More <i className="fa-solid fa-chevron-right"></i>
        </a>
      </article>
      <ul className="infr-list">
        {InfrastuctureList.map((item) => (
          <li className="infr-item fw-semibold" key={item.id}>
            {item.title}
          </li>
        ))}
        <a href="./#" className="btn-outline btn-view">
          VIEW ALL FEATURES
        </a>
      </ul>
    </div>
  );
};

export default InfrastructureContent;
