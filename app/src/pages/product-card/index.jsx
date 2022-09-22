import React from 'react';
import './style.scss';
import Wrapper from "../../components/wrapper";
import MainNav from "../../components/main-nav";
import {ReactComponent as ReviewIcon} from "../../images/icons/review.svg";
import {ReactComponent as SolidHeartIcon} from "../../images/icons/profile/heart-solid.svg";
import {ReactComponent as QuestionIcon} from "../../images/icons/choose-modal-question.svg";
import {ReactComponent as GiftIcon} from "../../images/icons/product-card-page/gift.svg";
import {ReactComponent as CreditCardsIcon} from "../../images/icons/product-card-page/credit-cards.svg";
import {ReactComponent as MedalIcon} from "../../images/icons/product-card-page/medals.svg";
import SimilarProducts from "../../components/similar-products";

const ProductCard = () => {
    return (
        <Wrapper>
            <div className="product-card">
                <div className="product-card__inner">
                    <MainNav/>
                    <div className="product-card__inner-content">
                        <div className="title">
                            Мезофильная закваска Hansen Flora Danica (50U)
                        </div>
                        <div className="rate">
                            <div className="rate__stars">
                                5 stars
                            </div>
                            <a href="#" className="rate__reviews">
                                <ReviewIcon/>
                                2 Отзыва
                            </a>
                        </div>
                        <div className="box">
                            <div className="box__images">

                            </div>
                            <div className="box__info">
                                <div className="box__info-available">
                                    В наличии
                                </div>
                                <div className="box__info-title">
                                    <div className="box__info-title__price">
                                        950 руб.
                                        <span>1200&nbsp;руб.</span>
                                    </div>
                                    <div className="box__info-title__favourite">
                                        <SolidHeartIcon/>
                                        В избранное
                                    </div>
                                </div>
                                <div className="box__info-bonus">
                                    <span>+95</span>бонусных рублей <QuestionIcon/>
                                </div>
                                <div className="box__info-details">
                                    <div className="box__info-details__detail">
                                        Артикул: <span>23006</span>
                                    </div>
                                    <div className="box__info-details__detail">
                                        Производитель: <span>Lactofarm ECO, Италия</span>
                                    </div>
                                </div>
                                <div className="box__info-adding">
                                    <div className="box__info-adding-calculator">
                                        calculator
                                    </div>
                                    <button>
                                        В корзину
                                    </button>
                                </div>
                                <div className="box__info-address">
                                    <div className="box__info-address__title">
                                        Выберите регион для рассчета стоимости доставки:
                                    </div>
                                    <select>
                                        <option>Выберите регион</option>
                                    </select>
                                </div>
                                <div className="box__info-benefits">
                                    <div className="box__info-benefits__benefit">
                                        <GiftIcon/>
                                        Возвращаем 10% бонусами
                                    </div>
                                    <div className="box__info-benefits__benefit">
                                        <CreditCardsIcon/>
                                        Удобные способы оплаты
                                    </div>
                                    <div className="box__info-benefits__benefit">
                                        <MedalIcon/>
                                        Гарантия качества
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <SimilarProducts />
            </div>
        </Wrapper>
    );
};

export default ProductCard;