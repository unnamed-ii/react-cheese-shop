import React from 'react';
import {CalculatorData} from "./constants";
import {CalculatorInstructionStep} from "./calculator-question";

const CalculatorResult = () => {
    return (
        <div className="calculator__box-result">
            <div className="calculator__box-result__title">
                Результат
            </div>
            <div className="calculator__box-result__text">
                Для переработки <span>2</span> литров молока вам потребуется&nbsp;<span>1/1</span> часть пакета
                закваски или <span>1</span> грамм (0,5
                грамм на каждый литр молока)
            </div>
            <div className="calculator__box-result__instructions">
                <div className="title">
                    Нужна помощь с расчетами?
                </div>
                {CalculatorData.questions.map(i =>
                    <CalculatorInstructionStep text={i.text}/>
                )}
            </div>
        </div>
    );
};

export default CalculatorResult;