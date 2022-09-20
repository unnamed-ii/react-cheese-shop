import React from 'react';
import './style.scss'

import master from '../../images/about/master.png';

const MasterCard = () => {
    return (
        <div className="master">
            <img src={master} alt=""/>
            <div className="master__info">
                <div className="master__info-title">
                    Алексей
                </div>
                <div className="master__info-subtitle">
                    «Cыроварня Ильиных»
                </div>
                <div className="master__info-text">
                    Мне нравится, что в любой момент я могупозвонить своему менеджеру и получить пол-ноценную профессиональную консультацию.
                </div>
            </div>
        </div>
    );
};

export default MasterCard;