import React, {useState} from 'react';
import './style.scss'
import {Link, useNavigate} from "react-router-dom";
import {database} from "../../firebase";
import {addDoc, collection, getDocs} from "firebase/firestore";
import {ReactComponent as FacebookIcon} from "../../images/icons/sign-up/facebook.svg";
import {ReactComponent as GoogleIcon} from "../../images/icons/sign-up/google.svg";
import {ReactComponent as VkIcon} from "../../images/icons/sign-up/vk.svg";
import {ReactComponent as TwitterIcon} from "../../images/icons/sign-up/twitter.svg";
import {ReactComponent as MailRuIcon} from "../../images/icons/sign-up/mailRu.svg";
import {ReactComponent as YandexIcon} from "../../images/icons/sign-up/yandex.svg";

const RegistrationForm = () => {
    const [userData, setUserData] = useState({
        fullName: '',
        email: '',
        password: '',
        passwordConfirmation: ''
    });
    const navigate = useNavigate();

    const registerUser = async (e) => {
        e.preventDefault();

        setUserData({
            fullName: '',
            email: '',
            password: '',
            passwordConfirmation: ''
        })

        try {
            const querySnapshot = await getDocs(collection(database, "users"));
            let isEmailRegistered = false;

            querySnapshot.forEach((doc) => {
                let currentUser = doc.data();

                if (currentUser.email === userData.email) {
                    alert('Account with this email is already registered');
                    isEmailRegistered = true;
                }
            });

            if (isEmailRegistered === false) {
                await addDoc(collection(database, "users"), userData);
                navigate("/authorization");
            }

        } catch (e) {
            console.log(e)
        }

    }

    const onFieldChange = (e) => {
        setUserData(p => ({
            ...p,
            [e.target.name]: e.target.value
        }));
    }

    return (
        <div className="sign-up__form">
            <form onSubmit={registerUser}>
                <div className="name">
                    <div>Ваше имя и фамилия</div>
                    <input
                        type="text"
                        placeholder="Владимир Иванов"
                        value={userData.fullName}
                        onChange={onFieldChange}
                        name={'fullName'}
                    />
                </div>
                <div className="email">
                    <div>Электронная почта</div>
                    <input
                        type="email"
                        placeholder="yourname@mail.com"
                        value={userData.email}
                        onChange={onFieldChange}
                        name={'email'}
                    />
                </div>
                <div className="password">
                    <div className="password__enter">
                        <div>Пароль для входа</div>
                        <input
                            type="password"
                            placeholder="От 8 и более символов"
                            value={userData.password}
                            onChange={onFieldChange}
                            name={'password'}
                        />
                    </div>
                    <div className="password__confirmation">
                        <div>Подтвердите пароль</div>
                        <input
                            type="password"
                            placeholder="Повторите пароль"
                            value={userData.passwordConfirmation}
                            onChange={onFieldChange}
                            name={'passwordConfirmation'}
                        />
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
    )
}

export default RegistrationForm;