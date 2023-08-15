import React from 'react';
import {qaData} from "./constants";

const QaAnswers = () => {
    return (
        <div className="qa__answers">
            {qaData.map((qa, idx) =>
                <div className="qa__answers-answer" key={qa.id}>
                    <div className="qa__answers-answer__title">
                        0{idx + 1}. {qa.question}
                    </div>
                    <div className="qa__answers-answer__text">
                        {qa.answer}
                    </div>
                </div>
            )}
        </div>
    );
};

export default QaAnswers;