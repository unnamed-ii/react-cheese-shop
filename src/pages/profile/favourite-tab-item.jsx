import React from 'react';
import './style.scss';
import {ReactComponent as HeartSolidIcon} from "../../images/icons/profile/heart-solid.svg";

const FavouriteTabItem = ({status = "", image, title, subtitle, discountPrice, normalPrice}) => {
    return (
        <div className={"favourite-cards__card " + status}>
            <div className="favourite-cards__card-top">
                <div className="text">
                    {status === "out-of-stock" ? "Нет в наличии" : "В наличии"}
                </div>
                <HeartSolidIcon/>
            </div>
            <img src={image} alt="" className="favourite-cards__card-image"/>
            <div className="favourite-cards__card-title">
                {title}
            </div>
            <div className="favourite-cards__card-subtitle">
                {subtitle}
            </div>
            <div className="favourite-cards__card-bottom">
                <div className="price">
                    <div className="price__discount">
                        {normalPrice} руб.
                    </div>
                    <div className="price">
                        {discountPrice} руб.
                    </div>
                </div>
                <button>
                    В корзину
                </button>
            </div>
        </div>
    )
}

export default FavouriteTabItem;