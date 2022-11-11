import React from 'react';
import './style.scss'
import Wrapper from "../../components/wrapper";
import MainNav from "../../components/main-nav";
import CalculatorCalculation from "./calculator-calculation";
import CalculatorResult from "./calculator-result";

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
                            <CalculatorCalculation />
                            <CalculatorResult />
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default Calculator;