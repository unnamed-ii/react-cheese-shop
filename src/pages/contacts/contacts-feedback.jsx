import React from 'react';
import map from "../../images/contacts-map.png";

const ContactsFeedback = () => {
    return (
        <div className="contacts__feedback">
            <div className="contacts__feedback-form">
                <div className="contacts__feedback-form__title">
                    Остались вопросы?
                </div>
                <div className="contacts__feedback-form__subtitle">
                    Заполните форму и мы вам ответим
                </div>
                <form>
                    <input type="text" placeholder="Ваше Имя"/>
                    <input type="email" placeholder="Email"/>
                    <textarea placeholder="Сообщение или вопрос"/>
                    <button>Отправить</button>
                </form>
            </div>
            <img src={map} alt="" className="contacts__feedback-map"/>
        </div>
    );
};

export default ContactsFeedback;