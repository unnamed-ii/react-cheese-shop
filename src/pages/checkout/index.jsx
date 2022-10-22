import React from 'react';
import './style.scss';

import productImage from '../../images/checkout-products-image.png';

const Checkout = () => {
    return (
        <div className="wrapper-checkout">
            <div className="checkout">
                <div className="checkout__info">
                    <div className="checkout__info-title">
                        Оформление заказа
                    </div>
                    <div className="checkout__info-contacts">
                        <div className="checkout__info-contacts__title">
                            Контактные данные:
                        </div>
                        <div className="checkout__info-contacts__inputs">
                            <div className="checkout__info-contacts__input">
                                <div>Имя и фамилия</div>
                                <input type="text" placeholder="Иванов Андрей"/>
                            </div>
                            <div className="checkout__info-contacts__input">
                                <div>Электронный адрес</div>
                                <input type="email" placeholder="ivan.services@gmail.com"/>
                            </div>
                        </div>
                    </div>
                    <div className="checkout__info-order">
                        <div className="checkout__info-order__title">
                            <div className="total-amount">
                                Заказ (4)
                            </div>
                            <div className="total-price">
                                на сумму 2350 руб.
                            </div>
                        </div>
                        <div className="checkout__info-order__products">
                            <div className="checkout__info-order__product">
                                <img src={productImage} alt=""/>
                                <div className="info">
                                    <div className="info__title">
                                        Универсальная форма 1 кг для приг отов ления сыра
                                    </div>
                                    <div className="info__vendor-code">
                                        Артикул: 260521
                                    </div>
                                    <a className="info__remove" href="#">
                                        Удалить
                                    </a>
                                </div>
                                <div className="counter">

                                </div>
                                <div className="price">
                                    600 ₽
                                </div>
                            </div>
                            <div className="checkout__info-order__product">
                                <img src={productImage} alt=""/>
                                <div className="info">
                                    <div className="info__title">
                                        Универсальная форма 1 кг для приг отов ления сыра
                                    </div>
                                    <div className="info__vendor-code">
                                        Артикул: 260521
                                    </div>
                                    <a className="info__remove" href="#">
                                        Удалить
                                    </a>
                                </div>
                                <div className="counter">

                                </div>
                                <div className="price">
                                    600 ₽
                                </div>
                            </div>
                            <div className="checkout__info-order__product">
                                <img src={productImage} alt=""/>
                                <div className="info">
                                    <div className="info__title">
                                        Универсальная форма 1 кг для приг отов ления сыра
                                    </div>
                                    <div className="info__vendor-code">
                                        Артикул: 260521
                                    </div>
                                    <a className="info__remove" href="#">
                                        Удалить
                                    </a>
                                </div>
                                <div className="counter">

                                </div>
                                <div className="price">
                                    600 ₽
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="checkout__info-delivery">
                        <div className="checkout__info-delivery__title">
                            Выберите способ доставки:
                        </div>
                        <div className="checkout__info-delivery__types">
                            <div className="checkout__info-delivery__type free">
                                <div className="input-radio">
                                    <input type="radio"/>
                                </div>
                                Бесплатная доставка <span>(0 руб.)</span>
                            </div>
                            <div className="checkout__info-delivery__type courier">
                                <div className="input-radio">
                                    <input type="radio"/>
                                </div>
                                Курьер <span>(0 руб.)</span>
                            </div>
                        </div>
                        <div className="checkout__info-delivery__data">
                            <div className="title">
                                Ваши данные для доставки:
                            </div>
                            <div className="inputs">
                                <div className="input">
                                    <div className="text">Имя и фамилия</div>
                                    <input type="text" placeholder="Иванов Андрей"/>
                                </div>
                                <div className="input">
                                    <div className="text">Номер телефона</div>
                                    <input type="text" placeholder="+7 000 000 00 00"/>
                                </div>
                            </div>
                            <div className="selects">
                                <div className="select">
                                    <div className="text">Выберите страну</div>
                                    <select>
                                        <option value="">Российская Федерация</option>
                                    </select>
                                </div>
                                <div className="select">
                                    <div className="text">Выберите регион</div>
                                    <select>
                                        <option value="">Нижний Новгород</option>
                                    </select>
                                </div>
                            </div>
                            <div className="inputs">
                                <div className="input">
                                    <div className="text">Улица, дом и квартира</div>
                                    <input type="text" placeholder="Ивановская 34, кв.12"/>
                                </div>
                                <div className="input">
                                    <div className="text">Индекс</div>
                                    <input type="text" placeholder="02100"/>
                                </div>
                            </div>
                        </div>
                        <div className="checkout__info-delivery__privacy">
                            <div className="checkbox">
                                <input type="checkbox"/>
                            </div>
                            <div className="text">
                                Cогласен на обработку персональных данных в соответствии с <a href="#">политикой
                                конфиденциальности</a>
                            </div>
                        </div>
                    </div>
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
                </div>
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
            </div>
        </div>
    );
};

export default Checkout;