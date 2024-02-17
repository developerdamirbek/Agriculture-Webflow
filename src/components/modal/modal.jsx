import React from 'react';

const Modal = ({ isOpen, onClose }) => {
  return (
    <div className={`hidden fixed top-4 ${isOpen ? 'block' : 'hidden'}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <p>Product added to cart!</p>
      </div>
    </div>
  );
};

export default Modal;
