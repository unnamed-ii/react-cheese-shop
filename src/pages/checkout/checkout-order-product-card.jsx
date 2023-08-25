import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {removeProductActionCreator} from "../../store/basket";
import Counter from "../../components/counter";
import productImage from "../../images/checkout-products-image.png";

export const CheckoutOrderProductCard = ({
                                             image = productImage,
                                             title,
                                             price,
                                             id,
                                             code = 260521,
                                             amount = 1
                                         }) => {
    const dispatch = useDispatch();
    const [productsNumber, setProductsNumber] = useState(amount);
    const removeProduct = () => dispatch(removeProductActionCreator(id))

    return (
        <div className="checkout__info-order__product">
            <img src={image} alt=""/>
            <div className="info">
                <div className="info__title">
                    {title}
                </div>
                <div className="info__vendor-code">
                    Артикул: {code}
                </div>
                <button className="info__remove" onClick={removeProduct}>
                    Удалить
                </button>
            </div>
            <Counter
                productsNumber={productsNumber}
                setProductsNumber={setProductsNumber}
            />
            <div className="price">
                {price} ₽ x {amount}шт
            </div>
        </div>
    )
}