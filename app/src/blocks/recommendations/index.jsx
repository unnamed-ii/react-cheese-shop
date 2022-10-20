import React from 'react';
import './style.scss'
import Wrapper from "../../components/wrapper";
import {Link} from "react-router-dom";
import setsBg from '../../images/recommendations/sets-bg.png'
import recipesBg from '../../images/recommendations/recipes-bg.png'
import discountsBg from '../../images/recommendations/discounts-bg.png'

const Recommendations = () => {
    return (
        <Wrapper>
            <div className="recommendations">
                <div className="recommendations__item active">
                    <img src={setsBg} alt=""/>
                    <div className="recommendations__item-subtitle">Наборы</div>
                    <div className="recommendations__item-title">Наборы для сыроделия</div>
                    <div className="recommendations__item-text">
                        Все что вам нужно для приготовления сыра в домашних условиях
                    </div>
                    <Link to="collections" className="recommendations__item-link">Смотреть наборы</Link>
                </div>
                <div className="recommendations__item">
                    <img src={recipesBg} alt=""/>
                    <div className="recommendations__item-subtitle">Рецепты</div>
                    <div className="recommendations__item-title">Сыры с плесенью</div>
                    <div className="recommendations__item-text">
                        Все что вам нужно для приготовления сыра в домашних условиях
                    </div>
                    <a href="#" className="recommendations__item-link">Смотреть наборы</a>
                </div>
                <div className="recommendations__item">
                    <img src={discountsBg} alt=""/>
                    <div className="recommendations__item-subtitle">Акции</div>
                    <div className="recommendations__item-title">закваски для сыра</div>
                    <div className="recommendations__item-text">
                        Все что вам нужно для приготовления сыра в домашних условиях
                    </div>
                    <a href="#" className="recommendations__item-link">Смотреть наборы</a>
                </div>
            </div>
        </Wrapper>
    );
};

export default Recommendations;