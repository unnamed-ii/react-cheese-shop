import React, {useState} from 'react';
import './style.scss';
import CheckoutContactInfo from "./checkout-contact-info";
import CheckoutOrder from "./checkout-order";
import CheckoutDelivery from "./checkout-delivery";
import CheckoutTotals from "./checkout-totals";
import CheckoutPayment from "./checkout-payment";
import Wrapper from "../../components/wrapper";
import PageTitle from "../../components/page-title";
import {russianRegions} from "./constants";
import {useSelector} from "react-redux";

const Checkout = () => {
    const selectedProduct = useSelector(state => state.basket.products)
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
            <div className="checkout">
                <div className="checkout__info">
                    <PageTitle title={"Оформление заказа"}/>
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
                <CheckoutTotals/>
            </div>
        </Wrapper>
    );
};

export default Checkout;