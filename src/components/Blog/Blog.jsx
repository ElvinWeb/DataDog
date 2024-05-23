import "./Blog.css";

const Blog = () => {
  return (
    <div className="blog-relative-row">
      <div className="row blog-container col-12">
        <div className="blog-img col-12 col-lg-6 px-0">
          <img
            src="https://imgix.datadoghq.com/img/blog/state-of-devsecops/state-of-devsecops-2024/hero-final.png?auto=format&ar=1.5:1&fit=crop"
            className="img-fluid"
            alt=""
          />
        </div>
        <div className="blog-text col-12 col-lg-6 d-flex">
          <div className="blog-content col-lg-8" style={{ color: "#fff" }}>
            <p className="text-uppercase small fw-semibold">read our report</p>
            <h2 className="post-title">State of DevSecOps</h2>
            <p className="mt-0">
              We analyzed data from thousands of applications and cloud
              environments to assess trends in application security posture and
              adoption of DevSecOps best practices.
            </p>
            <a href="./#" className="link fw-semibold">
              LEARN MORE <i className="fa-solid fa-chevron-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
