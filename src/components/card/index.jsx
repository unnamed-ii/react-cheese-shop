import React from 'react';
import './style.scss'
import card from '../../images/card.png'

const Card = ({description = 'Мезофильная закваска Danisco CHOOZIT MM...', price = '1300₽', discountPrice = '1800₽'}) => {
    return (
        <div className="card">
            <img className="card__image" src={card} alt=""/>
            <div className="card__description">
                {description}
            </div>
            <div className="horizontal"/>
            <div className="card__bottom">
                <div className="card__price">
                    {price}/<span> 1 шт.</span>
                    <div className="discount">{discountPrice}</div>
                </div>
                <button className="card__select-btn">
                    Добавить
                </button>
            </div>

        </div>
    );
};

export default Card;