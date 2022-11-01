import React, {useState} from 'react';
import './style.scss'
import {Link} from "react-router-dom";
import SelectedProductCard from '../basket/selected-product-card';
import {selectedProductsData} from "./constants";

const Basket = ({isActive}) => {
    const [selectedProducts, setSelectedProducts] = useState(selectedProductsData);

    const calculateSumOfProducts = () => {
        let sum = 0;
        for (let i = 0; i < selectedProducts.length; i++){
            sum += +selectedProducts[i].price
        }
        return sum
    }

    return (
        <div className={"basket " + (isActive && "active")}>
            <div className="basket__title">
                корзина ({selectedProducts.length})
                <div className="fragment" />
            </div>
            <div className="basket__items">
                {selectedProducts.map(i => (
                    <SelectedProductCard title={i.title} price={i.price}/>
                ))}
            </div>
            <div className="basket__total">
                <div className="basket__total-amount">
                    Товаров в корзине: <span>{selectedProducts.length}шт</span>
                </div>
                <div className="basket__total-price">
                    Общая стоимость: <span>{calculateSumOfProducts()} руб.</span>
                </div>
            </div>
            <div className="basket__btn">
                <Link to="/checkout">Оформить заказ</Link>
            </div>
        </div>
    );
};

export default Basket;