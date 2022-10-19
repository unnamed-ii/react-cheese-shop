import React from 'react';
import './style.scss';
import Wrapper from "../../components/wrapper";
import {Link} from "react-router-dom";
import article1 from '../../images/articles/article1.png';
import article2 from '../../images/articles/article2.png';
import article3 from '../../images/articles/article3.png';
import article4 from '../../images/articles/article4.png';
import {ReactComponent as ArrowRightIcon} from '../../images/icons/arrow-right.svg';

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
                    <div className="articles__list-line">
                        <div className="articles__list-item">
                            <img className="articles__list-item__image" src={article1} alt=""/>
                            <div className="articles__list-item__box">
                                <div className="articles__list-item__title">
                                    Сырная тарелка
                                </div>
                                <div className="articles__list-item__text">
                                    Так называется блюдо, которое состоит из разных сортов сыра.
                                </div>
                                <Link className="articles__list-item__link" to="article">
                                    Читать далее
                                    <ArrowRightIcon class="image"/>
                                </Link>
                            </div>
                        </div>
                        <div className="articles__list-item">
                            <img className="articles__list-item__image" src={article2} alt=""/>
                            <div className="articles__list-item__box">
                                <div className="articles__list-item__title">
                                    Откуда в сыре дырки?
                                </div>
                                <div className="articles__list-item__text">
                                    Особенно характерно наличие дырочек разных размеров в структуре швейцарских сортов...
                                </div>
                                <Link className="articles__list-item__link" to="article">
                                    Читать далее
                                    <ArrowRightIcon class="image"/>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="articles__list-line">
                        <div className="articles__list-item">
                            <img className="articles__list-item__image" src={article3} alt=""/>
                            <div className="articles__list-item__box">
                                <div className="articles__list-item__title">
                                    Сырная диета
                                </div>
                                <div className="articles__list-item__text">
                                    Из-за недостатка физической активности и стабильного переедания образуется лишний...
                                </div>
                                <Link className="articles__list-item__link" to="article">
                                    Читать далее
                                    <ArrowRightIcon class="image"/>
                                </Link>
                            </div>
                        </div>
                        <div className="articles__list-item">
                            <img className="articles__list-item__image" src={article4} alt=""/>
                            <div className="articles__list-item__box">
                                <div className="articles__list-item__title">
                                    посол сырной головки
                                </div>
                                <div className="articles__list-item__text">
                                    Особенно характерно наличие дырочек разных размеров в структуре швейцарских сортов...
                                </div>
                                <Link className="articles__list-item__link" to="article">
                                    Читать далее`
                                    <ArrowRightIcon class="image"/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default Articles;