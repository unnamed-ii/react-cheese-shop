import React from 'react';
import {ReactComponent as CourierIcon} from "../../images/icons/delivery.svg";
import deliveryMap from "../../images/delivery-map.png";
import deliveryCDEK from "../../images/delivery-CDEK.png";

const DeliveryMethods = () => {
    return (
        <div className="delivery__methods">
            <div className="delivery__methods-title">
                Способы Доставки:
            </div>
            <div className="delivery__methods-method">
                <div className="delivery__methods-method__info">
                    <div className="delivery__methods-method__title">
                        Доставка по Новосибирску
                    </div>
                    <div className="delivery__methods-method__text">
                        <div>Вы можете забрать товар из нашего магазина самостоятельно, приехав по адресу:</div>
                        <span>г. Новосибирск, ул. Котовского, д. 12/1, офис 1</span>
                    </div>
                    <div className="delivery__methods-method__courier">
                        <CourierIcon className="courier-image"/>
                        <div className="text">
                            Или заказать курьерскую доставку. Стоимость доставки –
                            <span>150 рублей.</span>
                        </div>
                    </div>
                </div>
                <img src={deliveryMap} alt=""/>
            </div>
            <div className="delivery__methods-method">
                <div className="delivery__methods-method__info country" style={{order: 1}}>
                    <div className="delivery__methods-method__title">
                        Доставка по Российской федерации
                    </div>
                    <div className="delivery__methods-method__text">
                        <div>Доставка по РФ осуществляется логистическими службами <span>СДЭК и Почта России.</span></div>
                        В любой момент Вы можете отследить путь своего заказа по трек-номеру.
                        Приблизительные сроки и стоимость доставки указаны в таблице ниже. Окончательная сумма
                        зависит от веса и способа оплаты заказа (при наложенном платеже – стоимость доставки выше) и
                        рассчитывается автоматически в момент оформления.
                    </div>
                </div>
                <img src={deliveryCDEK} alt=""/>
            </div>
        </div>
    );
};

export default DeliveryMethods;