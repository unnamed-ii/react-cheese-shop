import React from 'react';
import './style.scss'

const PaymentMethodCard = ({image, title, text}) => {
    return (
        <div className="payment-method">
            <div className="payment-method__image">
                {image}
            </div>
            <div className="payment-method__title">
                {title}
            </div>
            <div className="payment-method__text">
                {text}
            </div>
        </div>
    );
};

export default PaymentMethodCard;