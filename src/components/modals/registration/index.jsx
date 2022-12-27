import React from 'react';
import './style.scss'
import ModalWrapper from "../../modal-wrapper";
import {ReactComponent as CloseBtnIcon} from '../../../images/icons/close-moduls-btn.svg'
import {Link} from "react-router-dom";

const RegistrationModal = ({toggleModal}) => {

    return (
        <ModalWrapper toggleModal={toggleModal}>
            <div className="registration">
                <div className="registration__title">
                    Регистрация
                </div>
                <div className="registration__close" >
                    <CloseBtnIcon onClick={toggleModal}/>
                </div>
                <div className="registration__form">
                    <form>
                        <div className="registration__form-name">
                            <div>Ваше имя и фамилия</div>
                            <input type="text" placeholder="Владимир Иванов"/>
                        </div>
                        <div className="registration__form-email">
                            <div>Email адрес:</div>
                            <input type="email" placeholder="yourname@mail.com"/>
                        </div>
                        <div className="registration__form-password">
                            <div className="password__enter">
                                <div>Ваш пароль для входа</div>
                                <input type="password" placeholder="Содержит 8 и более символов"/>
                            </div>
                            <div className="password__confirm">
                                <div>Подтвердите пароль</div>
                                <input type="password" placeholder="Повторите ваш пароль"/>
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