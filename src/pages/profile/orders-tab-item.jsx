import React from 'react';
import './style.scss';
import Button from "../../components/button";

const OrdersTabItem = ({image, title, code, priceForProduct, amount, totalPrice}) => {
    return (
        <div className="table__item">
            <img src={image} alt="" className="table__item-image"/>
            <div className="table__item-info">
                <div className="table__item-info__title">
                    {title}
                </div>
                <div className="table__item-info__code">
                    Код товара: {code}
                </div>
            </div>
            <div className="table__item-price">
                {priceForProduct} ₽
            </div>
            <div className="table__item-amount">
                {amount} шт.
            </div>
            <div className="table__item-total">
                {totalPrice} ₽
            </div>
            <Button
                text={"Добавить"}
                className={"profile-orders-product-card"}
            />
        </div>
    )
}

export default OrdersTabItem;