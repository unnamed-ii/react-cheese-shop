import React from 'react';
import './style.scss';

const ModalWrapper = ({children, isModalOpened}) => {
    return (
        <div className={"modal-wrapper " + (isModalOpened ? "active" : "")}>
            {children}
        </div>
    );
};

export default ModalWrapper;