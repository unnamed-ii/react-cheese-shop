import React from 'react';
import './style.scss'

import card from '../../images/card.png'

const Card = () => {
    return (
        <div className="card">
            <img className="card__image" src={card} alt="" />
            <div className="card__description">
                Мезофильная закваска Danisco CHOOZIT MM...
            </div>
            <div className="horizontal" />
            <div className="card__bottom">
                <div className="card__price">
                    1300₽/<span> 1 шт.</span>
                    <div className="discount">1800₽</div>
                </div>
                <button className="card__select-btn">
                    Добавить
                </button>
            </div>

        </div>
    );
};

export default Card;