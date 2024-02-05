import React, { useState } from "react";
import "./Modal.css"; // Import your CSS file for styling
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Modal = ({ isOpen, onClose, children }) => {
  const handleClose = () => {
    onClose && onClose();
  };

  return (
    <>
      {isOpen && (
        <div className="overlay" onClick={handleClose}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="closeButton" onClick={handleClose}>
              <FontAwesomeIcon
                icon="fa-regular fa-circle-xmark"
                className="cursor-pointer"
              />
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  );
};
