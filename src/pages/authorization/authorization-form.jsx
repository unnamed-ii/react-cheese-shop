import React, {useState} from 'react';
import './style.scss'
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {collection, getDocs} from "firebase/firestore";
import {database} from "../../firebase";
import {useNavigate} from "react-router-dom";
import {logInActionCreator} from "../../store/syncReducers/user";
import {ReactComponent as FacebookIcon} from "../../images/icons/sign-up/facebook.svg";
import {ReactComponent as GoogleIcon} from "../../images/icons/sign-up/google.svg";
import {ReactComponent as VkIcon} from "../../images/icons/sign-up/vk.svg";
import {ReactComponent as TwitterIcon} from "../../images/icons/sign-up/twitter.svg";
import {ReactComponent as MailRuIcon} from "../../images/icons/sign-up/mailRu.svg";
import {ReactComponent as YandexIcon} from "../../images/icons/sign-up/yandex.svg";

const AuthorizationForm = () => {
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onFieldChange = (e) => {
        setUserData(p => ({
            ...p,
            [e.target.name]: e.target.value
        }))
    }

    const logIn = async (e) => {
        e.preventDefault();

        try {
            const querySnapshot = await getDocs(collection(database, "users"));
            let authorizingUser = null;
            let authorizingUserId = null;

            querySnapshot.forEach((doc) => {
                let currentUser = doc.data();
                let currentUserId = doc.id;

                if (currentUser.email === userData.email) {
                    authorizingUser = currentUser;
                    authorizingUserId = currentUserId;
                }
            });

            if (authorizingUser) {
                if (authorizingUser.password === userData.password) {
                    dispatch(logInActionCreator({
                        isAuth: true,
                        userData: authorizingUser,
                        id: authorizingUserId
                    }))
                    navigate('/');
                } else {
                    alert('Invalid password')
                }
            } else {
                alert('Wrong email')
            }

        } catch (e) {
            console.log(e)
        }

        setUserData({
            email: '',
            password: ''
        });
    }

    return (
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
                        value={userData.email}
                        onChange={onFieldChange}
                        name={"email"}
                    />
                </div>
                <div className="password">
                    <div>Ваш пароль</div>
                    <input
                        type="password"
                        placeholder="От 8 и более символов"
                        value={userData.password}
                        onChange={onFieldChange}
                        name={"password"}
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
    )
}

export default AuthorizationForm;