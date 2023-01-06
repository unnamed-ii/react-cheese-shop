import React from 'react';
import './style.scss'
import Wrapper from "../../components/wrapper";
import {RecommendationCard} from "./recommedation-card";
import {RecommendationItemsData} from "./constants";

const Recommendations = () => {
    return (
        <Wrapper>
            <div className="recommendations">
                {RecommendationItemsData.map(i =>
                    <RecommendationCard
                        title={i.title}
                        subtitle={i.subtitle}
                        text={i.text}
                        bgImage={i.backgroundImage}
                        isActive={i.isActive}
                        key={Math.random() * 100000}
                    />
                )}
            </div>
        </Wrapper>
    );
};

export default Recommendations;