import React from 'react';

const DeliveryTable = () => {
    return (
        <div className="delivery__table">
            <div className="delivery__table-row top">
                <div className="delivery__table-row__title">
                </div>
                <div className="delivery__table-row__text">
                    Почта России
                </div>
                <div className="delivery__table-row__text" style={{minWidth: '320px'}}>
                    Транпортная компания СДЭК
                </div>
                <div className="delivery__table-row__text">
                    Пункт выдачи Boxberry
                </div>
            </div>
            <div className="delivery__table-row odd">
                <div className="delivery__table-row__title">
                    Сроки доставки
                </div>
                <div className="delivery__table-row__text">
                    От 7 дней
                </div>
                <div className="delivery__table-row__text" style={{minWidth: '320px'}}>
                    2-4 дня
                </div>
                <div className="delivery__table-row__text">
                    2-4 дня
                </div>
            </div>
            <div className="delivery__table-row even">
                <div className="delivery__table-row__title">
                    Стоимость доставки
                </div>
                <div className="delivery__table-row__text">
                    От 200 руб.
                </div>
                <div className="delivery__table-row__text" style={{minWidth: '320px'}}>
                    От 350 руб. Итоговая сумма будет рассчитана после указания точного адреса
                </div>
                <div className="delivery__table-row__text">
                    От 200 руб.
                </div>
            </div>
            <div className="delivery__table-row odd">
                <div className="delivery__table-row__title">
                    Бесплатная доставка
                </div>
                <div className="delivery__table-row__text">
                    При заказе от 2000 руб.
                </div>
                <div className="delivery__table-row__text" style={{minWidth: '320px'}}>
                    При заказе от 7000 руб.
                </div>
                <div className="delivery__table-row__text">
                    При заказе от 2000 руб.
                </div>
            </div>
        </div>
    );
};

export default DeliveryTable;