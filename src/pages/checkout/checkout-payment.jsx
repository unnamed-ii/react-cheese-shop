import React from 'react';

const CheckoutPayment = () => {
    return (
        <div className="checkout__info-payment">
            <div className="checkout__info-payment__title">
                Выберите способ оплаты:
            </div>
            <div className="checkout__info-payment__methods">
                <div className="checkout__info-payment__method online">
                    <label className="input-radio">
                        <span className="checkmark"/>
                        <input type="radio" id="radioInput"/>
                    </label>
                    <div className="text">
                        Онлайн оплата
                    </div>
                </div>
                <div className="checkout__info-payment__method cash">
                    <label className="input-radio">
                        <span className="checkmark"/>
                        <input type="radio" id="radioInput"/>
                    </label>
                    <div className="text">
                        Оплата наличными
                    </div>
                </div>
                <div className="checkout__info-payment__method other">
                    <label className="input-radio">
                        <span className="checkmark"/>
                        <input type="radio" id="radioInput"/>
                    </label>
                    <div className="text">
                        Кредитные карты / Интернет банкинг / QIWI / Yandex
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPayment;