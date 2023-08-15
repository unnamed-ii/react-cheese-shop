import React from 'react';
import {ArticleData} from "./constants";
import InstructionStep from "../../components/instruction-step";

const ArticleAdvices = () => {
    return (
        <div className="article__inner-content__advices">
            <div className="title">
                Советы по подбору вин и сыров
            </div>
            <div className="box">
                {ArticleData.map((step, idx) =>
                    <InstructionStep
                        key={step.id}
                        number={'0' + (idx + 1)}
                        text={step.text}
                    />
                )}
            </div>
        </div>
    );
};

export default ArticleAdvices;