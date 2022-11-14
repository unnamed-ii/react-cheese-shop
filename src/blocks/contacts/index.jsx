import React from 'react';
import './style.scss'
import Wrapper from "../../components/wrapper";
import MainNav from "../../components/main-nav";
import map from '../../images/contacts-map.png';

const Contacts = () => {
    return (
        <Wrapper>
            <div className="contacts">
                <div className="contacts__inner">
                    <MainNav/>
                    <div className="contacts__inner-content">
                        <div className="contacts__title">
                            Контакты
                        </div>
                        <div className="contacts__info">
                            <div className="contacts__info-row">
                                <div className="contacts__info-row__phone">
                                    <div className="contacts__info-row__title">
                                        Телефон:
                                    </div>
                                    <a href="tel:79851425151">+7 9851425151</a>
                                    <a href="tel:79851425151">+7 9851425151</a>
                                </div>
                                <div className="contacts__info-row__schedule">
                                    <div className="contacts__info-row__title">
                                        Мы работаем:
                                    </div>
                                    <div className="contacts__info-row__text">
                                        Понедельник-пятница —
                                        <br/>
                                        <span>с 10:00 до 18:00</span>
                                        <br/>
                                        суббота — выходной
                                        <br/>
                                        воскресенье — выходной
                                    </div>
                                </div>
                                <div className="contacts__info-row__mail">
                                    <div className="contacts__info-row__title">
                                        Электронная почта:
                                    </div>
                                    <div className="contacts__info-row__text">
                                        По вопросам связанным с заказами:
                                        <br/>
                                        <a href="mailto: zakaz@lacheese.ru"> zakaz@lacheese.ru</a>
                                        <br/>
                                        По вопросам сотрудничества:
                                        <br/>
                                        <a href="mailto:opt@lacheese.ru">opt@lacheese.ru</a>
                                    </div>
                                </div>
                            </div>
                            <div className="contacts__info-row">
                                <div className="contacts__info-row__address actual">
                                    <div className="contacts__info-row__title">
                                        Фактический адрес офиса:
                                    </div>
                                    <div className="contacts__info-row__text">
                                        г. Москва,
                                        <br/>
                                        улица Свободы 1/7
                                    </div>
                                </div>
                                <div className="contacts__info-row__entity">
                                    <div className="contacts__info-row__title">
                                        Юр.лицо:
                                    </div>
                                    <div className="contacts__info-row__text">
                                        ИП Андреева Виктория Алексеевна,
                                        <br/>
                                        ИНН 701913850104,
                                        <br/>
                                        ОГРНИП 315501955500072
                                    </div>
                                </div>
                                <div className="contacts__info-row__address legal">
                                    <div className="contacts__info-row__title">
                                        Юр. адрес:
                                    </div>
                                    <div className="contacts__info-row__text">
                                        119048, Россия, Московская область,
                                        г. Лужники, Центральная ул., 17-15
                                    </div>
                                </div>
                            </div>
                        </div>
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
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default Contacts;