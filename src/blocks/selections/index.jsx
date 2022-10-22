import React from 'react';
import './style.scss';
import Wrapper from "../../components/wrapper";
import {Link} from "react-router-dom";
import recipes from '../../images/selections/recipe.png';
import sets from '../../images/selections/sets.png';

const Selections = () => {
    return (
        <Wrapper>
            <div className="selections">
                <div className="selections__title">
                    Мы подобрали для вас
                </div>
                <div className="selections__items">
                    <div className="selections__items-recipes">
                        <img className="selections__items-recipes__bg" src={recipes} alt=""/>
                        <div className="selections__items-recipes__title">
                            более 1000 лучших рецептов
                        </div>
                        <div className="selections__items-recipes__text">
                            Мы собрали для Вас большую
                            базу рецептов.
                        </div>
                        <Link className="selections__items-recipes__link" to="recipes">
                            Перейти
                        </Link>
                    </div>
                    <div className="selections__items-sets">
                        <img className="selections__items-sets__bg" src={sets} alt=""/>
                        <div className="selections__items-sets__title">
                            крутые Наборы для сыра
                        </div>
                        <div className="selections__items-sets__text">
                            Готовые наборы сэкономят время, мы всё сделали за Вас.
                        </div>
                        <Link className="selections__items-sets__link" to="collections">
                            Перейти
                        </Link>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default Selections;