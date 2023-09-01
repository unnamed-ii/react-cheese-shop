import React, {useEffect, useState} from 'react';
import './style.scss';
import Button from "../../components/button";
import {getFileURLFromFirebaseStorage} from "../../utils/getFileFromFirebaseStorage";

const OrdersTabItem = ({productImageURL, title, code = 323432, price, amount}) => {
    const [imageURL, setImageURL] = useState("");
    useEffect(() => {
        if (productImageURL) {
            getFileURLFromFirebaseStorage(productImageURL, setImageURL);
        }
    }, [productImageURL]);

    return (
        <div className="table__item">
            <img src={imageURL} alt="" className="table__item-image"/>
            <div className="table__item-info">
                <div className="table__item-info__title">
                    {title}
                </div>
                <div className="table__item-info__code">
                    Код товара: {code}
                </div>
            </div>
            <div className="table__item-price">
                {price} ₽
            </div>
            <div className="table__item-amount">
                {amount} шт.
            </div>
            <div className="table__item-total">
                {price * amount} ₽
            </div>
            <Button
                text={"Добавить"}
                className={"profile-orders-product-card"}
            />
        </div>
    )
}

export default OrdersTabItem;