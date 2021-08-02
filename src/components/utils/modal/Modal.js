import React from "react";
import './index.scss'

function Modal ({text, onConfirm, onReject}) {

  return (
    <div className="modal">
      <div className="modal__content">
        <h3 className="modal__title">{text}</h3>
        <div className="modal__btns">
          <button className="modal__btn modal__btn--confirm" onClick={onConfirm}>Confirm</button>
          <button name="btn-close" className="modal__btn modal__btn--close" onClick={onReject}>Close</button>
        </div>
      </div>
    </div>
  )
}

export default Modal