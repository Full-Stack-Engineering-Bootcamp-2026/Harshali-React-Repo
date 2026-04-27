import React from 'react';
import ReactDOM from 'react-dom';
import '../App.css';

function Modal({ onClose }) {
  return ReactDOM.createPortal(
    <div className="overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>Terms & Conditions</h2>
        <p>Please accept to continue.</p>

        <button className="btn" onClick={onClose}>
          Accept 
        </button>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
}

export default Modal;tables 