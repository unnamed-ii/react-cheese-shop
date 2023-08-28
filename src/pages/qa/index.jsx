import React from 'react';
import './style.scss'
import Wrapper from "../../components/wrapper";
import MainNav from "../../components/main-nav";
import QaQuestions from "./qa-questions";
import QaAnswers from "./qa-answers";
import Title from "../../components/title";

const QA = () => {
    return (
        <Wrapper>
            <div className="qa">
                <div className="qa__inner">
                    <MainNav/>
                    <div className="qa__inner-content">
                        <Title
                            title={"Вопросы и ответы"}
                            className={"page"}
                        />
                        <QaQuestions />
                        <QaAnswers />
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default QA;