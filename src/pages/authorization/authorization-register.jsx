import React from 'react';
import './style.scss'
import {Link} from "react-router-dom";

const AuthorizationLinkToRegister = () => {
    return (
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
    )
}

export default AuthorizationLinkToRegister;