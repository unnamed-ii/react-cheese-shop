import React from 'react';
import './style.scss'
import master from '../../images/about/master.png';

const MasterCard = ({title = "Алексей", subtitle = "«Cыроварня Ильиных»", text = "Мне нравится, что в любой момент я могупозвонить своему менеджеру и получить пол-ноценную профессиональную консультацию."}) => {
    return (
        <div className="master">
            <img src={master} alt=""/>
            <div className="master__info">
                <div className="master__info-title">
                    {title}
                </div>
                <div className="master__info-subtitle">
                    {subtitle}
                </div>
                <div className="master__info-text">
                    {text}
                </div>
            </div>
        </div>
    );
};

export default MasterCard;