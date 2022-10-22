import React from 'react';
import './style.scss'

import {ReactComponent as CashbackIcon} from '../../images/icons/sign-up-benefits/cashback.svg';
import {ReactComponent as QualityAssuranceIcon} from '../../images/icons/sign-up-benefits/quality-assurance.svg';
import {ReactComponent as PaymentMethodsIcon} from '../../images/icons/sign-up-benefits/payment-methods.svg';
import {ReactComponent as FacebookIcon} from '../../images/icons/sign-up/facebook.svg';
import {ReactComponent as GoogleIcon} from '../../images/icons/sign-up/google.svg';
import {ReactComponent as VkIcon} from '../../images/icons/sign-up/vk.svg';
import {ReactComponent as TwitterIcon} from '../../images/icons/sign-up/twitter.svg';
import {ReactComponent as MailRuIcon} from '../../images/icons/sign-up/mailRu.svg';
import {ReactComponent as YandexIcon} from '../../images/icons/sign-up/yandex.svg';
import {Link} from "react-router-dom";


const Registration = () => {
    return (
        <div className="wrapper__sign-up">
            <div className="sign-up">
                <div className="sign-up__info">
                    <div className="sign-up__info-title">
                        Регистрация аккаунта
                    </div>
                    <div className="sign-up__info-text">
                        Делайте покупки быстро и удобно, отслеживайте статус заказа и получайте скидки.
                    </div>
                    <div className="sign-up__info-benefits">
                        <div className="sign-up__info-benefit">
                            <CashbackIcon />
                            <div className="title">
                                Возвращаем 10% бонусами
                            </div>
                            <div className="text">
                                При заказе на сумму от 3500 руб. и весе до 3 кг. предоставляется бесплатная доставка по
                                всей Россиию
                            </div>
                        </div>
                        <div className="sign-up__info-benefit">
                            <QualityAssuranceIcon />
                            <div className="title">
                                Гарантия качества
                            </div>
                            <div className="text">
                                При заказе на сумму от 3500 руб. и весе до 3 кг. предоставляется бесплатная доставка по
                                всей Россиию
                            </div>
                        </div>
                        <div className="sign-up__info-benefit">
                            <PaymentMethodsIcon />
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
                <div className="sign-up__form">
                    <form>
                        <div className="name">
                            <div>Ваше имя и фамилия</div>
                            <input type="text" placeholder="Владимир Иванов"/>
                        </div>
                        <div className="email">
                            <div>Электронная почта</div>
                            <input type="email" placeholder="yourname@mail.com"/>
                        </div>
                        <div className="password">
                            <div className="password__enter">
                                <div>Пароль для входа</div>
                                <input type="password" placeholder="От 8 и более символов"/>
                            </div>
                            <div className="password__confirmation">
                                <div>Подтвердите пароль</div>
                                <input type="password" placeholder="Повторите пароль"/>
                            </div>
                        </div>
                        <button>Создать аккаунт</button>
                    </form>
                    <div className="sign-up__form-accounts">
                        <div className="top">
                            или
                        </div>
                        <div className="services">
                            <FacebookIcon className='icon'/>
                            <GoogleIcon className='icon'/>
                            <VkIcon className='icon'/>
                            <TwitterIcon className='icon'/>
                            <MailRuIcon className='icon'/>
                            <YandexIcon className='icon'/>
                        </div>
                        <div className="agreements">
                            <div className="agreements__agreement">
                                <input type="checkbox"/>
                                Получать письма с новостями и акциями
                            </div>
                            <div className="agreements__agreement">
                                <input type="checkbox"/>
                                Я прочитал и соглашаюсь с условиями <a href="#">Политики конфиденциальности</a>
                            </div>
                        </div>
                    </div>
                    <div className="sign-up__form-link">
                        Уже есть профиль? <Link to="/authorization">Войти в аккаунт</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;