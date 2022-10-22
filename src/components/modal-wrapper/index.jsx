import React from 'react';
import './style.scss';

const ModalWrapper = ({children}) => {
    return (
        <div className="modal-wrapper">
            {children}
        </div>
    );
};

export default ModalWrapper;