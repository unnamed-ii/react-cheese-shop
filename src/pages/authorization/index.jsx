import React, {useState} from 'react';
import './style.scss'
import Wrapper from "../../components/wrapper";
import {Link} from "react-router-dom";
import {ReactComponent as FacebookIcon} from '../../images/icons/sign-up/facebook.svg';
import {ReactComponent as GoogleIcon} from '../../images/icons/sign-up/google.svg';
import {ReactComponent as VkIcon} from '../../images/icons/sign-up/vk.svg';
import {ReactComponent as TwitterIcon} from '../../images/icons/sign-up/twitter.svg';
import {ReactComponent as MailRuIcon} from '../../images/icons/sign-up/mailRu.svg';
import {ReactComponent as YandexIcon} from '../../images/icons/sign-up/yandex.svg';
import { getDocs, collection } from "firebase/firestore";
import {database} from "../../firebase";
import {useDispatch} from "react-redux";
import {logInActionCreator} from "../../store/syncReducers/user";

const Authorization = () => {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const dispatch = useDispatch();

    const logIn = async (e) => {
        e.preventDefault();

        try {
            const querySnapshot = await getDocs(collection(database, "users"));

            querySnapshot.forEach((doc) => {
                let currentUser = doc.data();
                let currentUserId = doc.id;

                if (currentUser.email === userEmail && currentUser.password === userPassword){
                    dispatch(logInActionCreator({
                        isAuth: true,
                        userData: currentUser,
                        id: currentUserId
                    }))
                } else {
                    alert('no user was founded')
                }
            });

        } catch (e) {
            console.log(e)
        }

        setUserEmail('');
        setUserPassword('');
    }

    return (
        <Wrapper>
            <div className="sign-in">
                <div className="sign-in__form">
                    <div className="sign-in__form-title">
                        Постоянный покупатель
                    </div>
                    <form onSubmit={logIn}>
                        <div className="email">
                            <div>Электронная почта</div>
                            <input
                                type="email"
                                placeholder="yourname@mail.com"
                                value={userEmail}
                                onChange={(e) => setUserEmail(e.target.value)}
                            />
                        </div>
                        <div className="password">
                            <div>Ваш пароль</div>
                            <input
                                type="password"
                                placeholder="От 8 и более символов"
                                value={userPassword}
                                onChange={(e) => setUserPassword(e.target.value)}
                            />
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