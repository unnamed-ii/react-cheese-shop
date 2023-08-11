import React from 'react';
import './style.scss'
import {useDispatch} from "react-redux";
import {addProductActionCreator} from "../../store/basket";
import card from '../../images/card.png'

const Card = ({
                  title = 'Мезофильная закваска Danisco CHOOZIT MM...',
                  discountPrice = 1300,
                  normalPrice = 1800,
                  id,
                  amount }) => {
    const dispatch = useDispatch();
    const addProduct = () => dispatch(addProductActionCreator({title, price: discountPrice, id, amount: 1}))

    return (
        <div className="card">
            <img className="card__image" src={card} alt=""/>
            <div className="card__description">
                {title}
            </div>
            <div className="horizontal"/>
            <div className="card__bottom">
                <div className="card__price">
                    {discountPrice}₽/<span> 1 шт.</span>
                    <div className="discount">{normalPrice}₽</div>
                </div>
                <button className="card__select-btn" onClick={addProduct}>
                    Добавить
                </button>
            </div>

        </div>
    );
};

export default Card;