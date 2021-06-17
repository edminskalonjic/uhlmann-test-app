import React from 'react';

import './Modal.css';

interface IModal {
  onCloseButtonClick: () => void;
  modalMessage: string;
}

const Modal: React.FC<IModal> = props => {
  const { onCloseButtonClick, modalMessage } = props;
  return (
    <div className="modal">
      <div className="modal__dialog">
        <p>{modalMessage}</p>
        <button onClick={onCloseButtonClick} className="modal__button">
          Close window
        </button>
      </div>
    </div>
  );
};

export default Modal;
