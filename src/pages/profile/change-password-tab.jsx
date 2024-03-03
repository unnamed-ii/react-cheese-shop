import React, {useContext, useState} from 'react';
import './style.scss';
import LoadingAnimation from "../../components/loadingAnimation/loadingAnimation";
import {LoadingAnimationContext} from "../../Context";
import Button from "../../components/button";
import Title from "../../components/title";
import {changeUserPassword} from "../../api";

const ChangePasswordTab = ({activeTab}) => {
    const userId = JSON.parse(localStorage.getItem('userInfo')).id;
    const {isLoading, setIsLoading} = useContext(LoadingAnimationContext);
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const onOldPassChange = (e) => setOldPassword(e.target.value);
    const onNewPassChange = (e) => setNewPassword(e.target.value);
    const changePasswordHandle = async (e) => {
        e.preventDefault();
        setIsLoading(true)
        if (oldPassword === newPassword){
            setIsLoading(false);
            alert("Новый пароль должен отличаться от старого");
            setOldPassword('');
            setNewPassword('');
            return;
        }

        let currentPassword = '';
        await changeUserPassword(oldPassword, currentPassword, newPassword, userId)

        if (!currentPassword) {
            setIsLoading(false);
            alert("Вы ввели неправильный пароль")
            setOldPassword('');
            setNewPassword('');
            return;
        }

        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
        alert("Вы успешно сменили пароль");
        setOldPassword('');
        setNewPassword('');
    }

    return (
        <div className={"profile__tabs-item " + (activeTab === "change-password" && "active change-password")}>
            <Title
                title={"Сменить пароль"}
                className={"profile-page__tab-title"}
            />
            <div className="subtitle">
                После смены пароля мы пришлем подтверждение на ваш электронный адрес
            </div>
            <form onSubmit={changePasswordHandle}>
                <div className="inputs">
                    <div className="inputs__input">
                        <div>Старый пароль</div>
                        <input type="password"
                               placeholder="Введите старый пароль"
                               value={oldPassword}
                               onChange={onOldPassChange}
                        />
                    </div>
                    <div className="inputs__input">
                        <div>Новый пароль</div>
                        <input type="password"
                               placeholder="Не менее 8 символов"
                               value={newPassword}
                               onChange={onNewPassChange}
                        />
                    </div>
                </div>
                <Button
                    text={"Подтвердить"}
                    className={"profile-password-change-password"}
                />
            </form>
            <LoadingAnimation isLoading={isLoading}/>
        </div>
    );
};

export default ChangePasswordTab;