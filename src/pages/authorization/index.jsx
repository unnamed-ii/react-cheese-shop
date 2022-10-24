import React from 'react';
import './style.scss'
import {Link} from "react-router-dom";
import Wrapper from "../../components/wrapper";
import {ReactComponent as FacebookIcon} from '../../images/icons/sign-up/facebook.svg';
import {ReactComponent as GoogleIcon} from '../../images/icons/sign-up/google.svg';
import {ReactComponent as VkIcon} from '../../images/icons/sign-up/vk.svg';
import {ReactComponent as TwitterIcon} from '../../images/icons/sign-up/twitter.svg';
import {ReactComponent as MailRuIcon} from '../../images/icons/sign-up/mailRu.svg';
import {ReactComponent as YandexIcon} from '../../images/icons/sign-up/yandex.svg';

const Authorization = () => {
    return (
        <Wrapper>
            <div className="sign-in">
                <div className="sign-in__form">
                    <div className="sign-in__form-title">
                        Постоянный покупатель
                    </div>
                    <form>
                        <div className="email">
                            <div>Электронная почта</div>
                            <input type="email" placeholder="yourname@mail.com"/>
                        </div>
                        <div className="password">
                            <div>Ваш пароль</div>
                            <input type="password" placeholder="От 8 и более символов"/>
                        </div>
                        <button>Войти</button>
                    </form>
                    <div className="sign-in__form-accounts">
                        <div className="title">
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
                    </div>
                    <Link to="/recovery" className="sign-in__form-link">
                        Забыли пароль?
                    </Link>
                </div>
                <div className="sign-in__register">
                    <div className="sign-in__register-title">
                        Создайте аккаунт
                    </div>
                    <div className="sign-in__register-text">
                        Делайте покупки быстро и удобно, отслеживайте статус заказа и получайте скидки.
                    </div>
                    <div className="sign-in__register-link">
                        <Link to="/registration">Зарегистрироваться</Link>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default Authorization;