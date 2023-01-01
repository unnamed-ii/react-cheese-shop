import React, {useState} from 'react';
import './style.scss'
import {Link} from "react-router-dom";
import {SelectedProductsData} from "./constants";
import {DroppingItems} from "../../blocks/header/constants";
import BasketProductCard from './basket-product-card';
import {ReactComponent as BasketIcon} from "../../images/basket.svg";

const Basket = ({isActive, toggleDroppingItem}) => {
    const [selectedProducts, setSelectedProducts] = useState(SelectedProductsData);

    const calculateSumOfProducts = () => {
        let sum = 0;
        for (let i = 0; i < selectedProducts.length; i++){
            sum += +selectedProducts[i].price
        }
        return sum
    }

    return (
        <div className="header__info-basket">
            <div className="header__info-basket__price">
                Ваша корзина
                <span>{calculateSumOfProducts()} руб.</span>
            </div>
            <div className="basket-image">
                <BasketIcon onClick={() => toggleDroppingItem(DroppingItems.basket)} className="svg"/>
                <div className='basket-image__circle'>{selectedProducts.length}</div>
                <div className={"basket " + (isActive && "active")}>
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
                                setSelectedProducts={setSelectedProducts}
                                selectedProducts={selectedProducts}
                            />
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
            </div>
        </div>
    );
};

export default Basket;