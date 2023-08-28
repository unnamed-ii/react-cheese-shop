import React from "react";
import {ReactComponent as HeartIcon} from "../../images/icons/heart.svg";
import {addProductActionCreator} from "../../store/basket";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import AddToFavouriteButton from "../../components/add-to-favourite-button";
import Button from "../../components/button";

export const CollectionCard = ({
                                   title,
                                   description,
                                   price,
                                   id,
                                   image,
                                   amount = 1
                               }) => {
    const dispatch = useDispatch();
    const addProduct = () => dispatch(addProductActionCreator({title, price, id, amount, image}))

    return (
        <div className="collections__group-collection">
            <div className="collections__group-collection__top">
                <div className="text">Топ Продаж</div>
                <AddToFavouriteButton
                    productId={id}
                    collectionName={"collections"}
                />
            </div>
            <img src={image} alt="" className="collections__group-collection__image"/>
            <Link className="collections__group-collection__title" to={id}>
                {title}
            </Link>
            <Link className="collections__group-collection__text" to={id}>
                {description}
            </Link>
            <div className="collections__group-collection__bottom">
                <div className="price">
                    {price}₽
                </div>
                <Button
                    text={"Добавить"}
                    onClick={addProduct}
                    className={"collection-card"}
                />
            </div>
        </div>
    )
}