import React, {useEffect} from 'react';
import './style.scss'
import ModalWrapper from "../../modal-wrapper";
import {ReactComponent as CloseBtnIcon} from '../../../images/icons/close-moduls-btn.svg'
import {Link} from "react-router-dom";
import {authorizationFormSchema} from "../../../utils/validationShemes";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";

const LoginModal = ({toggleModal, isModalOpened}) => {
    const {register, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
        resolver: yupResolver(authorizationFormSchema)
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

    const logIn = (data) => console.log(data);

    return (
        <ModalWrapper isModalOpened={isModalOpened}>
            <div className="login modal-window">
                <div className="login__title">
                    Вход в аккаунт
                </div>
                <button className="login__close" onClick={toggleModal}>
                    <CloseBtnIcon/>
                </button>
                <div className="login__form">
                    <form onSubmit={handleSubmit(logIn)}>
                        <div className="email">
                            <div className="title">
                                Email адрес:
                            </div>
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
                        <div className="password">
                            <div className="title">
                                Пароль
                            </div>
                            <input
                                type="password"
                                placeholder="Ваш пароль"
                                name="password"
                                {...register("password")}
                            />
                            <p className="input__error-message">
                                {errors.password?.message}
                            </p>
                        </div>
                        <button>
                            Войти
                        </button>
                    </form>
                    <div className="login__form-link">
                        <Link to="/recovery">Забыли пароль?</Link>
                    </div>
                </div>
                <div className="login__link">
                    У вас нет профиля? <Link to="/registration">Создайте аккаунт</Link>
                </div>
            </div>
        </ModalWrapper>
    );
};

export default LoginModal;