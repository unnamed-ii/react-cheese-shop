import React from 'react';
import {qaData} from "./constants";

const QaQuestions = () => {
    return (
        <div className="qa__questions">
            {qaData.map((question, idx) =>
                <div className="qa__questions-question" key={Math.floor(Math.random() * 100000)}>
                    0{idx + 1}. {question.question}
                </div>
            )}
        </div>
    );
};

export default QaQuestions;