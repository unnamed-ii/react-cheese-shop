import React from 'react';
import './style.scss'

import {ReactComponent as CloseBtnIcon} from '../../../images/icons/close-moduls-btn.svg'

const ResetPasswordModal = () => {
    return (
        <div className="reset-wrapper">
            <div className="reset">
                <div className="reset__title">
                    Восстановить пароль
                </div>
                <div className="reset__close">
                    <CloseBtnIcon />
                </div>
                <div className="reset__form">
                    <div className="reset__form-text">
                        Введите адрес электронной почты Вашей учетной записи. Нажмите кнопку продолжить, чтобы получить
                        пароль по электронной почте.
                    </div>
                    <form>
                        <div className="email">
                            <div>Email адрес:</div>
                            <input type="email" placeholder="yourname@mail.com"/>
                        </div>
                        <button>Продолжить</button>
                    </form>
                </div>
                <div className="reset__link">
                    У вас нет профиля? <a href="#">Создайте аккаунт</a>
                </div>
            </div>
        </div>
    );
};

export default ResetPasswordModal;