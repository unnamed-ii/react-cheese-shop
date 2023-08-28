import React from 'react';
import './style.scss';
import {BenefitCard} from "./benefit-card";
import {BenefitsData} from "./constants";
import backgroundImage from '../../images/benefits/bg.png';
import Title from "../../components/title";

const Benefits = () => {
    return (
        <div className="benefits-wrapper" style={{
            backgroundImage:`url(${backgroundImage})`,
            backgroundRepeat:"no-repeat",
            backgroundSize:"contain",
            backgroundPosition: 'center',
        }}>
            <div className="benefits">
                <div className="benefits__info">
                    <Title
                        title={"Наши преимущества"}
                        className={"home-page__benefits-block"}
                    />
                    <div className="benefits__info-text">
                        Мы лично отвечаем за качество товара и всегда
                        с радостью поможем Вам с выбором
                    </div>
                </div>
                <div className="benefits__list">
                    {BenefitsData.map(benefit =>
                        <BenefitCard
                            key={benefit.id}
                            typeOfBenefit={benefit.typeOfBenefit}
                            icon={benefit.icon}
                            text={benefit.text}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Benefits;