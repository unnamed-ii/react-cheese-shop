import React from 'react';
import './style.scss';
import productImage from "../../images/checkout-products-image.png";

const OrdersTab = ({activeTab}) => {

    return (
        <div className={"profile__tabs-item " + (activeTab === "orders" && "active orders")}>
            <div className="title">
                Мои заказы
            </div>
            <div className="subtitle">
                Список ваших прошлых покупок
            </div>
            <div className="table">
                <div className="table__headline">
                    <div className="table__headline-title main">
                        Товар
                    </div>
                    <div className="table__headline-title">
                        Стоимость
                    </div>
                    <div className="table__headline-title">
                        Количество
                    </div>
                    <div className="table__headline-title">
                        Итого
                    </div>
                </div>
                <div className="table__items">
                    <div className="table__item">
                        <img src={productImage} alt="" className="table__item-image"/>
                        <div className="table__item-info">
                            <div className="table__item-info__title">
                                Кардамон молотый 50 г
                            </div>
                            <div className="table__item-info__code">
                                Код товара: 323432
                            </div>
                        </div>
                        <div className="table__item-price">
                            300 ₽
                        </div>
                        <div className="table__item-amount">
                            2 шт.
                        </div>
                        <div className="table__item-total">
                            600 ₽
                        </div>
                        <button className="table__item-button">
                            Добавить
                        </button>
                    </div>
                    <div className="table__item">
                        <img src={productImage} alt="" className="table__item-image"/>
                        <div className="table__item-info">
                            <div className="table__item-info__title">
                                Кардамон молотый 50 г
                            </div>
                            <div className="table__item-info__code">
                                Код товара: 323432
                            </div>
                        </div>
                        <div className="table__item-price">
                            300 ₽
                        </div>
                        <div className="table__item-amount">
                            2 шт.
                        </div>
                        <div className="table__item-total">
                            600 ₽
                        </div>
                        <button className="table__item-button">
                            Добавить
                        </button>
                    </div>
                    <div className="table__item">
                        <img src={productImage} alt="" className="table__item-image"/>
                        <div className="table__item-info">
                            <div className="table__item-info__title">
                                Кардамон молотый 50 г
                            </div>
                            <div className="table__item-info__code">
                                Код товара: 323432
                            </div>
                        </div>
                        <div className="table__item-price">
                            300 ₽
                        </div>
                        <div className="table__item-amount">
                            2 шт.
                        </div>
                        <div className="table__item-total">
                            600 ₽
                        </div>
                        <button className="table__item-button">
                            Добавить
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrdersTab;