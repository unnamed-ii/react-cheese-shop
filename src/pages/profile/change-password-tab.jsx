import React, {useContext, useState} from 'react';
import './style.scss';
import LoadingAnimation from "../../components/loadingAnimation/loadingAnimation";
import {collection, getDocs, doc, updateDoc} from "firebase/firestore";
import {database} from "../../firebase";
import {LoadingAnimationContext} from "../../Context";

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
        try {
            const querySnapshot = await getDocs(collection(database, "users"));
            querySnapshot.forEach((user) => {
                if (user.data().password === oldPassword) {
                    currentPassword = oldPassword;
                }
            });

            if (currentPassword){
                // here we'll send new pass to server
                const userRef = await doc(database, "users", userId);
                await updateDoc(userRef, {
                    password: newPassword,
                })
            }
        } catch (e) {
            console.log(e);
        }

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
            <div className="title">
                Сменить пароль
            </div>
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
                <button>Подтвердить</button>
            </form>
            <LoadingAnimation isLoading={isLoading}/>
        </div>
    );
};

export default ChangePasswordTab;