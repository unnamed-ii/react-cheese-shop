import React from 'react';
import './style.scss'

import {ReactComponent as CloseBtnIcon} from '../../../images/icons/close-moduls-btn.svg'

const LoginModal = () => {
    return (
        <div className="login-wrapper">
            <div className="login">
                <div className="login__title">
                    Вход в аккаунт
                </div>
                <div className="login__close">
                    <CloseBtnIcon />
                </div>
                <div className="login__form">
                    <form>
                        <div className="email">
                            <div className="title">
                                Email адрес:
                            </div>
                            <input type="email" placeholder="yourname@mail.com"/>
                        </div>
                        <div className="password">
                            <div className="title">
                                Пароль
                            </div>
                            <input type="password" placeholder="Ваш пароль"/>
                        </div>
                        <button>
                            Войти
                        </button>
                    </form>
                    <div className="login__form-link">
                        <a href="#">Забыли пароль?</a>
                    </div>
                </div>
                <div className="login__link">
                    У вас нет профиля? <a href="#">Создайте аккаунт</a>
                </div>
            </div>
        </div>
    );
};

export default LoginModal;