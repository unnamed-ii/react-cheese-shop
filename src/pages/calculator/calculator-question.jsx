import React from 'react';
import {ReactComponent as QuestionMarkIcon} from "../../images/icons/question-mark.svg";

export const CalculatorInstructionStep = ({text}) => {
    return (
        <div className="line">
            <QuestionMarkIcon class="question-mark"/>
            <div className="line__text">
                {text}
            </div>
        </div>
    );
};