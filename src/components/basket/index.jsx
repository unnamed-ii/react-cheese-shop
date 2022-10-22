import React from 'react';
import './style.scss'

import item1 from '../../images/basket/item-1.png';
import item2 from '../../images/basket/item-2.png';
import {ReactComponent as RemoveBtnIcon} from '../../images/icons/close-btn.svg';
import {ReactComponent as MinusIcon} from '../../images/icons/minus.svg';
import {ReactComponent as PlusIcon} from '../../images/icons/plus.svg';
import {Link} from "react-router-dom";
import Counter from "../counter";

const Basket = ({isActive}) => {
    return (
        <div className={"basket " + (isActive && "active")}>
            <div className="basket__title">
                корзина (5)
                <div className="fragment" />
            </div>
            <div className="basket__items">
                <div className="basket__items-item">
                    <img className="basket__items-item__image" src={item1} alt=""/>
                    <div className="basket__items-item__box">
                        <div className="basket__box-title">
                            Форма для твердого сыра 1 кг - 40 отверстий
                        </div>
                        <Counter />
                    </div>
                    <RemoveBtnIcon className="basket__items-item__remove"/>
                    <div className="basket__items-item__price">
                        440 руб.
                    </div>
                </div>
                <div className="basket__items-item">
                    <img className="basket__items-item__image" src={item2} alt=""/>
                    <div className="basket__items-item__box">
                        <div className="basket__box-title">
                            Форма для твердого сыра 1 кг - 40 отверстий
                        </div>
                        <Counter />
                    </div>
                    <RemoveBtnIcon className="basket__items-item__remove"/>
                    <div className="basket__items-item__price">
                        440 руб.
                    </div>
                </div>
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