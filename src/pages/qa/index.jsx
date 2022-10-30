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
                            {qaData.map((i, idx) =>
                                <div className="qa__questions-question">
                                    0{idx + 1}. {i.question}
                                </div>
                            )}
                        </div>
                        <div className="qa__answers">
                            {qaData.map((i, idx) =>
                                <div className="qa__answers-answer">
                                    <div className="qa__answers-answer__title">
                                        0{idx + 1}. {i.question}
                                    </div>
                                    <div className="qa__answers-answer__text">
                                        {i.answer}
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