import React from 'react';
import "./style.scss";

const Button = ({className, text, onClick, disabled = false}) => {
    return (
        <button className={`button ${className}`} onClick={onClick} disabled={disabled}>
            {text}
        </button>
    );
};

export default Button;