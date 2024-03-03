import React, {useEffect, useState} from 'react';
import Counter from "../counter";
import {useDispatch} from "react-redux";
import {removeProductActionCreator, setProductNumberActionCreator} from "../../store/basket";
import {ReactComponent as RemoveBtnIcon} from '../../images/icons/close-btn.svg';
import {getFileURLFromFirebaseStorage} from "../../api";

const BasketProductCard = ({title, price, id, productImageURL, amount = 1}) => {
    const dispatch = useDispatch();
    const [productsNumber, setProductsNumber] = useState(amount);
    const [imageURL, setImageURL] = useState("");

    useEffect(() => {
        if (productImageURL) {
            void getFileURLFromFirebaseStorage(productImageURL, setImageURL);
        }
    }, [productImageURL]);

    const removeProduct = () => dispatch(removeProductActionCreator(id));

    useEffect(() => {
        dispatch(setProductNumberActionCreator({
            id: id,
            amount: productsNumber,
            price: price
        }));
    }, [productsNumber]);

    return (
        <div className="basket__items-item">
            <img
                className="basket__items-item__image"
                src={imageURL}
                alt="image"
            />
            <div className="basket__items-item__box">
                <div className="basket__box-title">
                    {title}
                </div>
                <Counter
                    productsNumber={productsNumber}
                    setProductsNumber={setProductsNumber}
                />
            </div>
            <RemoveBtnIcon className="basket__items-item__remove" onClick={removeProduct}/>
            <div className="basket__items-item__price">
                {price}руб x {productsNumber}шт
            </div>
        </div>
    )
};

export default BasketProductCard;