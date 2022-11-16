import React, {useState} from 'react';
import './style.scss';
import Wrapper from "../../components/wrapper";
import MainNav from "../../components/main-nav";
import ProductsSlider from "../../components/products-slider";
import Counter from "../../components/counter";
import {CollectionData} from "./constants";
import {ReactComponent as ReviewIcon} from "../../images/icons/review.svg";
import {ReactComponent as HeartIcon} from "../../images/icons/orange-empty-heart.svg";
import collection from '../../images/collections.png';

const Collection = () => {
    const [activeTab, setActiveTab] = useState(CollectionData.tabsTitles[0].typeOfTab);
    const handleChangeActiveTab = (tabId) => {
        setActiveTab(tabId)
    }

    return (
        <Wrapper>
            <div className="collection">
                <div className="collection__inner">
                    <MainNav/>
                    <div className="collection__inner-content">
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
                                        <ReviewIcon class="review-icon"/>
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
                        <div className="collection__tabs">
                            <div className="collection__tabs-titles">
                                {CollectionData.tabsTitles.map(i =>
                                    <div className={"profile__tabs-title " + (activeTab === i.typeOfTab && "active")}
                                         onClick={() => handleChangeActiveTab(i.typeOfTab)}
                                    >
                                        {i.title}
                                    </div>
                                )}
                            </div>
                            <div className="collection__tabs-items">
                                <div className="collection__tabs-item">
                                    <div className="collection__tabs-item__line">
                                        <div className="title">
                                            Что входит в набор:
                                        </div>
                                        <div className="text">
                                            Мезофильная закваска, Термофильная закваска , Сычужный фермент 20мл, Хлористый
                                            кальций 10г, Форма для самопрессующихся сыров Д12, Весы ювелирные, Термометр
                                            механический с щупом, Дренажный коврик, Лавсановый мешочек
                                        </div>
                                    </div>
                                    <div className="collection__tabs-item__line">
                                        <div className="title">
                                            Транспортировкa
                                        </div>
                                        <div className="text">
                                            2 недели с соблюдением температуры.
                                        </div>
                                    </div>
                                    <div className="collection__tabs-item__line">
                                        <div className="title">
                                            Размер упаковки и хранение
                                        </div>
                                        <div className="text">
                                            Поможет приготовить вам вкусный творог в домашних условиях.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ProductsSlider title={'заказать дополнительно'}/>
            </div>
        </Wrapper>
    );
};

export default Collection;