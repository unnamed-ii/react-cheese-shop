import React from 'react';
import './style.scss'
import Wrapper from "../../components/wrapper";
import MainNav from "../../components/main-nav";
import {CalculatorInput} from "./calculator-input";
import {CalculatorInstructionStep} from "./calculator-question";
import {CalculatorData} from "./constants";

const Calculator = () => {
    return (
        <Wrapper>
            <div className="calculator">
                <div className="calculator__inner">
                    <MainNav />
                    <div className="calculator__inner-content">
                        <div className="calculator__title">
                            Калькулятор сыродела
                        </div>
                        <div className="calculator__box">
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
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default Calculator;