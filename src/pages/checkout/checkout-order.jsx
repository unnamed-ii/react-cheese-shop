import React from 'react';
import Counter from "../../components/counter";
import productImage from "../../images/checkout-products-image.png";

const CheckoutOrderProductCard = ({image = productImage, title = "Универсальная форма 1 кг для приг отов ления сыра", code = 260521, price = 600}) => {
    return (
        <div className="checkout__info-order__product">
            <img src={image} alt=""/>
            <div className="info">
                <div className="info__title">
                    {title}
                </div>
                <div className="info__vendor-code">
                    Артикул: {code}
                </div>
                <a className="info__remove" href="#">
                    Удалить
                </a>
            </div>
            <Counter />
            <div className="price">
                {price} ₽
            </div>
        </div>
    )
}

const CheckoutOrder = () => {
    return (
        <div className="checkout__info-order">
            <div className="checkout__info-order__title">
                <div className="total-amount">
                    Заказ (4)
                </div>
                <div className="total-price">
                    на сумму 2350 руб.
                </div>
            </div>
            <div className="checkout__info-order__products">
                <CheckoutOrderProductCard/>
                <CheckoutOrderProductCard/>
                <CheckoutOrderProductCard/>
            </div>
        </div>
    );
};

export default CheckoutOrder;