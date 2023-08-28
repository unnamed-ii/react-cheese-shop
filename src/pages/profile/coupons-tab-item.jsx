import React from 'react';
import './style.scss';
import Button from "../../components/button";

const CouponsTabItem = ({image, status, title, date, code}) => {
    return (
        <div className={"coupons__coupon " + (status && "active")}>
            <div className="coupons__coupon-info">
                <img src={image} alt=""/>
                <div className="coupons__coupon-info__box">
                    <div className="status">
                        {status ? 'Активный' : 'Не активный'}
                    </div>
                    <div className="title">
                        {title}
                    </div>
                    <div className="subtitle">
                        {date}
                    </div>
                </div>
            </div>
            <div className="coupons__coupon-scan">
                <div className="code">
                    №{code}
                </div>
                <Button
                    text={"Скопировать код"}
                    className={"coupon"}
                    disabled={!status}
                />
            </div>
        </div>
    )
}

export default CouponsTabItem;