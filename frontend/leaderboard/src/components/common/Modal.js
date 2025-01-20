import React from "react";

const Modal = ({ isOpen, onClose, title, children }) => {

  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-text-100 bg-opacity-50 flex items-center justify-center">
      <div className="bg-bg-100 p-6 rounded-lg shadow-xl w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">{title}</h2>
          <button
            onClick={onClose}
            className="text-text-200 hover:text-text-100"
          >
            ×
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
