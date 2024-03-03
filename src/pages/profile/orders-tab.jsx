import React, {useContext, useEffect, useState} from 'react';
import './style.scss';
import OrdersTabItem from "./orders-tab-item";
import Title from "../../components/title";
import {LoadingAnimationContext} from "../../Context";
import LoadingAnimation from "../../components/loadingAnimation/loadingAnimation";
import {getUsersPreviousOrders} from "../../api";

const OrdersTab = ({activeTab}) => {
    const {isLoading, setIsLoading} = useContext(LoadingAnimationContext);
    const userId = JSON.parse(localStorage.getItem("userInfo")).id;
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        void getUsersPreviousOrders(setIsLoading, userId, setOrders);
    }, [])

    return (
        <div className={"profile__tabs-item " + (activeTab === "orders" && "active orders")}>
            <LoadingAnimation isLoading={isLoading}/>
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
                    {orders?.map((order) => (
                        <OrdersTabItem
                            key={order.id}
                            title={order.title}
                            price={order.price}
                            amount={order.amount}
                            productImageURL={order.image}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OrdersTab;