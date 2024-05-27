import { useState } from "react";
import Banner from "./components/Banner/Banner";
import Hero from "./components/Hero/Hero";
import Infrastructure from "./components/Infrastructure/Infrastructure";
import LearnMore from "./components/LearnMore/LearnMore";
import Row from "./components/Row/Row";
import VideoModal from "./components/Modal/VideoModal";

function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Hero handleShow={handleShow} />
      <Banner />
      <div className="main-container">
        <Infrastructure />
        <Row />
        <LearnMore />
      </div>
      <VideoModal show={show} handleClose={handleClose} />
    </>
  );
}

export default App;
