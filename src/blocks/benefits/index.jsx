import React from 'react';
import './style.scss';

import {ReactComponent as Award} from "../../images/benefits/award.svg";
import {ReactComponent as Clock} from "../../images/benefits/clock.svg";
import {ReactComponent as Percent} from "../../images/benefits/percent.svg";
import {ReactComponent as Dollar} from "../../images/benefits/dollar-sign.svg";
import {ReactComponent as Approved} from "../../images/benefits/approved.svg";
import message from '../../images/benefits/message.png';
import bgImage from '../../images/benefits/bg.png';

const Benefits = () => {
    return (
        <div className="benefits-wrapper" style={{
            backgroundImage:`url(${bgImage})`,
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
                    <div className="benefits__list-benefit clock">
                        <div className="plus">
                            <div className="plus__inner">
                                +
                            </div>
                        </div>
                        <div className="box">
                            <img src={message} alt="" className="message-image"/>
                            <Clock className="icon"/>
                            <div className="text">
                                Прием заказов&nbsp;круглостуточно
                            </div>
                        </div>
                    </div>
                    <div className="benefits__list-benefit quality">
                        <div className="plus">
                            <div className="plus__inner">
                                +
                            </div>
                        </div>
                        <div className="box">
                            <img src={message} alt="" className="message-image"/>
                            <Award className="icon"/>
                            <div className="text">
                                Наивысшее качество продукции
                            </div>
                        </div>
                    </div>
                    <div className="benefits__list-benefit discounts">
                        <div className="plus">
                            <div className="plus__inner">
                                +
                            </div>
                        </div>
                        <div className="box">
                            <img src={message} alt="" className="message-image"/>
                            <Percent className="icon"/>
                            <div className="text">
                                Выгодные скидки при оплате
                            </div>
                        </div>
                    </div>
                    <div className="benefits__list-benefit prices">
                        <div className="plus">
                            <div className="plus__inner">
                                +
                            </div>
                        </div>
                        <div className="box">
                            <img src={message} alt="" className="message-image"/>
                            <Dollar className="icon"/>
                            <div className="text">
                                Выгодные цены&nbsp;и&nbsp;условия
                            </div>
                        </div>
                    </div>
                    <div className="benefits__list-benefit service">
                        <div className="plus">
                            <div className="plus__inner">
                                +
                            </div>
                        </div>
                        <div className="box">
                            <img src={message} alt="" className="message-image"/>
                            <Approved className="icon"/>
                            <div className="text">
                                Обеспечиваем высокий&nbsp;уровень&nbsp;сервиса
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Benefits;