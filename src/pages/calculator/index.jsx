import React, {useState} from 'react';
import './style.scss'
import Wrapper from "../../components/wrapper";
import MainNav from "../../components/main-nav";
import CalculatorCalculation from "./calculator-calculation";
import CalculatorResult from "./calculator-result";
import PageTitle from "../../components/page-title";

const Calculator = () => {
    const [isCalculated, setIsCalculated] = useState(false);
    const [calculatorInputsForm, setCalculatorInputsForm] = useState({
        estimatedMilkVolume: 0,
        usingMilkVolume: 0,
        fermentPackageWeight: 0,
        fermentAmountPerMilkLiter: 0,
        totalNecessaryFermentAmount: 0
    });
    const onCalculatorInputChange = (e) => {
        setCalculatorInputsForm(p => ({
            ...p,
            [e.target.name]: e.target.value
        }));
    };
    const onCalculatorSubmit = (e) => {
        e.preventDefault();
        if (calculatorInputsForm.usingMilkVolume > calculatorInputsForm.estimatedMilkVolume) {
            alert("Важно! Слишком много молока. Объём молока, который вы используете должен быть меньше объёма, на который рассичтан пакет закваски");
            return;
        }
        const temporaryFermentPerMilkLiter = calculatorInputsForm.fermentPackageWeight / calculatorInputsForm.estimatedMilkVolume
        const temporaryTotalFerment = temporaryFermentPerMilkLiter * calculatorInputsForm.usingMilkVolume
        setCalculatorInputsForm(p => ({
            ...p,
            fermentAmountPerMilkLiter: temporaryFermentPerMilkLiter,
            totalNecessaryFermentAmount: temporaryTotalFerment
        }));
        setIsCalculated(true);
    };

    return (
        <Wrapper>
            <div className="calculator">
                <div className="calculator__inner">
                    <MainNav/>
                    <div className="calculator__inner-content">
                        <PageTitle title={"Калькулятор сыродела"}/>
                        <div className="calculator__box">
                            <CalculatorCalculation
                                onCalculatorSubmit={onCalculatorSubmit}
                                onCalculatorInputChange={onCalculatorInputChange}
                                calculatorInputsForm={calculatorInputsForm}
                                setCalculatorInputsForm={setCalculatorInputsForm}
                            />
                            <CalculatorResult
                                isCalculated={isCalculated}
                                usingMilkVolume={calculatorInputsForm.usingMilkVolume}
                                fermentAmountPerMilkLiter={calculatorInputsForm.fermentAmountPerMilkLiter}
                                totalNecessaryFermentAmount={calculatorInputsForm.totalNecessaryFermentAmount}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default Calculator;