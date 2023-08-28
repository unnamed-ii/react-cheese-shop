import React from 'react';
import './style.scss';
import AddToFavouriteButton from "../../components/add-to-favourite-button";
import {Link} from "react-router-dom";
import Button from "../../components/button";

const FavouriteTabItem = ({status, image, title, manufacturer, discountPrice, normalPrice, productId}) => {
    return (
        <div className={"favourite-cards__card " + (!status ? "out-of-stock" : "")}>
            <div className="favourite-cards__card-top">
                <div className="text">
                    {status ? "В наличии" : "Нет в наличии"}
                </div>
                <AddToFavouriteButton
                    productId={productId}
                    collectionName={"products"}
                    isAlreadyAdded={true}
                />
            </div>
            <img src={image} alt="" className="favourite-cards__card-image"/>
            <Link to={`/product-card/${productId}`}>
                <div className="favourite-cards__card-title">
                    {title}
                </div>
                <div className="favourite-cards__card-manufacturer">
                    {manufacturer}
                </div>
            </Link>
            <div className="favourite-cards__card-bottom">
                <div className="price">
                    <div className="price__discount">
                        {normalPrice} руб.
                    </div>
                    <div className="price">
                        {discountPrice} руб.
                    </div>
                </div>
                <Button
                    text={"В корзину"}
                    className={"profile-favourites-product-card"}
                />
            </div>
        </div>
    )
}

export default FavouriteTabItem;