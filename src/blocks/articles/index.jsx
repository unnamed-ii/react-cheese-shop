import React from 'react';
import './style.scss';
import Wrapper from "../../components/wrapper";
import {ArticleCard} from "./articles-card";
import {ArticlesData} from "./constants";

const Articles = () => {
    return (
        <Wrapper>
            <div className="articles">
                <div className="articles__compilation">
                    <img src="" alt=""/>
                    <div className="articles__compilation-title">
                        Статьи про&nbsp;сыроделие
                    </div>
                    <div className="articles__compilation-text">
                        Мы собрали самые интересные и полезные новости о акциях, скидках и мире сыроделия.
                    </div>
                    <a className="articles__compilation-link" href="#">
                        Читать все статьи
                    </a>
                </div>
                <div className="articles__list">
                    {ArticlesData.map(article =>
                        <ArticleCard
                            id={article.id}
                            key={article.id}
                            title={article.title}
                            text={article.text}
                            image={article.image}
                        />
                    )}
                </div>
            </div>
        </Wrapper>
    );
};

export default Articles;