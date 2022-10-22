import React from 'react';
import './style.scss'

const InstructionStep = ({number, text}) => {
    return (
        <div className="advice-card">
            <div className="advice-card__number">
                {number}
            </div>
            <div className="advice-card__text">
                {text}
            </div>
        </div>
    );
};

export default InstructionStep;