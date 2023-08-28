import React, {useEffect, useState} from 'react';
import Counter from "../../components/counter";
import {ReactComponent as FullViewIcon} from "../../images/icons/360.svg";
import {ReactComponent as SolidHeartIcon} from "../../images/icons/profile/heart-solid.svg";
import {ReactComponent as QuestionIcon} from "../../images/icons/choose-modal-question.svg";
import {ReactComponent as GiftIcon} from "../../images/icons/product-card-page/gift.svg";
import {ReactComponent as CreditCardsIcon} from "../../images/icons/product-card-page/credit-cards.svg";
import {ReactComponent as MedalIcon} from "../../images/icons/product-card-page/medals.svg";
import productCart from "../../images/product-card-page.png";
import productCart2 from "../../images/product-card-page2.png";
import AddToFavouriteButton from "../../components/add-to-favourite-button";
import {doc, getDoc} from "firebase/firestore";
import {database} from "../../firebase";
import Button from "../../components/button";

const Vendor = ({
                    price,
                    discountPrice,
                    code,
                    manufacturer,
                    addProductToBasket,
                    productsNumber,
                    setProductsNumber,
                    productId,
                    isInStock
                }) => {

    return (
        <div className="vendor">
            <div className="vendor-inner-wrapper">
                <div className="vendor__images">
                    <img className="vendor__images-main" src={productCart} alt=""/>
                    <div className="vendor__images-group">
                        <img src={productCart2} alt=""/>
                        <img src={productCart2} alt=""/>
                        <img src={productCart2} alt=""/>
                    </div>
                    <a href="" className="vendor__images-360__view">
                        <FullViewIcon/>
                        Посмотреть товар в 3D
                    </a>
                </div>
            </div>
            <div className="vendor-inner-wrapper">
                <div className="vendor__info">
                    <div className="vendor__info-available">
                        В наличии
                    </div>
                    <div className="vendor__info-title">
                        <div className="vendor__info-title__price">
                            {discountPrice} руб.
                            <span>{price}&nbsp;руб.</span>
                        </div>
                        <AddToFavouriteButton
                            productId={productId}
                            collectionName={"products"}
                        />
                    </div>
                    <div className="vendor__info-bonus">
                        <span>+95</span>бонусных рублей <QuestionIcon/>
                    </div>
                    <div className="vendor__info-details">
                        <div className="vendor__info-details__detail">
                            Артикул: <span>{code}</span>
                        </div>
                        <div className="vendor__info-details__detail">
                            Производитель: <span>{manufacturer}</span>
                        </div>
                    </div>
                    <div className="vendor__info-adding">
                        <Counter
                            productsNumber={productsNumber}
                            setProductsNumber={setProductsNumber}
                        />
                        {isInStock ?
                            <Button
                                text={"В корзину"}
                                className={"product-page"}
                                onClick={addProductToBasket}
                            />
                            :
                            <Button
                                text={"Товар закончился"}
                                className={"product-page-disabled"}
                            />
                        }
                    </div>
                    <div className="vendor__info-address">
                        <div className="box__info-address__title">
                            Выберите регион для рассчета стоимости доставки:
                        </div>
                        <select>
                            <option>Выберите регион</option>
                            <option>Московская область</option>
                        </select>
                    </div>
                    <div className="vendor__info-benefits">
                        <div className="vendor__info-benefits__benefit">
                            <GiftIcon/>
                            Возвращаем 10% бонусами
                        </div>
                        <div className="vendor__info-benefits__benefit">
                            <CreditCardsIcon/>
                            Удобные способы оплаты
                        </div>
                        <div className="vendor__info-benefits__benefit">
                            <MedalIcon/>
                            Гарантия качества
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Vendor;