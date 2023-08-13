import React from 'react';
import {CalculatorData} from "./constants";
import {CalculatorInstructionStep} from "./calculator-question";

const CalculatorResult = ({isCalculated, usingMilkVolume, fermentAmountPerMilkLiter, totalNecessaryFermentAmount}) => {
    return (
        <div className="calculator__box-result">
            <div className="calculator__box-result__title">
                Результат
            </div>
            {isCalculated
                ?
                <div className="calculator__box-result__text">
                    Для переработки <span>{usingMilkVolume}</span> литров молока вам
                    потребуется <span>{totalNecessaryFermentAmount}</span> грамм(ов)
                    <br/>
                    ({fermentAmountPerMilkLiter} грамм на каждый литр молока)
                </div>
                :
                <div className="calculator__box-result__text">
                    Здесь будет результат вычислений...
                </div>
            }
            <div className="calculator__box-result__instructions">
                <div className="title">
                    Нужна помощь с расчетами?
                </div>
                {CalculatorData.questions.map((step, idx) =>
                    <CalculatorInstructionStep
                        key={idx + step.text}
                        text={step.text}
                    />
                )}
            </div>
        </div>
    );
};

export default CalculatorResult;