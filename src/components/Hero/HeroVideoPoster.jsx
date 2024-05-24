import React from "react";

const HeroVideoPoster = () => {
  return (
    <div className="hero-video video-poster">
      <video
        playsInline
        autoPlay
        muted
        loop
        className="video-bg"
        poster="https://imgix.datadoghq.com/img/dd_homepage_3_comp_thumbnail.png?w=1700&h=956&fit=crop&q=40&fm=png&auto=format"
      >
        <source src="https://imgix.datadoghq.com/video/dd_homepage_3_comp.mp4?fm=mp4&auto=format&fit=max" />
      </video>
    </div>
  );
};

export default HeroVideoPoster;
