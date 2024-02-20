import React from 'react';
import './style.scss';
import Wrapper from "../../components/wrapper";
import MainNav from "../../components/main-nav";
import AboutStore from "./about-shop";
import AboutMasters from "./about-masters";
import AboutAdvantages from "./about-advantages";
import AboutMotto from "./about-motto";
import AboutCompany from "./about-company";

const About = () => {
    return (
        <div className="about">
            <Wrapper>
                <div className="about__inner">
                    <MainNav/>
                    <div className="about__inner-content">
                        <AboutCompany />
                        <AboutMasters />
                        <AboutAdvantages />
                    </div>
                </div>
            </Wrapper>
            <AboutMotto />
            {/*<AboutStore />*/}
        </div>
    );
};

export default About;