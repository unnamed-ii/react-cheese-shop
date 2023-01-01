import React from 'react';
import Counter from "../counter";
import {ReactComponent as RemoveBtnIcon} from '../../images/icons/close-btn.svg';
import item1 from '../../images/basket/item-1.png';

const BasketProductCard = ({title, price}) => {
    return (
            <div className="basket__items-item">
                <img className="basket__items-item__image" src={item1} alt=""/>
                <div className="basket__items-item__box">
                    <div className="basket__box-title">
                        {title}
                    </div>
                    <Counter />
                </div>
                <RemoveBtnIcon className="basket__items-item__remove"/>
                <div className="basket__items-item__price">
                    {price}руб
                </div>
            </div>
        )
};

export default BasketProductCard;