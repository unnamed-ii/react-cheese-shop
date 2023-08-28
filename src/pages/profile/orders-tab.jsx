import React from 'react';
import './style.scss';
import OrdersTabItem from "./orders-tab-item";
import productImage from "../../images/checkout-products-image.png";
import Title from "../../components/title";

const OrdersTab = ({activeTab}) => {
    return (
        <div className={"profile__tabs-item " + (activeTab === "orders" && "active orders")}>
            <Title
                title={"Мои заказы"}
                className={"profile-page__tab-title"}
            />
            <div className="subtitle">
                Список ваших прошлых покупок
            </div>
            <div className="table">
                <div className="table__headline">
                    <div className="table__headline-title main">
                        Товар
                    </div>
                    <div className="table__headline-title">
                        Стоимость
                    </div>
                    <div className="table__headline-title">
                        Количество
                    </div>
                    <div className="table__headline-title">
                        Итого
                    </div>
                </div>
                <div className="table__items">
                    <OrdersTabItem
                        image={productImage}
                        title={"Кардамон молотый 50 г"}
                        code={323432}
                        priceForProduct={300}
                        amount={2}
                        totalPrice={600}
                    />
                    <OrdersTabItem
                        image={productImage}
                        title={"Кардамон молотый 50 г"}
                        code={323432}
                        priceForProduct={300}
                        amount={2}
                        totalPrice={600}
                    />
                    <OrdersTabItem
                        image={productImage}
                        title={"Кардамон молотый 50 г"}
                        code={323432}
                        priceForProduct={300}
                        amount={2}
                        totalPrice={600}
                    />
                </div>
            </div>
        </div>
    );
};

export default OrdersTab;