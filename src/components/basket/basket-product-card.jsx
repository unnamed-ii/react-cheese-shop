import React from 'react';
import Counter from "../counter";
import {useDispatch} from "react-redux";
import {removeProductActionCreator} from "../../store/basket";
import {ReactComponent as RemoveBtnIcon} from '../../images/icons/close-btn.svg';

const BasketProductCard = ({title, price, id, image}) => {
    const dispatch = useDispatch()
    const removeProduct = () => dispatch(removeProductActionCreator(id));

    return (
        <div className="basket__items-item">
            <img
                className="basket__items-item__image"
                src={image}
                alt="image"
            />
            <div className="basket__items-item__box">
                <div className="basket__box-title">
                    {title}
                </div>
                <Counter/>
            </div>
            <RemoveBtnIcon className="basket__items-item__remove" onClick={removeProduct}/>
            <div className="basket__items-item__price">
                {price}руб
            </div>
        </div>
    )
};

export default BasketProductCard;