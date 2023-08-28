import React from 'react';
import "./style.scss";

const Button = ({className, text, onClick, disabled = false, ...props}) => {
    return (
        <button className={`custom-button ${className}`} onClick={onClick} disabled={disabled} {...props}>
            {text}
        </button>
    );
};

export default Button;