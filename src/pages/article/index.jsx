import React, {useContext, useEffect, useState} from 'react';
import './style.scss';
import MainNav from "../../components/main-nav";
import Wrapper from "../../components/wrapper";
import PopularRecipes from "../../blocks/popular-recipes";
import ArticleAdvices from "./article-advices";
import ArticleInfo from "./article-info";
import LoadingAnimation from "../../components/loadingAnimation/loadingAnimation";
import {useLocation} from "react-router-dom";
import {LoadingAnimationContext} from "../../Context";
import {doc, getDoc} from "firebase/firestore";
import {database} from "../../firebase";
import articleDefaultImage from '../../images/article.png'
import Title from "../../components/title";

const Article = () => {
    const {pathname} = useLocation()
    const {isLoading, setIsLoading} = useContext(LoadingAnimationContext);
    const [article, setArticle] = useState({});
    const currentShowingCollectionId = pathname.split('/')[pathname.split('/').length - 1];

    useEffect(async () => {
        setIsLoading(true);
        try {
            const articleRef = await doc(database, 'articles', currentShowingCollectionId);
            const articleSnap = await getDoc(articleRef);
            if (articleSnap.exists()) {
                setArticle({
                    collectionId: articleSnap.id,
                    ...articleSnap.data()
                });
            }
        } catch (e) {
            console.log(e);
        }
        setIsLoading(false);
    }, []);

    return (
        <Wrapper>
            <LoadingAnimation isLoading={isLoading}/>
            <div className="article">
                <div className="article__inner">
                    <MainNav/>
                    <div className="article__inner-content">
                        <Title
                            title={"Вино и сыр – поговорим об этом вечном сочетании"}
                            className={"page"}
                        />
                        <img src={articleDefaultImage} alt="Image"/>
                        <ArticleInfo paragraph={article.paragraph}/>
                        <ArticleAdvices advices={article.advices}/>
                    </div>
                </div>
                <PopularRecipes />
            </div>
        </Wrapper>
    );
};

export default Article;