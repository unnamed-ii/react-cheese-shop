import React from 'react';
import './style.scss';
import {AboutData} from "./constants";
import MasterCard from "../../components/master-card";

const AboutMasters = () => {
    return (
        <div className="about__inner-content__masters">
            <div className="title">
                Наши мастера
            </div>
            <div className="masters">
                {AboutData.masters.map(i =>
                    <MasterCard
                        title={i.title}
                        subtitle={i.subtitle}
                        text={i.text}
                    />
                )}
            </div>
        </div>
    );
};

export default AboutMasters;