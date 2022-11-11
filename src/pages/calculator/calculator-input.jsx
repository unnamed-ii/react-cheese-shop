import React from 'react';

export const CalculatorInput = ({text}) => {
    return (
        <div className="calculator__box-calculations__input">
            <div className="title">
                {text}
            </div>
            <input type="number"/>
        </div>
    );
};