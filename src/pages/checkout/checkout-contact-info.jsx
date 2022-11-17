import React from 'react';

const CheckoutContactInfo = () => {
    return (
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
    );
};

export default CheckoutContactInfo;