import React from "react";
import Modal from "react-bootstrap/Modal";
import "./Modal.css";

const VideoModal = ({ show, handleClose }) => {
  return (
    <Modal
      className="modal fade video-tour-modal container-fluid"
      id="video-modal"
      show={show}
      onHide={handleClose}
    >
      <div className="modal-box modal-xl mx-auto">
        <div className="video-box">
          <video
            controls
            poster="https://imgix.datadoghq.com/img/home/datadog-platform-video-tour.png?fm=png&auto=format&lossless=1&q=0"
          >
            <source
              src="https://player.vimeo.com/progressive_redirect/playback/463974151/rendition/1080p/file.mp4?loc=external&signature=2afe34669c97de79ea8c8dced28b4d1addeb383e0103cd6c1fcb4ee8e34320dc"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </Modal>
  );
};

export default VideoModal;
