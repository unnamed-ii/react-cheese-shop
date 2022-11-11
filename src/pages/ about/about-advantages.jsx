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
                {AboutData.advantages.map(i =>
                    <Advantage
                        icon={i.icon}
                        text={"Вы покупаете всё в одном месте или оставить запрос и мы превезем под заказ"}
                    />
                )}
            </div>
        </div>
    );
};

export default AboutAdvantages;