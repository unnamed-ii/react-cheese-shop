import React from 'react';
import './style.scss';
import couponActive from "../../images/profile-coupon-active.png";

const CouponsTab = ({activeTab}) => {

    return (
        <div className={"profile__tabs-item " + (activeTab === "coupons" && "active coupons")}>
            <div className="coupons__coupon active">
                <div className="coupons__coupon-info">
                    <img src={couponActive} alt=""/>
                    <div className="coupons__coupon-info__box">
                        <div className="status">
                            Активный
                        </div>
                        <div className="title">
                            Скидочный купон на 300 руб.
                        </div>
                        <div className="subtitle">
                            До 20 июня 2021 г.
                        </div>
                    </div>
                </div>
                <div className="coupons__coupon-scan">
                    <div className="code">
                        №1234556
                    </div>
                    <button>Скопировать код</button>
                </div>
            </div>
            <div className="coupons__coupon">
                <div className="coupons__coupon-info">
                    <img src={couponActive} alt=""/>
                    <div className="coupons__coupon-info__box">
                        <div className="status">
                            Не активный
                        </div>
                        <div className="title">
                            Скидочный купон на 500 руб.
                        </div>
                        <div className="subtitle">
                            Срок действия закончился
                        </div>
                    </div>
                </div>
                <div className="coupons__coupon-scan">
                    <div className="code">
                        №1234556
                    </div>
                    <button>Скопировать код</button>
                </div>
            </div>
        </div>
    );
};

export default CouponsTab;