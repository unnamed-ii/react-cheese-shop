import React from 'react';
import './style.scss';
import Wrapper from "../../components/wrapper";
import MainNav from "../../components/main-nav";
import MasterCard from "../../components/master-card";
import Advantage from "../../components/advantage-card";
import {Link} from "react-router-dom";

import cheese from '../../images/about/cheese.png';
import cheeseStore from '../../images/about/store/cheese1.png';
import {ReactComponent as PhoneIcon} from '../../images/icons/about/phone.svg';
import {ReactComponent as ShieldIcon} from '../../images/icons/about/shield.svg';
import {ReactComponent as PercentIcon} from '../../images/icons/about/percent.svg';
import {ReactComponent as BoxIcon} from '../../images/icons/about/box.svg';
import {ReactComponent as LogoIcon} from '../../images/about/box/logo.svg';


const About = () => {
    return (
        <div className="about">
            <Wrapper>
                <div className="about__inner">
                    <MainNav/>
                    <div className="about__inner-content">
                        <div className="about__inner-content__title">
                            О нашей компании
                        </div>
                        <div className="about__inner-content__info">
                            <div className="box">
                                <div className="title">
                                    Сыроделие
                                </div>
                                <div className="text">
                                    Одно из самых импортозависимых направлений российского АПК. Поэтому производство
                                    отечественных сыров высокого качества является одним из приоритетных направлений
                                    развития молочной отрасли.
                                    Миссия нашей компании – развивать культуру сыроделия в России и стать лидером своей
                                    области, достойным высокого доверия покупателей, оказывая лучший сервис по стране.
                                </div>
                            </div>
                            <img src={cheese} alt=""/>
                        </div>
                        <div className="about__inner-content__masters">
                            <div className="title">
                                Наши мастера
                            </div>
                            <div className="masters">
                                <MasterCard/>
                                <MasterCard/>
                                <MasterCard/>
                            </div>
                        </div>
                        <div className="about__inner-content__advantages">
                            <div className="title">
                                Преимущества работы с нашим магазином
                            </div>
                            <div className="advantages">
                                <Advantage
                                    icon={<PhoneIcon/>}
                                    text={"Профессиональная информационная поддержка, вы можете в любой момент связаться с нами"}
                                />
                                <Advantage
                                    icon={<ShieldIcon/>}
                                    text={"Гарантия качества всей продукции, при заказе товара вы можете увидеть сертификат"}
                                />
                                <Advantage
                                    icon={<PercentIcon/>}
                                    text={"Программа лояльности, бонусы, акции, лучшие предложения только у нас"}
                                />
                                <Advantage
                                    icon={<BoxIcon/>}
                                    text={"Вы покупаете всё в одном месте или оставить запрос и мы превезем под заказ"}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
            <Wrapper>
                <div className="about__box">
                    <div className="about__box-client">
                        <div className="about__box-client__title">
                            Клиент всегда прав
                        </div>
                        <div className="about__box-client__text">
                            Мы стремимся обеспечить обслуживание клиентов таким образом, чтобы на всех этапах сотрудничества
                            клиент ощущал комфорт и удовлетворение. Наивысшей оценка нашей деятельности являются&nbsp;положительные&nbsp;отзывы о&nbsp;нашей&nbsp;компании.
                        </div>
                        <Link to="/reviews" className="about__box-client__link">
                            Оставить отзыв
                        </Link>
                        <LogoIcon/>
                    </div>
                    <div className="about__box-result">
                        <div className="about__box-result__title">
                            лучший результат
                        </div>
                        <div className="about__box-result__text">
                            Наши товары, помогут Вам достичь
                            лучших результатов
                        </div>
                    </div>
                </div>
            </Wrapper>
            <Wrapper>
                <div className="about__inner">
                    <div className="about__inner-store">
                        <div className="about__inner-store__info">
                            <div className="title">
                                о нашем магазине
                            </div>
                            <div className="text">
                                Интернет-магазин «ЛяЧиз» предлагает своим покупателям широчайший ассортимент
                                оборудования, ингредиентов и аксессуаров для домашнего сыроделия.
                                <br/>
                                С нашей продукцией у Вас появится возможность приготовить любой сыр в домашних условиях
                                и насладиться всеми его оттенками и разнообразием, а также Вы окунётесь в мир сыроделия
                                и узнаете всё о приготовлении любого вида сыра своими руками.
                                <br/>
                                С нашим оборудованием у вас появится возможность расширить свои способности, а также
                                приготовить вкусный и качественный сыр.
                                <br/>
                                "ЛяЧиз" за качество, надёжность, технологичность и презентабельность! Будем и дальше
                                радовать вас большим ассортиментом и новинками, а вы нас - своими заказами!
                            </div>
                        </div>
                        <div className="about__inner-store__images">
                            <img src={cheeseStore} alt=""/>
                            <img src={cheeseStore} alt=""/>
                            <img src={cheeseStore} alt=""/>
                            <img src={cheeseStore} alt=""/>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </div>
    );
};

export default About;