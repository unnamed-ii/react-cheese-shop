import React from 'react';
import './style.scss';
import Recommendations from "../../blocks/recommendations";
import Benefits from "../../blocks/benefits";
import Selections from "../../blocks/selections";
import Equipment from "../../blocks/equipment";
import Articles from "../../blocks/articles";
import Products from "../../blocks/products";
import ProductsSlider from "../../components/products-slider";

const Home = () => {
    return (
        <>
            <Recommendations/>
            <Products/>
            <Benefits/>
            <Selections/>
            <Equipment/>
            <Articles/>
            <ProductsSlider title={'Просмотренные товары'}/>
        </>
    );
};

export default Home;