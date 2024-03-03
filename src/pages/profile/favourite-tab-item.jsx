import React, {useEffect, useState} from 'react';
import './style.scss';
import AddToFavouriteButton from "../../components/add-to-favourite-button";
import {Link} from "react-router-dom";
import Button from "../../components/button";
import {getFileURLFromFirebaseStorage} from "../../api";

const FavouriteTabItem = ({
                              status,
                              productImageURL,
                              title,
                              manufacturer,
                              discountPrice,
                              normalPrice,
                              productId,
                              updateShowingFavouriteProductsList
                          }) => {
    const [imageURL, setImageURL] = useState("");
    console.log(productImageURL)
    useEffect(() => {
        if (productImageURL) {
            void getFileURLFromFirebaseStorage(productImageURL, setImageURL);
        }
    }, [productImageURL]);

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
                    updateShowingFavouriteProductsList={updateShowingFavouriteProductsList}
                />
            </div>
            <img src={imageURL} alt="" className="favourite-cards__card-image"/>
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