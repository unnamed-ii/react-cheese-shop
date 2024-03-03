import React, {useEffect, useState} from 'react';
import './style.scss'
import {useDispatch} from "react-redux";
import {addProductActionCreator} from "../../store/basket";
import card from '../../images/card.png'
import {Link} from "react-router-dom";
import Button from "../button";
import ProductAddedModal from "../modals/product-added";
import {getFileURLFromFirebaseStorage} from "../../api";

const Card = ({
                  title = 'Мезофильная закваска Danisco CHOOZIT MM...',
                  discountPrice = 1300,
                  normalPrice = 1800,
                  id,
                  amount = 1,
                  productImageURL
              }) => {
    const dispatch = useDispatch();
    const [isProductAdded, setIsProductAdded] = useState(false);
    const [imageURL, setImageURL] = useState("");

    useEffect(() => {
        if (productImageURL) {
            void getFileURLFromFirebaseStorage(productImageURL, setImageURL);
        }
    }, [productImageURL]);

    const toggleModal = () => setIsProductAdded(!isProductAdded);

    const addProduct = () => {
        dispatch(addProductActionCreator({title, price: discountPrice, id, amount, productImageURL}));
        setIsProductAdded(!isProductAdded);
    }

    title = `${title.split('').splice(0,35).join('')}...`;

    return (
        <div className="card">
            <img className="card__image" src={imageURL} alt=""/>
            <Link className="card__description" to={`product-page/${id}`}>
                {title}
            </Link>
            <div className="horizontal"/>
            <div className="card__bottom">
                <div className="card__price">
                    {discountPrice}₽/<span> 1 шт.</span>
                    <div className="discount">{normalPrice}₽</div>
                </div>
                <Button
                    text={"Добавить"}
                    className={"product-card"}
                    onClick={addProduct}
                />
            </div>
            <ProductAddedModal
                toggleModal={toggleModal}
                isModalOpened={isProductAdded}
                title={title}
                amount={amount}
                image={imageURL}
            />
        </div>
    );
};

export default Card;