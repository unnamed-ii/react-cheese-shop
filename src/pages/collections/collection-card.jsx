import React from "react";
import {ReactComponent as HeartIcon} from "../../images/icons/heart.svg";
import {addProductActionCreator} from "../../store/basket";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";

export const CollectionCard = ({
                                   title = 'Набор для начинающих на 100 л молока',
                                   description = 'Набор ингредиентов для приготовления сыров Имеретинский, Моцарелла, Альметте,Качотта, Рикотта',
                                   price = 2400,
                                   id,
                                   image
                               }) => {
    const dispatch = useDispatch();
    const addProduct = () => dispatch(addProductActionCreator({title, price, id, amount: 1, image}))

    return (
        <div className="collections__group-collection">
            <div className="collections__group-collection__top">
                <div className="text">Топ Продаж</div>
                <HeartIcon/>
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
                <button onClick={addProduct}>Добавить</button>
            </div>
        </div>
    )
}