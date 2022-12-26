import React from 'react';
import './style.scss';

const ModalWrapper = ({children, toggleModal}) => {
    return (
        <div className="modal-wrapper" onClick={toggleModal}>
            {children}
        </div>
    );
};

export default ModalWrapper;