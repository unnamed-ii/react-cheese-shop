import React, {useEffect} from 'react';
import './style.scss';
import Recommendations from "../../blocks/recommendations";
import Benefits from "../../blocks/benefits";
import Selections from "../../blocks/selections";
import Equipment from "../../blocks/equipment";
import Articles from "../../blocks/articles";
import Products from "../../blocks/products";
import ProductsSlider from "../../components/products-slider";
import {useSelector} from "react-redux";

const Home = () => {
    const isAuth = useSelector(state => state.user.isAuth);

    useEffect(() => {
        if (isAuth) {
            localStorage.setItem('isUserAuthorized', 'true');
        }
    }, [])

    return (
        <div className="home">
            <Recommendations/>
            <Products/>
            <Benefits/>
            <Selections/>
            <Equipment/>
            <Articles/>
            <ProductsSlider title={'Просмотренные товары'}/>
        </div>
    );
};

export default Home;