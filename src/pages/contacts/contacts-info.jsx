import React from 'react';

const ContactsInfo = () => {
    return (
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
    );
};

export default ContactsInfo;