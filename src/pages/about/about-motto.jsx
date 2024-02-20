import React from 'react';
import './style.scss';
import Wrapper from "../../components/wrapper";
import {Link} from "react-router-dom";
import {ReactComponent as LogoIcon} from "../../images/about/box/logo.svg";

const AboutMotto = () => {
    return (
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
    );
};

export default AboutMotto;