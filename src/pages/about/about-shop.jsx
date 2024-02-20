import React from 'react';
import './style.scss';
import Wrapper from "../../components/wrapper";
import cheeseStore from "../../images/about/store/cheese1.png";

const AboutStore = () => {
    return (
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
    );
};

export default AboutStore;