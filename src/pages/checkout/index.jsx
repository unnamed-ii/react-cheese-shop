import React from 'react';
import './style.scss';
import CheckoutContactInfo from "./checkout-contact-info";
import CheckoutOrder from "./checkout-order";
import CheckoutDelivery from "./checkout-delivery";
import CheckoutTotals from "./checkout-totals";
import CheckoutPayment from "./checkout-payment";

const Checkout = () => {
    return (
        <div className="wrapper-checkout">
            <div className="checkout">
                <div className="checkout__info">
                    <div className="checkout__info-title">
                        Оформление заказа
                    </div>
                    <CheckoutContactInfo />
                    <CheckoutOrder />
                    <CheckoutDelivery />
                    <CheckoutPayment />
                </div>
                <CheckoutTotals />
            </div>
        </div>
    );
};

export default Checkout;