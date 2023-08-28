import React, {useState} from 'react';
import './style.scss';
import Counter from "../../components/counter";
import {ReactComponent as ReviewIcon} from "../../images/icons/review.svg";
import {ReactComponent as HeartIcon} from "../../images/icons/orange-empty-heart.svg";
import {useDispatch} from "react-redux";
import {addProductActionCreator} from "../../store/basket";
import AddToFavouriteButton from "../../components/add-to-favourite-button";
import Button from "../../components/button";
import Rating from "@mui/material/Rating";
import Title from "../../components/title";

const CollectionInfo = ({
                            price,
                            inStock,
                            title,
                            shortDescription,
                            id,
                            image,
                            amount = 1
                        }) => {
    const dispatch = useDispatch();
    const [productsNumber, setProductsNumber] = useState(amount);
    const addProductToBasket = () => dispatch(addProductActionCreator({
        title,
        price,
        id,
        amount: productsNumber,
        image
    }));

    return (
        <div className="collection__box">
            <img src={image} alt="" className="collection__box-img"/>
            <div className="collection__box-info">
                <div className="is-available">
                    {inStock ? "В наличии" : "Нет в наличии"}
                </div>
                <Title
                    title={title}
                    className={"collection-page"}
                />
                <div className="rating">
                    <Rating
                        defaultValue={5}
                        readOnly
                    />
                    <div className="rating-reviews">
                        <ReviewIcon className="review-icon"/>
                        10 Отзывов
                    </div>
                </div>
                <div className="price">
                    {price} руб.
                </div>
                <div className="short-description">
                    {shortDescription}
                </div>
                <div className="bottom">
                    <div className="bottom__title">
                        Количество
                    </div>
                    <div className="bottom__box">
                        <Counter
                            productsNumber={productsNumber}
                            setProductsNumber={setProductsNumber}
                        />
                        <Button
                            text={"В корзину"}
                            onClick={addProductToBasket}
                            className={"calculator-page"}
                        />
                        <AddToFavouriteButton
                            productId={id}
                            collectionName={"collections"}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CollectionInfo;