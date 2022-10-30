import React from "react";
import {ReactComponent as HeartIcon} from "../../images/icons/heart.svg";
import collection from "../../images/collections.png";

export const CollectionCard = ({title, description, price}) => {
    return (
        <div className="collections__group-collection">
            <div className="collections__group-collection__top">
                <div className="text">Топ Продаж</div>
                <HeartIcon/>
            </div>
            <img src={collection} alt="" className="collections__group-collection__image"/>
            <div className="collections__group-collection__title">
                Набор для начинающих на 100 л молока
            </div>
            <div className="collections__group-collection__text">
                Набор ингредиентов для приготовления сыров Имеретинский, Моцарелла, Альметте,
                Качотта,
                Рикотта
            </div>
            <div className="collections__group-collection__bottom">
                <div className="price">
                    2400₽
                </div>
                <button>Добавить</button>
            </div>
        </div>
    )
}