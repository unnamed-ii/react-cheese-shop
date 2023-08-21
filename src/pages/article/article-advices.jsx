import React from 'react';
import {ArticleData} from "./constants";
import InstructionStep from "../../components/instruction-step";

const ArticleAdvices = ({advices}) => {
    return (
        <div className="article__inner-content__advices">
            <div className="title">
                Советы по подбору вин и сыров
            </div>
            <div className="box">
                {advices?.map((advice, idx) =>
                    <InstructionStep
                        key={idx}
                        text={advice}
                        number={'0' + (idx + 1)}
                    />
                )}
            </div>
        </div>
    );
};

export default ArticleAdvices;