import React from 'react';
import {useSelector} from "react-redux";
import Button from "../../components/button";
import {leaveOrder} from "../../api";

const CheckoutTotals = ({leaveOrder}) => {
    const basketSum = useSelector(state => state.basket.sum);
    let promoCode = 300;

    return (
        <div className="checkout__totals">
            <div className="checkout__totals-title">
                Итоги заказа
            </div>
            <div className="checkout__totals-promo">
                <div className="checkout__totals-promo__title">
                    Есть промокод для скидки?
                </div>
                <div className="checkout__totals-promo__code">
                    <input type="text"/>
                    <button>Применить</button>
                </div>
            </div>
            <div className="checkout__totals-calculations">
                <div className="checkout__totals-calculations__row">
                    <div>Сумма заказа</div>
                    <div>{basketSum} руб.</div>
                </div>
                <div className="checkout__totals-calculations__row">
                    <div>Доставка</div>
                    <div>0 руб.</div>
                </div>
                <div className="checkout__totals-calculations__row">
                    <div>Промокод</div>
                    <div>300 руб.</div>
                </div>
            </div>
            <div className="checkout__totals-price">
                <div className="checkout__totals-price__row">
                    <div>К оплате</div>
                    <div>{basketSum - promoCode} руб.</div>
                </div>
            </div>
            <Button
                text={"Подтвердить заказ"}
                className={"checkout-page"}
                disabled={basketSum <= 0}
                onClick={leaveOrder}
            />
        </div>
    );
};

export default CheckoutTotals;