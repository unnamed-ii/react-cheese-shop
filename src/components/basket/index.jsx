import React from 'react';
import './style.scss'
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import BasketProductCard from './basket-product-card';
import {ReactComponent as BasketIcon} from "../../images/basket.svg";

const Basket = () => {
    const sumOfProducts = useSelector((state) => state.basket.sum);
    const selectedProducts = useSelector((state) => state.basket.products);

    return (
        <div className="header__info-basket">
            <div className="header__info-basket__price">
                Ваша корзина
                <span>{sumOfProducts} руб.</span>
            </div>
            <div className="basket-image">
                <BasketIcon className="basket-icon" />
                <div className='basket-image__circle'>{selectedProducts.length}</div>
                <div className="basket">
                    <div className="basket__title">
                        корзина ({selectedProducts.length})
                        <div className="fragment" />
                    </div>
                    <div className="basket__items">
                        {selectedProducts.map((i, idx) => (
                            <BasketProductCard
                                key={i.title+idx}
                                id={i.id}
                                title={i.title}
                                price={i.price}
                                amount={i.amount}
                                image={i.image}
                            />
                        ))}
                    </div>
                    <div className="basket__total">
                        <div className="basket__total-amount">
                            Товаров в корзине: <span>{selectedProducts.length}шт</span>
                        </div>
                        <div className="basket__total-price">
                            Общая стоимость: <span>{sumOfProducts} руб.</span>
                        </div>
                    </div>
                    <div className="basket__btn">
                        <Link to="/checkout">Оформить заказ</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Basket;