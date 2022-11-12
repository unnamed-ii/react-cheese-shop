import React from 'react';
import './style.scss';

const ChangePasswordTab = ({activeTab}) => {

    return (
        <div className={"profile__tabs-item " + (activeTab === "change-password" && "active change-password")}>
            <div className="title">
                Сменить пароль
            </div>
            <div className="subtitle">
                После смены пароля мы пришлем подтверждение на ваш электронный адрес
            </div>
            <form>
                <div className="inputs">
                    <div className="inputs__input">
                        <div>Старый пароль</div>
                        <input type="password" placeholder="Введите старый пароль"/>
                    </div>
                    <div className="inputs__input">
                        <div>Новый пароль</div>
                        <input type="password" placeholder="Не менее 8 символов"/>
                    </div>
                </div>
                <button>Подтвердить</button>
            </form>
        </div>
    );
};

export default ChangePasswordTab;