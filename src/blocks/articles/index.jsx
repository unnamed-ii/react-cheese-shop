import React, {useEffect, useState} from 'react';
import './style.scss';
import Wrapper from "../../components/wrapper";
import {ArticleCard} from "./articles-card";
import {collection, getDocs} from "firebase/firestore";
import {database} from "../../firebase";
import articleDefaultImage from '../../images/articles/article1.png';
import Title from "../../components/title";

const Articles = () => {
    const [articles, setArticles] = useState([]);

    useEffect(async () => {
        try {
            const querySnapshot = await getDocs(collection(database, 'articles'));
            await querySnapshot.forEach((doc) => {
                const id = doc.id;
                const data = doc.data();
                const article = {...JSON.parse(JSON.stringify(data)), id};
                setArticles(p => ([...p, article]));
            })
        } catch (e) {
            console.log(e);
        }
    }, []);

    return (
        <Wrapper>
            <div className="articles">
                <div className="articles__compilation">
                    <div className="articles__compilation-title">
                        Статьи про&nbsp;сыроделие
                    </div>
                    <Title
                        title={`Статьи про сыроделие`}
                        className={"home-page__articles-block"}
                    />
                    <div className="articles__compilation-text">
                        Мы собрали самые интересные и полезные новости о акциях, скидках и мире сыроделия.
                    </div>
                </div>
                <div className="articles__list">
                    {articles?.map(article =>
                        <ArticleCard
                            id={article.id}
                            key={article.id}
                            title={article.name}
                            text={article.paragraph?.text}
                            image={articleDefaultImage}
                        />
                    )}
                </div>
            </div>
        </Wrapper>
    );
};

export default Articles;