import React from 'react';
import './style.scss';
import cheese from "../../images/about/cheese.png";
import Title from "../../components/title";

const AboutCompany = () => {
    return (
        <div className="about__inner-content__company">
            <Title
                title={"О нашей компании"}
                className={"page"}
            />
            <div className="info">
                <div className="info__box">
                    <div className="info__box-title">
                        Сыроделие
                    </div>
                    <div className="info__box-text">
                        Одно из самых импортозависимых направлений российского АПК. Поэтому производство
                        отечественных сыров высокого качества является одним из приоритетных направлений
                        развития молочной отрасли.
                        Миссия нашей компании – развивать культуру сыроделия в России и стать лидером своей
                        области, достойным высокого доверия покупателей, оказывая лучший сервис по стране.
                    </div>
                </div>
                <img src={cheese} alt=""/>
            </div>
        </div>
    );
};

export default AboutCompany;