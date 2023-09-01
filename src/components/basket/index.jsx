import React from 'react';
import './style.scss'
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import BasketProductCard from './basket-product-card';
import {ReactComponent as BasketIcon} from "../../images/basket.svg";
import Button from "../button";

const Basket = () => {
    const sumOfProducts = useSelector((state) => state.basket.sum || 0);
    const selectedProducts = useSelector((state) => state.basket.products || []);

    return (
        <div className="header__info-basket">
            <div className="header__info-basket__price">
                Ваша корзина
                <span>{sumOfProducts} руб.</span>
            </div>
            <div className="basket-image">
                <BasketIcon className="basket-icon"/>
                <div className='basket-image__circle'>{selectedProducts.length}</div>
                <div className="basket">
                    <div className="basket__title">
                        корзина ({selectedProducts.length})
                        <div className="fragment"/>
                    </div>
                    <div className="basket__items">
                        {selectedProducts.map((product) => (
                            <BasketProductCard
                                key={product.id}
                                id={product.id}
                                title={product.title}
                                price={product.price}
                                amount={product.amount}
                                productImageURL={product.productImageURL}
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
                    <Link to="/checkout">
                        <Button
                            text={"Оформить заказ"}
                            className={"basket-button"}
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Basket;