import React from 'react';
import './style.scss'
import {Link} from "react-router-dom";
import SelectedProductCard from '../basket/selected-product-card';

const Basket = ({isActive}) => {
    return (
        <div className={"basket " + (isActive && "active")}>
            <div className="basket__title">
                корзина (5)
                <div className="fragment" />
            </div>
            <div className="basket__items">
                <SelectedProductCard />
                <SelectedProductCard />
            </div>
            <div className="basket__total">
                <div className="basket__total-amount">
                    Товаров в корзине: <span>5шт</span>
                </div>
                <div className="basket__total-price">
                    Общая стоимость: <span>1680 руб.</span>
                </div>
            </div>
            <div className="basket__btn">
                <Link to="/checkout">Оформить заказ</Link>
            </div>
        </div>
    );
};

export default Basket;