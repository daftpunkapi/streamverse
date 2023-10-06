import React from "react";
import "./CardPopup.css";

const iframeStyle = {
  background: "transparent",
  border: "1px solid #ccc",
};

const CardPopup = ({ title, iframeSrc, onClose }) => {
  return (
    <div className="card-popup">
      <div className="card-popup-content">
        <span className="card-popup-close" onClick={onClose}>
          &times;
        </span>
        <div className="card-popup-heading">{title}</div>
        <iframe
          title={title}
          src={iframeSrc}
          frameborder="0"
          onmousewheel=""
          width="100%"
          height="533"
          style={iframeStyle}
        ></iframe>
      </div>
    </div>
  );
};

export default CardPopup;
