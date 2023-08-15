import React from 'react';
import './style.scss'
import Wrapper from "../../components/wrapper";
import {RecommendationCard} from "./recommedation-card";
import {RecommendationItemsData} from "./constants";

const Recommendations = () => {
    return (
        <Wrapper>
            <div className="recommendations">
                {RecommendationItemsData.map(recommendation =>
                    <RecommendationCard
                        key={recommendation.id}
                        title={recommendation.title}
                        subtitle={recommendation.subtitle}
                        text={recommendation.text}
                        bgImage={recommendation.backgroundImage}
                        isActive={recommendation.isActive}
                    />
                )}
            </div>
        </Wrapper>
    );
};

export default Recommendations;