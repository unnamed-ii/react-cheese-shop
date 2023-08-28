import React from 'react';
import './style.scss'
import {Link} from "react-router-dom";
import Title from "../../components/title";

const AuthorizationLinkToRegister = () => {
    return (
        <div className="sign-in__register">
            <Title
                title={"Создайте аккаунт"}
                className={"authorization"}
            />
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