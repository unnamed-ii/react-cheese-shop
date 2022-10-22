import React from 'react';
import './style.scss'

import {ReactComponent as HeartIcon} from '../../images/icons/heart.svg';
import collection from '../../images/collections.png';

import Wrapper from "../../components/wrapper";
import MainNav from "../../components/main-nav";

const Collections = () => {
    return (
        <Wrapper>
            <div className="collections">
                <div className="collections__inner">
                    <MainNav/>
                    <div className="collections__inner-content">
                        <div className="collections__title">
                            Наборы для сыра
                        </div>
                        <div className="collections__group">
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
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default Collections;