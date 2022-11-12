import React from 'react';
import './style.scss';
import {ReactComponent as HeartSolidIcon} from "../../images/icons/profile/heart-solid.svg";
import favouriteProduct from "../../images/favourite-product.png";

const FavouriteTab = ({activeTab}) => {

    return (
        <div className={"profile__tabs-item " + (activeTab === "favourite" && "active favourite")}>
            <div className="title">
                Избранные товары
            </div>
            <div className="subtitle">
                Товары, которые вы добавили в список будуших покупок
            </div>
            <div className="favourite-cards">
                <div className="favourite-cards__card">
                    <div className="favourite-cards__card-top">
                        <div className="text">
                            В наличии
                        </div>
                        <HeartSolidIcon/>
                    </div>
                    <img src={favouriteProduct} alt="" className="favourite-cards__card-image"/>
                    <div className="favourite-cards__card-title">
                        Форма для твердого сыра 1 кг - 40 отверстий
                    </div>
                    <div className="favourite-cards__card-subtitle">
                        БК-Углич-ЛД 1 Е.А.
                    </div>
                    <div className="favourite-cards__card-bottom">
                        <div className="price">
                            <div className="price__discount">
                                3400 руб.
                            </div>
                            <div className="price">
                                2300 руб.
                            </div>
                        </div>
                        <button>
                            В корзину
                        </button>
                    </div>
                </div>
                <div className="favourite-cards__card out-of-stock">
                    <div className="favourite-cards__card-top">
                        <div className="text">
                            Нет в наличии
                        </div>
                        <HeartSolidIcon/>
                    </div>
                    <img src={favouriteProduct} alt="" className="favourite-cards__card-image"/>
                    <div className="favourite-cards__card-title">
                        Форма для твердого сыра 1 кг - 40 отверстий
                    </div>
                    <div className="favourite-cards__card-subtitle">
                        БК-Углич-ЛД 1 Е.А.
                    </div>
                    <div className="favourite-cards__card-bottom">
                        <div className="price">
                            <div className="price__discount">
                                3400 руб.
                            </div>
                            <div className="price">
                                2300 руб.
                            </div>
                        </div>
                        <button disabled={true}>
                            В корзину
                        </button>
                    </div>
                </div>
                <div className="favourite-cards__card">
                    <div className="favourite-cards__card-top">
                        <div className="text">
                            В наличии
                        </div>
                        <HeartSolidIcon/>
                    </div>
                    <img src={favouriteProduct} alt="" className="favourite-cards__card-image"/>
                    <div className="favourite-cards__card-title">
                        Форма для твердого сыра 1 кг - 40 отверстий
                    </div>
                    <div className="favourite-cards__card-subtitle">
                        БК-Углич-ЛД 1 Е.А.
                    </div>
                    <div className="favourite-cards__card-bottom">
                        <div className="price">
                            <div className="price__discount">
                                3400 руб.
                            </div>
                            <div className="price">
                                2300 руб.
                            </div>
                        </div>
                        <button>
                            В корзину
                        </button>
                    </div>
                </div>
                <div className="favourite-cards__card">
                    <div className="favourite-cards__card-top">
                        <div className="text">
                            В наличии
                        </div>
                        <HeartSolidIcon/>
                    </div>
                    <img src={favouriteProduct} alt="" className="favourite-cards__card-image"/>
                    <div className="favourite-cards__card-title">
                        Форма для твердого сыра 1 кг - 40 отверстий
                    </div>
                    <div className="favourite-cards__card-subtitle">
                        БК-Углич-ЛД 1 Е.А.
                    </div>
                    <div className="favourite-cards__card-bottom">
                        <div className="price">
                            <div className="price__discount">
                                3400 руб.
                            </div>
                            <div className="price">
                                2300 руб.
                            </div>
                        </div>
                        <button>
                            В корзину
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FavouriteTab;