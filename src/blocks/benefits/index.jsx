import React from 'react';
import './style.scss';
import {BenefitCard} from "./benefit-card";
import {BenefitsData} from "./constants";
import backgroundImage from '../../images/benefits/bg.png';

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
                    <div className="benefits__info-title">
                        Наши преимущества
                    </div>
                    <div className="benefits__info-text">
                        Мы лично отвечаем за качество товара и всегда
                        с радостью поможем Вам с выбором
                    </div>
                </div>
                <div className="benefits__list">
                    {BenefitsData.map(benefit =>
                        <BenefitCard
                            typeOfBenefit={benefit.typeOfBenefit}
                            icon={benefit.icon}
                            text={benefit.text}
                            key={Math.random() * 100000}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Benefits;