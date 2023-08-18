import React, {useState} from 'react';

const TABS__TITLES = [
    {
        name: 'Описание',
        id: 'description',
    },
    {
        name: 'Доставка и оплата',
        id: 'deliveryPayment',
    },
    {
        name: 'Отзывы',
        id: 'reviews',
    }
]

const Tabs = ({description, reviews, characteristics}) => {
    const [activeTab, setActiveTab] = useState("description");
    const handleToggleTab = (id) => setActiveTab(id);

    return (
        <div className="tabs-wrapper">
            <div className="tabs">
                <div className="tabs__titles">
                    {TABS__TITLES.map(tabTitle => (
                        <button className={"tabs__titles-title " + (activeTab === tabTitle.id && "active")}
                                onClick={(e) => handleToggleTab(e.target.id)}
                                id={tabTitle.id}
                                key={tabTitle.id}
                        >
                            {tabTitle.name}
                            &nbsp;
                            {tabTitle.id === "reviews" && `(${reviews?.length})`}
                        </button>
                    ))}
                </div>
                <div className="tabs__items">
                    <div className={"tabs__items-description " + (activeTab === "description" && "active")}>
                        <div className="tabs__items-description__text">
                            {description}
                        </div>
                        <div className="tabs__items-description__rows">
                            {characteristics?.map(characteristic => (
                                <div className="row" key={characteristic.name + characteristic.value}>
                                    <div className="row__title">
                                        {characteristic.name}
                                    </div>
                                    <div className="row__text">
                                        {characteristic.value}
                                    </div>
                                </div>
                            ))}
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
                        {reviews?.map((review) => (
                            <div key={review.userId} className="tabs__items-reviews__review">
                                <h3>{review.userName}</h3>
                                <p>{review.userReview}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tabs;