import React from 'react';

export const CalculatorInput = ({text, value, onCalculatorInputChange, name}) => {
    return (
        <div className="calculator__box-calculations__input">
            <div className="title">
                {text}
            </div>
            <input
                type="number"
                value={value}
                onChange={onCalculatorInputChange}
                name={name}
            />
        </div>
    );
};