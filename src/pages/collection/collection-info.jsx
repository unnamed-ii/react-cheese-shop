import React, {useState} from 'react';
import './style.scss';
import Counter from "../../components/counter";
import {ReactComponent as ReviewIcon} from "../../images/icons/review.svg";
import {ReactComponent as HeartIcon} from "../../images/icons/orange-empty-heart.svg";
import {useDispatch} from "react-redux";
import {addProductActionCreator} from "../../store/basket";

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
    }))

    return (
        <div className="collection__box">
            <img src={image} alt="" className="collection__box-img"/>
            <div className="collection__box-info">
                <div className="is-available">
                    {inStock && "В наличии"}
                    {!inStock && "Нет в наличии"}
                </div>
                <div className="title">
                    {title}
                </div>
                <div className="rating">
                    <div className="rating-stars">
                        5 stars
                    </div>
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
                        <button className="to-basket" onClick={addProductToBasket}>
                            В корзину
                        </button>
                        <div className="to-favourite">
                            <HeartIcon/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CollectionInfo;