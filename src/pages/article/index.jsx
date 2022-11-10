import React from 'react';
import './style.scss';
import MainNav from "../../components/main-nav";
import Wrapper from "../../components/wrapper";
import article from '../../images/article.png'
import InstructionStep from "../../components/instruction-step";
import PopularRecipes from "../../blocks/popular-recipes";
import {ArticleData} from "./constants";

const Article = () => {
    return (
        <Wrapper>
            <div className="article">
                <div className="article__inner">
                    <MainNav/>
                    <div className="article__inner-content">
                        <div className="article__inner-content__title">
                            Вино и сыр – поговорим об этом вечном сочетании
                        </div>
                        <img src={article} alt=""/>
                        <div className="article__inner-content__info">
                            <div className="title">
                                Сочетание
                            </div>
                            <div className="text">
                                У обоих этих продуктов есть выдержка и история происхождения. Хотя первый пункт для вина
                                более важен, чем для сыра. Они идеально дополняют друг друга. Их успешно совмещали сотни
                                лет назад.
                                Сейчас количество сортов вина и сыра перевалило за 200. Поэтому возникают сложности с
                                формированием идеальной комбинации. Некоторые взаимодействия винных и сырных сортов уже
                                давно стали классическими. Например, голубой молочный продукт из Англии Стилтон всегда
                                запивают классическим портвейном. Или же знаменитый сыр Рокфор употребляют в пище вместе
                                с сотерном.
                                <br/>
                                <br/>
                                К большинству сортов сыра сложно подобрать достойное вино. Необходимо учитывать
                                множество факторов – пахучесть, соленость, остроту, жирность, сливочность, кислотность.
                                Если неправильно подобрать вино или сыр, то вкус обоих продуктов испортится. Больше
                                всего от неумения сочетать с правильными сырами страдают красные сухие вина. А вот белые
                                сухие вина страдают меньше от неудачного соседства.
                                Сейчас количество сортов вина и сыра перевалило за 200. Поэтому возникают сложности с
                                формированием идеальной комбинации. Некоторые взаимодействия винных и сырных сортов уже
                                давно стали классическими. Например, голубой молочный продукт из Англии Стилтон всегда
                                запивают классическим портвейном. Или же знаменитый сыр
                            </div>
                        </div>
                        <div className="article__inner-content__advices">
                            <div className="title">
                                Советы по подбору вин и сыров
                            </div>
                            <div className="box">
                                {ArticleData.map((i, idx) =>
                                    <InstructionStep
                                        number={'0' + (idx + 1)}
                                        text={i.text}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <PopularRecipes />
            </div>
        </Wrapper>
    );
};

export default Article;