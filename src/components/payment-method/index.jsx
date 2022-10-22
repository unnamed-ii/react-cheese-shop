import React from 'react';
import './style.scss'

const PaymentMethod = (props) => {
    return (
        <div className="payment-method">
            <div className="payment-method__image">
                {props.image}
            </div>
            <div className="payment-method__title">
                {props.title}
            </div>
            <div className="payment-method__text">
                {props.text}
            </div>
        </div>
    );
};

export default PaymentMethod;