import React from "react";

function Modal ({setShowModal}) {
  return (
    <div className="modal">
      <div className="modal__content">
        <h2 className="modal__title">Modal window</h2>
        <button className="modal__close" onClick={setShowModal.bind(null, false)}>Close</button>
      </div>
    </div>
  )
}

export default Modal