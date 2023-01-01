import React from 'react';
import Counter from "../counter";
import {useDispatch} from "react-redux";
import {removeProductActionCreator} from "../../store/syncReducers/basket";
import {ReactComponent as RemoveBtnIcon} from '../../images/icons/close-btn.svg';
import item1 from '../../images/basket/item-1.png';

const BasketProductCard = ({title, price, id}) => {
    const dispatch = useDispatch()
    const removeProduct = () => dispatch(removeProductActionCreator(id));

    return (
        <div className="basket__items-item">
            <img
                className="basket__items-item__image"
                src={item1}
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