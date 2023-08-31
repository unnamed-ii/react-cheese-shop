import React, {useEffect} from 'react';
import './style.scss'
import ModalWrapper from "../../modal-wrapper";
import {ReactComponent as CloseBtnIcon} from '../../../images/icons/close-moduls-btn.svg'
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {registrationFormSchema} from "../../../utils/validationShemes";

const RegistrationModal = ({toggleModal, isModalOpened}) => {
    const {register, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {
            fullName: "",
            email: "",
            password: "",
            passwordConfirm: "",
        },
        resolver: yupResolver(registrationFormSchema)
    });

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isModalOpened && !event.target.closest('.modal-window')) {
                toggleModal();
            }
        }
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        }
    }, [isModalOpened, toggleModal]);

    const registerUser = data => console.log(data);

    return (
        <ModalWrapper isModalOpened={isModalOpened}>
            <div className="registration modal-window">
                <div className="registration__title">
                    Регистрация
                </div>
                <div className="registration__close" >
                    <CloseBtnIcon onClick={toggleModal}/>
                </div>
                <div className="registration__form">
                    <form onSubmit={handleSubmit(registerUser)}>
                        <div className="registration__form-name">
                            <div>Ваше имя и фамилия</div>
                            <input
                                type="text"
                                placeholder="Владимир Иванов"
                                name="fullName"
                                {...register("fullName")}
                            />
                            <p className="input__error-message">
                                {errors.fullName?.message}
                            </p>
                        </div>
                        <div className="registration__form-email">
                            <div>Email адрес:</div>
                            <input
                                type="email"
                                placeholder="yourname@mail.com"
                                name="email"
                                {...register("email")}
                            />
                            <p className="input__error-message">
                                {errors.email?.message}
                            </p>
                        </div>
                        <div className="registration__form-password">
                            <div className="password__enter">
                                <div>Ваш пароль для входа</div>
                                <input
                                    type="password"
                                    placeholder="Содержит 8 и более символов"
                                    name="password"
                                    {...register("password")}
                                />
                                <p className="input__error-message">
                                    {errors.password?.message}
                                </p>
                            </div>
                            <div className="password__confirm">
                                <div>Подтвердите пароль</div>
                                <input
                                    type="password"
                                    placeholder="Повторите ваш пароль"
                                    name="passwordConfirm"
                                    {...register("passwordConfirm")}
                                />
                                <p className="input__error-message">
                                    {errors.passwordConfirm?.message}
                                </p>
                            </div>
                        </div>
                        <div className="registration__form-agreements">
                            <div className="registration__form-agreements__agreement">
                                <div className="checkbox" />
                                <div>Получать письма с новостями и акциями</div>
                            </div>
                            <div className="registration__form-agreements__agreement">
                                <div className="checkbox" />
                                <div>
                                    Я прочитал и соглашаюсь с условиями
                                    <br/>
                                    <a className="link" href="#">Политики конфиденциальности</a>
                                </div>
                            </div>
                        </div>
                        <button>
                            Создать аккаунт
                        </button>
                    </form>
                </div>
                <div className="registration__link">
                    <span>У вас есть профиль?</span> <Link to="/authorization">Войти в аккаунт</Link>
                </div>
            </div>
        </ModalWrapper>
    );
};

export default RegistrationModal;