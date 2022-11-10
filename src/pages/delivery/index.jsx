import React from 'react';
import './style.scss'
import Wrapper from "../../components/wrapper";
import MainNav from "../../components/main-nav";
import DeliveryTable from "./delivery-table";
import DeliveryPayment from "./delivery-payment";
import DeliveryMethods from "./delivery-methods";

const Delivery = () => {
    return (
        <Wrapper>
            <div>
                <div className="delivery">
                    <div className="delivery__inner">
                        <MainNav/>
                        <div className="delivery__inner-content">
                            <div className="delivery__title">
                                Доставка и оплата
                            </div>
                            <DeliveryPayment />
                            <DeliveryMethods />
                        </div>
                    </div>
                </div>
                <DeliveryTable />
            </div>
        </Wrapper>
    )
};

export default Delivery;