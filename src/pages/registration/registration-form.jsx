import React from 'react';
import './style.scss'
import {Link, useNavigate} from "react-router-dom";
import CheckBox from "../../components/checkbox";
import Button from "../../components/button";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {registrationFormSchema} from "../../utils/validationShemes";
import {ReactComponent as FacebookIcon} from "../../images/icons/sign-up/facebook.svg";
import {ReactComponent as GoogleIcon} from "../../images/icons/sign-up/google.svg";
import {ReactComponent as VkIcon} from "../../images/icons/sign-up/vk.svg";
import {ReactComponent as TwitterIcon} from "../../images/icons/sign-up/twitter.svg";
import {ReactComponent as MailRuIcon} from "../../images/icons/sign-up/mailRu.svg";
import {ReactComponent as YandexIcon} from "../../images/icons/sign-up/yandex.svg";
import {addUser} from "../../api";

const RegistrationForm = () => {
    const navigate = useNavigate();
    const {register, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {
            fullName: "",
            email: "",
            password: "",
            passwordConfirm: "",
        },
        resolver: yupResolver(registrationFormSchema)
    });
    const registerUser = async (data) => {
        void addUser(data, navigate);
    }

    return (
        <div className="sign-up__form">
            <form onSubmit={handleSubmit(registerUser)}>
                <div className="name">
                    <div>Ваше имя и фамилия</div>
                    <input
                        type="text"
                        placeholder="Владимир Иванов"
                        name={'fullName'}
                        {...register("fullName")}
                    />
                    <p className="input__error-message">
                        {errors.fullName?.message}
                    </p>
                </div>
                <div className="email">
                    <div>Электронная почта</div>
                    <input
                        type="email"
                        placeholder="yourname@mail.com"
                        name={'email'}
                        {...register("email")}
                    />
                    <p className="input__error-message">
                        {errors.email?.message}
                    </p>
                </div>
                <div className="password">
                    <div className="password__enter">
                        <div>Пароль для входа</div>
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
                    <div className="password__confirmation">
                        <div>Подтвердите пароль</div>
                        <input
                            type="password"
                            placeholder="Повторите пароль"
                            name={'passwordConfirm'}
                            {...register("passwordConfirm")}
                        />
                        <p className="input__error-message">
                            {errors.passwordConfirm?.message}
                        </p>
                    </div>
                </div>
                <Button
                    text={"Создать аккаунт"}
                    className={"registration-page"}
                />
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
                        <CheckBox/>
                        Получать письма с новостями и акциями
                    </div>
                    <div className="agreements__agreement">
                        <CheckBox/>
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