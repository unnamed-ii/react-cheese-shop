import React from 'react';
import {CalculatorInput} from "./calculator-input";
import Button from "../../components/button";

const CalculatorCalculation = ({onCalculatorSubmit, onCalculatorInputChange, calculatorInputsForm}) => {
    return (
        <form className="calculator__box-calculations" onSubmit={onCalculatorSubmit}>
            <div className="calculator__box-calculations__title">
                Расчет количества закваски
            </div>
            <div className="calculator__box-calculations__inputs">
                <CalculatorInput
                    text={"На какой объем рассчитан весь пакет?"}
                    onCalculatorInputChange={onCalculatorInputChange}
                    value={calculatorInputsForm.estimatedMilkVolume}
                    name={"estimatedMilkVolume"}
                />
                <CalculatorInput
                    text={"Какой объем молока вы используете?"}
                    onCalculatorInputChange={onCalculatorInputChange}
                    value={calculatorInputsForm.usingMilkVolume}
                    name={"usingMilkVolume"}
                />
                <CalculatorInput
                    text={"Сколько весит вся закваска в пакете?"}
                    onCalculatorInputChange={onCalculatorInputChange}
                    value={calculatorInputsForm.fermentPackageWeight}
                    name={"fermentPackageWeight"}
                />
            </div>
            <Button
                text={"Рассчитать"}
                className={"calculator-page"}
            />
        </form>
    );
};

export default CalculatorCalculation;