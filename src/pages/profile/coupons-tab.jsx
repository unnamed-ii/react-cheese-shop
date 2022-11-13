import React from 'react';
import './style.scss';
import CouponsTabItem from "./coupons-tab-item";
import couponActive from "../../images/profile-coupon-active.png";

const CouponsTab = ({activeTab}) => {
    return (
        <div className={"profile__tabs-item " + (activeTab === "coupons" && "active coupons")}>
            <CouponsTabItem
                image={couponActive}
                status={true}
                title={"Скидочный купон на 300 руб."}
                date={"До 20 июня 2021 г."}
                code={1234556}
            />
            <CouponsTabItem
                image={couponActive}
                status={false}
                title={"Скидочный купон на 500 руб."}
                date={"Срок действия закончился"}
                code={1234556}
            />
        </div>
    );
};

export default CouponsTab;