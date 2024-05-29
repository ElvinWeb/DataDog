import React from "react";

const İnfrastructureVideoContainer = () => {
  return (
    <div className="video-container h-100 col-8 d-flex justify-content-center">
      <img
        src="https://imgix.datadoghq.com/img/serverless/serverless-1-all-your-functions-poster.png?w=750&fit=crop&fm=jpg&auto=format&dpr=1.75&q=40"
        alt="serverless"
        className="img-fluid image-overlay img-top  d-xl-block d-none"
      />
      <div className="infr-video video-poster">
        <video
          playsInline
          autoPlay
          muted
          loop
          className="img-fluid"
          poster="https://imgix.datadoghq.com/img/home-hostmap-static.png?w=750&fit=crop&fm=jpg&auto=format&dpr=1.75&q=40"
        >
          <source src="https://imgix.datadoghq.com/video/Hostmap-compressed.mp4?fm=webm&fit=max" />
        </video>
      </div>
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
  );
};

export default İnfrastructureVideoContainer;
