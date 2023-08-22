import React from 'react';
import './style.scss'
import {Link} from "react-router-dom";
import Wrapper from "../../components/wrapper";
import PageTitle from "../../components/page-title";

const Recovery = () => {
    return (
        <Wrapper>
            <div className="recover">
                <PageTitle title={"Восстановить пароль"}/>
                <div className="recover__text">
                    Введите адрес электронной почты Вашей учетной записи. Нажмите кнопку продолжить, чтобы получить
                    пароль по электронной почте.
                </div>
                <div className="recover__form">
                    <form>
                        <div className="recover__form-title">
                            Электронная почта
                        </div>
                        <input type="email" placeholder="yourname@mail.com"/>
                        <br/>
                        <button>Продолжить</button>
                    </form>
                </div>
                <div className="recover__link">
                    У вас нет профиля?? <Link to="/registration">Создайте аккаунт</Link>
                </div>
            </div>
        </Wrapper>
    );
};

export default Recovery;