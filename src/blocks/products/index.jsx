import React, {useContext, useEffect, useState} from 'react';
import './style.scss';
import MainNav from "../../components/main-nav";
import Wrapper from "../../components/wrapper";
import Card from "../../components/card";
import LoadingAnimation from "../../components/loadingAnimation/loadingAnimation";
import {LoadingAnimationContext} from "../../Context";
import Title from "../../components/title";
import {getProducts} from "../../api";

const Products = () => {
    const {isLoading, setIsLoading} = useContext(LoadingAnimationContext);
    const [ingredientProducts, setIngredientProducts] = useState([]);
    const [equipmentProducts, setEquipmentProducts] = useState([]);
    const [currentShowingProductsFilter, setCurrentShowingProductsFilter] = useState('populars');
    const toggleCurrentFilter = (filterName) => setCurrentShowingProductsFilter(filterName);
    // const filterShowingProducts = () => currentShowingProductsFilter === 'populars' ? 'populars' : 'promotions';

    useEffect(  () => {
        void getProducts(setIsLoading, setIngredientProducts, setEquipmentProducts);
        return () => {}
    }, []);

    return (
        <div className="products">
            <LoadingAnimation isLoading={isLoading}/>
            <Wrapper>
                <div className="products__inner">
                    <MainNav/>
                    <div className="products__inner-content">
                        <div className="products__inner-content__filters">
                            <div className={"filter " + (currentShowingProductsFilter === "populars" ? "active" : "")}
                                 onClick={() => toggleCurrentFilter('populars')}>
                                Популярные товары
                            </div>
                            <div className={"filter " + (currentShowingProductsFilter === "promotions" ? "active" : "")}
                                 id="filter-discounts"
                                 onClick={() => toggleCurrentFilter('promotions')}>
                                Акции
                            </div>
                        </div>
                        <div className="products__inner-content__groups">
                            <div className="ingredients">
                                <Title
                                    title={"Ингредиенты"}
                                    className={"home-page__products-list"}
                                />
                                <div className="ingredients__products">
                                    <div className="ingredients__products-row">
                                        {ingredientProducts.map((product) =>
                                            <Card
                                                key={product.id}
                                                id={product.id}
                                                title={product.name}
                                                discountPrice={product.discountPrice}
                                                normalPrice={product.normalPrice}
                                                productImageURL={product.image}
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="equipment">
                                <Title
                                    title={"Оборудование"}
                                    className={"home-page__products-list"}
                                />
                                <div className="ingredients__products-row">
                                    {equipmentProducts.map((product) =>
                                        <Card
                                            key={product.id}
                                            id={product.id}
                                            title={product.name}
                                            discountPrice={product.discountPrice}
                                            normalPrice={product.normalPrice}
                                            productImageURL={product.image}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </div>
    );
};

export default Products;