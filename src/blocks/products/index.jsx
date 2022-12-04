import React, {useState} from 'react';
import './style.scss';
import MainNav from "../../components/main-nav";
import Wrapper from "../../components/wrapper";
import Card from "../../components/card";
import {discountItems, popularItems} from "./constants";

const Products = () => {
    const [currentFilter, setCurrentFilter] = useState('filter-popular');
    const toggleCurrentFilter = (filterName) => {
        setCurrentFilter(filterName);
    }

    const showFilteredItems = () => currentFilter === 'filter-popular' ? popularItems : discountItems

    return (
        <div className="products">
            <Wrapper>
                <div className="products__inner">
                    <MainNav />
                    <div className="products__inner-content">
                        <div className="products__inner-content__filters">
                            <div className={"filter " + (currentFilter === "filter-popular" ? "active" : "")}
                                 id="filter-popular"
                                 onClick={(e) => toggleCurrentFilter(e.target.id)}>
                                Популярные товары
                            </div>
                            <div className={"filter " + (currentFilter === "filter-discounts" ? "active" : "")}
                                 id="filter-discounts"
                                 onClick={(e) => toggleCurrentFilter(e.target.id)}>
                                Акции
                            </div>
                        </div>
                        <div className="products__inner-content__groups">
                            <div className="ingredients">
                                <div className="ingredients__title">
                                    Ингредиенты
                                </div>
                                <div className="ingredients__products">
                                    <div className="ingredients__products-row">
                                        {showFilteredItems().ingredients.map((i) =>
                                            <Card/>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="equipment">
                                <div className="equipment__title">
                                    Оборудование
                                </div>
                                <div className="ingredients__products-row">
                                    {showFilteredItems().equipment.map((i) =>
                                        <Card/>
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