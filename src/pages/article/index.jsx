import React from 'react';
import './style.scss';
import MainNav from "../../components/main-nav";
import Wrapper from "../../components/wrapper";
import PopularRecipes from "../../blocks/popular-recipes";
import ArticleAdvices from "./article-advices";
import ArticleInfo from "./article-info";
import article from '../../images/article.png'

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
                        <ArticleInfo />
                        <ArticleAdvices />
                    </div>
                </div>
                <PopularRecipes />
            </div>
        </Wrapper>
    );
};

export default Article;