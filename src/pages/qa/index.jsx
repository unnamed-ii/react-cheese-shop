import React from 'react';
import './style.scss'
import Wrapper from "../../components/wrapper";
import MainNav from "../../components/main-nav";
import {qaData} from "./constants";

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
                        <div className="qa__questions">
                            {qaData.map((question, idx) =>
                                <div className="qa__questions-question" key={Math.floor(Math.random() * 100000)}>
                                    0{idx + 1}. {question.question}
                                </div>
                            )}
                        </div>
                        <div className="qa__answers">
                            {qaData.map((answer, idx) =>
                                <div className="qa__answers-answer" key={Math.floor(Math.random() * 100000)}>
                                    <div className="qa__answers-answer__title">
                                        0{idx + 1}. {answer.question}
                                    </div>
                                    <div className="qa__answers-answer__text">
                                        {answer.answer}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default QA;