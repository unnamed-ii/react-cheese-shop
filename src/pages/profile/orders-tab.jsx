import React, {useContext, useEffect, useState} from 'react';
import './style.scss';
import OrdersTabItem from "./orders-tab-item";
import productImage from "../../images/checkout-products-image.png";
import Title from "../../components/title";
import {LoadingAnimationContext} from "../../Context";
import LoadingAnimation from "../../components/loadingAnimation/loadingAnimation";
import {database} from "../../firebase";
import { doc, getDoc} from "firebase/firestore";

const OrdersTab = ({activeTab}) => {
    const {isLoading, setIsLoading} = useContext(LoadingAnimationContext);
    const userId = JSON.parse(localStorage.getItem("userInfo")).id;
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        const getUsersPreviousOrders = async () => {
            try {
                setIsLoading(true);
                const userRef = await doc(database, "users", userId);
                const userData = await getDoc(userRef);
                const usersPreviousOrders = userData.data().orders;
                setOrders([...usersPreviousOrders]);
                setIsLoading(false);
            } catch (e) {
                console.log(e)
            }
        }
        getUsersPreviousOrders();
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