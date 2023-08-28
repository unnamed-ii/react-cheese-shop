import React from 'react';
import './style.scss'
import Wrapper from "../../components/wrapper";
import MainNav from "../../components/main-nav";
import DeliveryTable from "./delivery-table";
import DeliveryPayment from "./delivery-payment";
import DeliveryMethods from "./delivery-methods";
import Title from "../../components/title";

const Delivery = () => {
    return (
        <Wrapper>
            <div className="delivery">
                <div className="delivery__inner">
                    <div className="delivery__inner-top">
                        <MainNav/>
                        <div className="delivery__inner-content">
                            <Title
                                title={"Доставка и оплата"}
                                className={"page"}
                            />
                            <DeliveryPayment/>
                            <DeliveryMethods/>
                        </div>
                    </div>
                    <DeliveryTable/>
                </div>
            </div>
        </Wrapper>
    )
};

export default Delivery;