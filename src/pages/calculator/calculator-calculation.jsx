import React from 'react';
import {CalculatorData} from "./constants";
import {CalculatorInput} from "./calculator-input";

const CalculatorCalculation = () => {
    return (
        <div className="calculator__box-calculations">
            <div className="calculator__box-calculations__title">
                Расчет количества закваски
            </div>
            <div className="calculator__box-calculations__inputs">
                {CalculatorData.inputs.map(i =>
                    <CalculatorInput text={i.text}/>
                )}
            </div>
            <div className="calculator__box-calculations__btn">
                Рассчитать
            </div>
        </div>
    );
};

export default CalculatorCalculation;