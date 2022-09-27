import React from 'react';
import './style.scss';
import MainNav from "../../components/main-nav";
import Card from "../../components/card";
import Wrapper from "../../components/wrapper";
import CheckBox from "../../components/checkbox";


const Category = () => {
    return (
        <Wrapper>
            <div className="category">
                <div className="category__inner">
                    <MainNav />
                    <div className="category__inner-content">
                        <div className="category__inner-content__title">
                            Кисломолочные закваски
                        </div>
                        <div className="category__inner-content__list">
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};
export default Category;