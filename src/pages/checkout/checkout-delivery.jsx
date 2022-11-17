import React from 'react';

const CheckoutDelivery = () => {
    return (
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
    );
};

export default CheckoutDelivery;