import React from "react";
import Popup from "reactjs-popup";

const CustomPopup = ({ isOpen, onClose, children }) => {
  return (
    <Popup open={isOpen} closeOnDocumentClick onClose={onClose}>
      <div
        className={`text-center ${`popup-overlay ${isOpen ? "active" : ""}`}`}
      >
        <div
          className={` ${isOpen ? "popup-content fadeIn" : "popup-content "}`}
        >
          {children}
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </Popup>
  );
};

export default CustomPopup;
