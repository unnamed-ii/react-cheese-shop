import React from 'react';

const CheckoutTotals = () => {
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
                    <div>2350 руб.</div>
                </div>
                <div className="checkout__totals-calculations__row">
                    <div>Доставка</div>
                    <div>0 руб.</div>
                </div>
                <div className="checkout__totals-calculations__row">
                    <div>Промокод</div>
                    <div>-300 руб.</div>
                </div>
            </div>
            <div className="checkout__totals-price">
                <div className="checkout__totals-price__row">
                    <div>К оплате</div>
                    <div>2050 руб.</div>
                </div>
            </div>
            <button className="checkout__totals-btn">
                Подтвердить заказ
            </button>
        </div>
    );
};

export default CheckoutTotals;