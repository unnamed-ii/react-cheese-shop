import React from 'react';

export const CalculatorInput = ({title}) => {
    return (
        <div className="calculator__box-calculations__input">
            <div className="title">
                На какой объем рассчитан весь пакет?
            </div>
            <input type="number"/>
        </div>
    );
};