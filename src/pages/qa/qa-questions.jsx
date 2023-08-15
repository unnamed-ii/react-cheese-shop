import React from 'react';
import {qaData} from "./constants";

const QaQuestions = () => {
    return (
        <div className="qa__questions">
            {qaData.map((qa, idx) =>
                <div className="qa__questions-question" key={qa.id}>
                    0{idx + 1}. {qa.question}
                </div>
            )}
        </div>
    );
};

export default QaQuestions;