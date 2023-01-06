import React from 'react';
import './style.scss';
import Counter from "../../components/counter";
import {ReactComponent as ReviewIcon} from "../../images/icons/review.svg";
import {ReactComponent as HeartIcon} from "../../images/icons/orange-empty-heart.svg";
import collection from "../../images/collections.png";

const CollectionInfo = () => {
    return (
        <div className="collection__box">
            <img src={collection} alt="" className="collection__box-img"/>
            <div className="collection__box-info">
                <div className="is-available">
                    В наличии
                </div>
                <div className="title">
                    Набор для начинающих на 100 л молока
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
                    2800 руб.
                </div>
                <div className="short-description">
                    Краткое описание: <span>набор ингредиентов для приготовления сыров Имеретинский, Моцарелла,
                            Альметте, Качотта, Рикотта</span>
                </div>
                <div className="bottom">
                    <div className="bottom__title">
                        Количество
                    </div>
                    <div className="bottom__box">
                        <Counter />
                        <button className="to-basket">В корзину</button>
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