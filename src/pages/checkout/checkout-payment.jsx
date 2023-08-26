import React, {useState} from 'react';
import RadioButton from "../../components/radio-button";

const CheckoutPayment = ({setPaymentMethod, paymentMethod}) => {

    return (
        <div className="checkout__info-payment">
            <div className="checkout__info-payment__title">
                Выберите способ оплаты:
            </div>
            <form className="checkout__info-payment__methods">
                <div className="checkout__info-payment__method online">
                    <RadioButton
                        id={"Онлайн оплата"}
                        activeRadioInput={paymentMethod}
                        onChange={setPaymentMethod}
                    />
                    <div className="text">
                        Онлайн оплата
                    </div>
                </div>
                <div className="checkout__info-payment__method cash">
                    <RadioButton
                        id={"Оплата наличными"}
                        activeRadioInput={paymentMethod}
                        onChange={setPaymentMethod}
                    />
                    <div className="text">
                        Оплата наличными
                    </div>
                </div>
                <div className="checkout__info-payment__method other">
                    <RadioButton
                        id={"Кредитные карты / Интернет банкинг / QIWI / Yandex"}
                        activeRadioInput={paymentMethod}
                        onChange={setPaymentMethod}
                    />
                    <div className="text">
                        Кредитные карты / Интернет банкинг / QIWI / Yandex
                    </div>
                </div>
            </form>
        </div>
    );
};

export default CheckoutPayment;