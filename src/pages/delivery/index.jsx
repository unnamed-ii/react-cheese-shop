import React from 'react';
import './style.scss'
import Wrapper from "../../components/wrapper";
import MainNav from "../../components/main-nav";
import PaymentMethodCard from "./payment-method";
import {ReactComponent as CourierIcon} from '../../images/icons/delivery.svg';
import deliveryMap from '../../images/delivery-map.png';
import deliveryCDEK from '../../images/delivery-CDEK.png';
import {PaymentMethodsData} from "./constants";

const Delivery = () => {
    return (
        <Wrapper>
            <div>
                <div className="delivery">
                    <div className="delivery__inner">
                        <MainNav/>
                        <div className="delivery__inner-content">
                            <div className="delivery__title">
                                Доставка и оплата
                            </div>
                            <div className="delivery__payment">
                                <div className="delivery__payment-title">
                                    Способы оплаты:
                                </div>
                                <div className="delivery__payment-methods">
                                    {PaymentMethodsData.map(i =>
                                        <PaymentMethodCard
                                            image={i.image}
                                            title={i.title}
                                            text={i.text}
                                        />
                                    )}
                                </div>
                            </div>
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
                                            <CourierIcon class="courier-image"/>
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
                        </div>
                    </div>
                </div>
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
            </div>
        </Wrapper>
    )
};

export default Delivery;