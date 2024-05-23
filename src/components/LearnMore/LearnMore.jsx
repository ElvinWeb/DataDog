import "./LearnMore.css";

const LearnMore = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="learn-more-bg lm-py">
          <div className="container">
            <div
              className="learn-more-content d-flex"
              style={{ color: "#fff" }}
            >
              <h2 className="content-title">
                Want to learn more about Datadog?
              </h2>
              <p className="content-desc">
                Datadog hosts events both online and in-person. See all that
                Datadog has to offer visiting our Events & Webinars hub.
              </p>
              <div className="content-btn">
                <a href="./#" className="btn-more btn-ui">
                  LEARN MORE
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnMore;
