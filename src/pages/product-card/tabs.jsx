import React, {useState} from 'react';

const Tabs = () => {
    const [activeTab, setActiveTab] = useState("description");

    const handleToggleTab = (id) => {
        setActiveTab(id)
    }

    return (
        <div className="tabs-wrapper">
            <div className="tabs">
                <div className="tabs__titles">
                    <button className={"tabs__titles-title " + (activeTab === "description" && "active")}
                            onClick={(e) => handleToggleTab(e.target.id)}
                            id="description">
                        Описание
                    </button>
                    <button className={"tabs__titles-title " + (activeTab === "deliveryPayment" && "active")}
                            onClick={(e) => handleToggleTab(e.target.id)}
                            id="deliveryPayment">
                        Доставка и оплата
                    </button>
                    <button className={"tabs__titles-title " + (activeTab === "reviews" && "active")}
                            onClick={(e) => handleToggleTab(e.target.id)}
                            id="reviews">
                        Отзывы (3)
                    </button>
                </div>
                <div className="tabs__items">
                    <div className={"tabs__items-description " + (activeTab === "description" && "active")}>
                        <div className="tabs__items-description__text">
                            P00802 Эта форма небольших размеров предназначена для получения маленьких
                            головок сыра Рикотта и других мягких сыров в условиях домашнего или фермерского
                            производства. Наличие хорошего дренажа обеспечивает ее использование для
                            прессования сыров с плесенью, в том числе сорта Французский нешатель. Размер
                            сырной головки, которую удается получить при использовании этой формы – до 80 г.
                            Это аккуратный, готовый к подаче кусочек сыра, который не придется нарезать.
                            Изготовлена форма из специального высококачественного пищевого пластика, который
                            хорошо адаптирован к агрессивной молочнокислой среде.
                        </div>
                        <div className="tabs__items-description__rows">
                            <div className="row">
                                <div className="row__title">
                                    Выход сыра
                                </div>
                                <div className="row__text">
                                    до 5-6 кг
                                </div>
                            </div>
                            <div className="row">
                                <div className="row__title">
                                    Материал
                                </div>
                                <div className="row__text">
                                    высококачественный пищевой пластик
                                </div>
                            </div>
                            <div className="row">
                                <div className="row__title">
                                    Наличие дна
                                </div>
                                <div className="row__text">
                                    есть
                                </div>
                            </div>
                            <div className="row">
                                <div className="row__title">
                                    Наличие ножек
                                </div>
                                <div className="row__text">
                                    нет
                                </div>
                            </div>
                            <div className="row">
                                <div className="row__title">
                                    Размеры
                                </div>
                                <div className="row__text">
                                    высота - 22 см, диаметр верха - 27 см
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"tabs__items-deliveryPayment " + (activeTab === "deliveryPayment" && "active")}>
                        <div className="tabs__items-deliveryPayment__title">
                            Для Вашего удобства мы предусмотрели все возможные способы оплаты заказа:
                        </div>
                        <div className="tabs__items-deliveryPayment__rows">
                            <div className="row">
                                <div className="row__title">
                                    Предоплата по счету
                                </div>
                                <div className="row__text">
                                    При оформлении заказа выберите в поле оплаты "счёт для юридических лиц"
                                    и введите реквизиты. Счет на оплату будет выслан на электронную почту.
                                </div>
                            </div>
                            <div className="row">
                                <div className="row__title">
                                    Он-лайн оплата
                                </div>
                                <div className="row__text">
                                    Поможет приготовить вам вкусный творог в домашних условиях. В данном
                                    продукте есть минеральные вещества и белки, которые необходимы
                                    организму.
                                </div>
                            </div>
                            <div className="row">
                                <div className="row__title">
                                    Наличными при получении
                                </div>
                                <div className="row__text">
                                    2 недели с соблюдением температуры.
                                </div>
                            </div>
                            <div className="row">
                                <div className="row__title">
                                    Доставка по Новосибирску
                                </div>
                                <div className="row__text">
                                    Вы можете забрать товар из нашего магазина самостоятельно, приехав по
                                    адресу: г. Новосибирск, ул. Котовского, д. 12/1, офис 1. Или заказать
                                    курьерскую доставку до двери. Стоимость доставки – 150 рублей.
                                </div>
                            </div>
                            <div className="row">
                                <div className="row__title">
                                    Доставка по РФ
                                </div>
                                <div className="row__text">
                                    Доставка по РФ осуществляется логистическими службами СДЭК и Почта
                                    России. В любой момент Вы можете отследить путь своего заказа по
                                    трек-номеру.
                                    Приблизительные сроки и стоимость доставки указаны в таблице ниже.
                                    Окончательная сумма зависит от веса и способа оплаты заказа (при
                                    наложенном платеже – стоимость доставки выше) и рассчитывается
                                    автоматически в момент оформления.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"tabs__items-reviews " + (activeTab === "reviews" && "active")}>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tabs;