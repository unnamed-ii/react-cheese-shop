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
                {ArticleData.map((i, idx) =>
                    <InstructionStep
                        key={Math.floor(Math.random() * 100000)}
                        number={'0' + (idx + 1)}
                        text={i.text}
                    />
                )}
            </div>
        </div>
    );
};

export default ArticleAdvices;