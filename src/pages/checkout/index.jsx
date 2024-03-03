import React, {useContext, useState} from 'react';
import './style.scss';
import CheckoutContactInfo from "./checkout-contact-info";
import CheckoutOrder from "./checkout-order";
import CheckoutDelivery from "./checkout-delivery";
import CheckoutTotals from "./checkout-totals";
import CheckoutPayment from "./checkout-payment";
import Wrapper from "../../components/wrapper";
import Title from "../../components/title";
import {russianRegions} from "./constants";
import {useDispatch, useSelector} from "react-redux";
import LoadingAnimation from "../../components/loadingAnimation/loadingAnimation";
import {LoadingAnimationContext} from "../../Context";
import {useNavigate} from "react-router-dom";
import {leaveOrder} from "../../api";

const Checkout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const selectedProduct = useSelector(state => state.basket.products);
    const {isLoading, setIsLoading} = useContext(LoadingAnimationContext);
    const userId = JSON.parse(localStorage.getItem("userInfo")).id;
    const [order, setOrder] = useState({
        products: [...selectedProduct],
        deliveryMethod: "Курьер",
        userInfo: {
            fullName: "",
            phoneNumber: "",
            country: "",
            region: russianRegions[0],
            address: "",
            index: ""
        },
        paymentMethod: "Онлайн оплата"
    })

    const setRegion = (e) => {
        setOrder(prevState => ({
            ...prevState,
            userInfo: {
                ...prevState.userInfo,
                region: e.target.value
            }
        }))
    }

    const setPaymentMethod = (e) => {
        setOrder(prevState => ({
            ...prevState,
            paymentMethod: e.target.id
        }))
    }

    const setDeliveryMethod = (e) => {
        setOrder(prevState => ({
            ...prevState,
            deliveryMethod: e.target.id
        }))
    }

    const setField = (e) => {
        setOrder(prevState => ({
            ...prevState,
            userInfo: {
                ...prevState.userInfo,
                [e.target.name]: e.target.value
            }
        }))
    }

    return (
        <Wrapper>
            <LoadingAnimation isLoading={isLoading}/>
            <div className="checkout">
                <div className="checkout__info">
                    <Title
                        title={"Оформление заказа"}
                        className={"page"}
                    />
                    <CheckoutContactInfo/>
                    <CheckoutOrder/>
                    <CheckoutDelivery
                        setRegion={setRegion}
                        setDeliveryMethod={setDeliveryMethod}
                        deliveryMethod={order.deliveryMethod}
                        setField={setField}
                        userInfo={order.userInfo}
                    />
                    <CheckoutPayment
                        setPaymentMethod={setPaymentMethod}
                        paymentMethod={order.paymentMethod}
                    />
                </div>
                <CheckoutTotals
                    leaveOrder={() => leaveOrder(setIsLoading, order, userId, navigate, dispatch)}
                />
            </div>
        </Wrapper>
    );
};

export default Checkout;