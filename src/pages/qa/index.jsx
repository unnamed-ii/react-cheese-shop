import React from 'react';
import './style.scss'
import Wrapper from "../../components/wrapper";
import MainNav from "../../components/main-nav";
import QaQuestions from "./qa-questions";
import QaAnswers from "./qa-answers";

const QA = () => {
    return (
        <Wrapper>
            <div className="qa">
                <div className="qa__inner">
                    <MainNav/>
                    <div className="qa__inner-content">
                        <div className="qa__title">
                            Вопросы и ответы
                        </div>
                        <QaQuestions />
                        <QaAnswers />
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default QA;