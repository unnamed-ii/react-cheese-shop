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
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d560.3195353175951!2d37.448958213533736!3d55.82313142425582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z0YPQu9C40YbQsCDQodCy0L7QsdC-0LTRiyDQm9Cg0J_RgNCw0LnQtCwg0JzQvtGB0LrQstCwLCDQoNC-0YHRgdC40Y8!5e0!3m2!1sru!2str!4v1691875935658!5m2!1sru!2str"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="contacts__feedback-map"/>
        </div>
    );
};

export default ContactsFeedback;