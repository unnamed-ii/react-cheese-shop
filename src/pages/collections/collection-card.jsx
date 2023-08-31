import React, {useState} from "react";
import {addProductActionCreator} from "../../store/basket";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import AddToFavouriteButton from "../../components/add-to-favourite-button";
import Button from "../../components/button";
import Title from "../../components/title";
import ProductAddedModal from "../../components/modals/product-added";

export const CollectionCard = ({
                                   title,
                                   description,
                                   price,
                                   id,
                                   image,
                                   amount = 1
                               }) => {
    const dispatch = useDispatch();
    const basketProducts = useSelector(state => state.basket.products);
    const [isCollectionAdded, setIsCollectionAdded] = useState(false);
    const toggleModal = () => setIsCollectionAdded(!isCollectionAdded);
    const addProduct = () => {
        let isProductInBasket = false;
        for (let product of basketProducts) {
            if (product.id === id) {
                isProductInBasket = true;
                break;
            }
        }
        if (!isProductInBasket) {
            dispatch(addProductActionCreator({title, price, id, amount, image}));
            toggleModal();
        } else {
            alert("Уже в корзине");
        }
    }

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
            <Link to={id}>
                <Title
                    title={title}
                    className={"collection-card"}
                />
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
            <ProductAddedModal
                toggleModal={toggleModal}
                isModalOpened={isCollectionAdded}
                title={title}
                amount={amount}
            />
        </div>
    )
}