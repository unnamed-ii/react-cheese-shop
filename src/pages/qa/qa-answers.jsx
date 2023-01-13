import React from 'react';
import {qaData} from "./constants";

const QaAnswers = () => {
    return (
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
    );
};

export default QaAnswers;