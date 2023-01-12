import React from 'react';
import './style.scss'
import {ReactComponent as CashbackIcon} from "../../images/icons/sign-up-benefits/cashback.svg";
import {ReactComponent as QualityAssuranceIcon} from "../../images/icons/sign-up-benefits/quality-assurance.svg";
import {ReactComponent as PaymentMethodsIcon} from "../../images/icons/sign-up-benefits/payment-methods.svg";

const RegistrationInfo = () => {
    return (
        <div className="sign-up__info">
            <div className="sign-up__info-title">
                Регистрация аккаунта
            </div>
            <div className="sign-up__info-text">
                Делайте покупки быстро и удобно, отслеживайте статус заказа и получайте скидки.
            </div>
            <div className="sign-up__info-benefits">
                <div className="sign-up__info-benefit">
                    <CashbackIcon/>
                    <div className="title">
                        Возвращаем 10% бонусами
                    </div>
                    <div className="text">
                        При заказе на сумму от 3500 руб. и весе до 3 кг. предоставляется бесплатная доставка по
                        всей Россиию
                    </div>
                </div>
                <div className="sign-up__info-benefit">
                    <QualityAssuranceIcon/>
                    <div className="title">
                        Гарантия качества
                    </div>
                    <div className="text">
                        При заказе на сумму от 3500 руб. и весе до 3 кг. предоставляется бесплатная доставка по
                        всей Россиию
                    </div>
                </div>
                <div className="sign-up__info-benefit">
                    <PaymentMethodsIcon/>
                    <div className="title">
                        Удобные способы оплаты
                    </div>
                    <div className="text">
                        При заказе на сумму от 3500 руб. и весе до 3 кг. предоставляется бесплатная доставка по
                        всей Россиию
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegistrationInfo;