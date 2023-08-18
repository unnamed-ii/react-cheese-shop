import React, {useState} from 'react';
import RadioButton from "../../components/radio-button";

const CheckoutPayment = () => {
    const [activeRadioInput, setActiveRadioInput] = useState(null);

    return (
        <div className="checkout__info-payment">
            <div className="checkout__info-payment__title">
                Выберите способ оплаты:
            </div>
            <form className="checkout__info-payment__methods">
                <div className="checkout__info-payment__method online">
                    <RadioButton
                        id={"checkoutPayment1"}
                        activeRadioInput={activeRadioInput}
                        setActiveRadioInput={setActiveRadioInput}
                    />
                    <div className="text">
                        Онлайн оплата
                    </div>
                </div>
                <div className="checkout__info-payment__method cash">
                    <RadioButton
                        id={"checkoutPayment2"}
                        activeRadioInput={activeRadioInput}
                        setActiveRadioInput={setActiveRadioInput}
                    />
                    <div className="text">
                        Оплата наличными
                    </div>
                </div>
                <div className="checkout__info-payment__method other">
                    <RadioButton
                        id={"checkoutPayment3"}
                        activeRadioInput={activeRadioInput}
                        setActiveRadioInput={setActiveRadioInput}
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