import React from 'react';
import {useSelector} from "react-redux";
import {CheckoutOrderProductCard} from "./checkout-order-product-card";

const CheckoutOrder = () => {
    const basketProducts = useSelector(state => state.basket.products);
    const basketSum = useSelector(state => state.basket.sum);

    return (
        <div className="checkout__info-order">
            <div className="checkout__info-order__title">
                <div className="total-amount">
                    Заказ ({basketProducts.length})
                </div>
                <div className="total-price">
                    На сумму {basketSum} руб.
                </div>
            </div>
            <div className="checkout__info-order__products">
                {basketProducts.map(product =>
                    <CheckoutOrderProductCard
                        key={Math.floor(Math.random() * 100000)}
                        title={product.title}
                        price={product.price}
                        id={product.id}
                    />
                )}
            </div>
        </div>
    );
};

export default CheckoutOrder;