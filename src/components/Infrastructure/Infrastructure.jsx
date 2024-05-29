import "./Infrastructure.css";
import InfrastructureVideoContainer from "./İnfrastructureVideoContainer";
import InfrastructureContent from "./InfrastructureContent";

const Infrastructure = () => {
  return (
    <div className="infrastructure">
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <InfrastructureVideoContainer />
          <InfrastructureContent />
        </div>
      </div>
    </div>
  );
};

export default Infrastructure;
