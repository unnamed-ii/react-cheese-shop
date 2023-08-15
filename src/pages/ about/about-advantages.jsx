import React from 'react';
import './style.scss';
import {AboutData} from "./constants";
import Advantage from "../../components/advantage-card";

const AboutAdvantages = () => {
    return (
        <div className="about__inner-content__advantages">
            <div className="title">
                Преимущества работы с нашим магазином
            </div>
            <div className="advantages">
                {AboutData.advantages.map(advantage =>
                    <Advantage
                        key={advantage.id}
                        icon={advantage.icon}
                        text={advantage.text}
                    />
                )}
            </div>
        </div>
    );
};

export default AboutAdvantages;