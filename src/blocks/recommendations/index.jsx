import React, {useState} from 'react';
import './style.scss'
import Wrapper from "../../components/wrapper";
import {RecommendationCard} from "./recommedation-card";
import {RecommendationItemsData} from "./constants";

const Recommendations = () => {
    const [activeBlockId, setActiveBlockId] = useState(1);

    return (
        <Wrapper>
            <div className="recommendations">
                {RecommendationItemsData.map(recommendation =>
                    <RecommendationCard
                        key={recommendation.id}
                        id={recommendation.id}
                        title={recommendation.title}
                        subtitle={recommendation.subtitle}
                        text={recommendation.text}
                        bgImage={recommendation.backgroundImage}
                        activeBlockId={activeBlockId}
                        setActiveBlockId={setActiveBlockId}
                    />
                )}
            </div>
        </Wrapper>
    );
};

export default Recommendations;