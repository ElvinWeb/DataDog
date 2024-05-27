import React from "react";
import Button from "react-bootstrap/Button";

const HeroContent = ({ onShow }) => {
  return (
    <div className="container main-content">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-10">
          <div className="content text-center">
            <h1 className="title">Modern monitoring & security</h1>
            <h3 className="sub-title">
              See inside any stack, any app, at any scale, anywhere.
            </h3>
            <div className="button-group text-center">
              <a href="./#" className="btn-free btn-gradient">
                FREE TRIAL
              </a>
              <Button href="./#" className="btn-show btn-video" onClick={onShow}>
                <div className="d-flex justify-content-center align-items-center">
                  <i className="fa-solid fa-circle-play me-1"></i>
                  SEE THE PLATFORM
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
