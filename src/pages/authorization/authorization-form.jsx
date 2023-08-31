import React, {useContext} from 'react';
import './style.scss'
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {database} from "../../firebase";
import {collection, getDocs} from "firebase/firestore";
import {logInActionCreator} from "../../store/user";
import {refreshPage} from "../../utils/refreshPage";
import LoadingAnimation from "../../components/loadingAnimation/loadingAnimation";
import {LoadingAnimationContext} from "../../Context";
import Title from "../../components/title";
import Button from "../../components/button";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {authorizationFormSchema} from "../../utils/validationShemes";
import {ReactComponent as FacebookIcon} from "../../images/icons/sign-up/facebook.svg";
import {ReactComponent as GoogleIcon} from "../../images/icons/sign-up/google.svg";
import {ReactComponent as VkIcon} from "../../images/icons/sign-up/vk.svg";
import {ReactComponent as TwitterIcon} from "../../images/icons/sign-up/twitter.svg";
import {ReactComponent as MailRuIcon} from "../../images/icons/sign-up/mailRu.svg";
import {ReactComponent as YandexIcon} from "../../images/icons/sign-up/yandex.svg";

const AuthorizationForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {isLoading, setIsLoading} = useContext(LoadingAnimationContext);
    const {register, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {
            email: "",
            password: ""
        },
        resolver: yupResolver(authorizationFormSchema)
    });
    const logIn = data => console.log(data);
    const logIn123 = async (data) => {
        setIsLoading(true);
        try {
            const querySnapshot = await getDocs(collection(database, "users"));
            let authorizingUser = null;
            let authorizingUserId = null;

            querySnapshot.forEach((user) => {
                // checking is on server any account with this email
                if (user.data().email === data.email) {
                    authorizingUser = user.data();
                    authorizingUserId = user.id;
                }
            });

            // if authorizingUser variable is not equal to null , then we found user on server
            if (authorizingUser) {
                // checking only password , because on line 44 we already checked email
                // if password is right , then we doing authorization , otherwise giving info about mistake to user
                if (authorizingUser.password === data.password) {
                    dispatch(logInActionCreator({
                        isAuth: true,
                        userData: authorizingUser,
                        id: authorizingUserId
                    }));
                    // saving data locally on users computer
                    localStorage.setItem('isUserAuthorized', 'true');
                    localStorage.setItem('userInfo', JSON.stringify({
                        userData: authorizingUser,
                        id: authorizingUserId
                    }));
                    setTimeout(() => {
                        setIsLoading(false);
                        alert(`Добро пожаловать ${authorizingUser.fullName}`);
                        navigate('/');
                        refreshPage();
                    }, 500);
                }
                if (authorizingUser.password !== data.password) {
                    setIsLoading(false);
                    alert('Неверный пароль');
                }
            } else {
                setIsLoading(false);
                alert('Неверная почта');
            }
        } catch (error) {
            console.log(error);
        }
        setIsLoading(false);
    }

    return (
        <div className="sign-in__form">
            <Title
                title={"Постоянный покупатель"}
                className={"authorization"}
            />
            <form onSubmit={handleSubmit(logIn)}>
                <div className="email">
                    <div>Электронная почта</div>
                    <input
                        type="email"
                        placeholder="yourname@mail.com"
                        name={"email"}
                        {...register("email")}
                    />
                    <p className="input__error-message">
                        {errors.email?.message}
                    </p>
                </div>
                <div className="password">
                    <div>Ваш пароль</div>
                    <input
                        type="password"
                        placeholder="От 8 и более символов"
                        name={"password"}
                        {...register("password")}
                    />
                    <p className="input__error-message">
                        {errors.password?.message}
                    </p>
                </div>
                <Button
                    text={"Войти"}
                    className={"authorization-page"}
                />
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
            <LoadingAnimation isLoading={isLoading}/>
        </div>
    )
}

export default AuthorizationForm;