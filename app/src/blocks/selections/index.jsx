import React from 'react';
import './style.scss';

import recipes from '../../images/selections/recipe.png';
import sets from '../../images/selections/sets.png';
import Wrapper from "../../components/wrapper";

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
                        <a className="selections__items-recipes__link" href="#">
                            Перейти
                        </a>
                    </div>
                    <div className="selections__items-sets">
                        <img className="selections__items-sets__bg" src={sets} alt=""/>
                        <div className="selections__items-sets__title">
                            крутые Наборы для сыра
                        </div>
                        <div className="selections__items-sets__text">
                            Готовые наборы сэкономят время, мы всё сделали за Вас.
                        </div>
                        <a className="selections__items-sets__link" href="#">
                            Перейти
                        </a>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default Selections;