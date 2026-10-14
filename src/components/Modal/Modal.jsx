import "./Modal.css";
import { useEffect } from "react";

export default function Modal({ isOpen, handleModalClose, children }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = function (event) {
      if (event.key == "Escape") {
        handleModalClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    isOpen && (
      <div className="modal__outer-section">
        <div className="modal__inner-section">
          {children}
          <button
            onClick={handleModalClose}
            className="modal-close"
            aria-label="Close Modal"
          >
            &times;
          </button>
        </div>
      </div>
    )
  );
}
