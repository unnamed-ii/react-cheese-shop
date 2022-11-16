import React from 'react';
import './style.scss';
import MainNav from "../../components/main-nav";
import Card from "../../components/card";
import Wrapper from "../../components/wrapper";
import CheckBox from "../../components/checkbox";
import {ReactComponent as FilterToggleIcon} from "../../images/icons/fitler-toggle.svg";
import {ReactComponent as FilterToggleDisabledIcon} from "../../images/icons/fitler-toggle-disabled.svg";
import {ReactComponent as ArrowDownIcon} from "../../images/icons/arrow-down.svg";
import {ReactComponent as CloseFilterIcon} from "../../images/icons/close-moduls-btn.svg";
import FilterCard from "../../components/filter-card";
import CustomInputRange from "../../components/input-range";

const Category = () => {
    return (
        <Wrapper>
            <div className="category">
                <div className="category__top">
                    <div className="category__top-title">
                        Кисломолочные закваски
                    </div>
                    <button className="category__top-filter__toggle">
                        <FilterToggleDisabledIcon />
                        {/*<FilterToggleIcon />*/}
                        Фильтр
                    </button>
                </div>
                <div className="category__filters">
                    <div className="category__filters-list">
                        <div className="category__filters-list__filter">
                            <div className="title">
                                От дорогих к дешевым
                                <ArrowDownIcon />
                            </div>
                            <div className="dropdown-list quality-filter">
                                <div className="dropdown-list__title">
                                    Выберите фильтр
                                </div>
                                <div className="dropdown-list__filters">
                                    <div className="dropdown-list__filters-filter">
                                        <CheckBox />
                                        От дорогих к дешевым
                                    </div>
                                    <div className="dropdown-list__filters-filter">
                                        <CheckBox />
                                        От дешёвых к дорогим
                                    </div>
                                </div>
                                <div className="dropdown-list__button">
                                    <button>Применить</button>
                                </div>
                            </div>
                        </div>
                        <div className="category__filters-list__filter">
                            <div className="title">
                                Тип продукта
                                <ArrowDownIcon />
                            </div>
                            <div className="dropdown-list">
                                <div className="dropdown-list__title">
                                    Выберите фильтр
                                </div>
                                <div className="dropdown-list__filters">
                                    <div className="dropdown-list__filters-filter">
                                        <CheckBox />
                                        Закваски для йогурта
                                    </div>
                                    <div className="dropdown-list__filters-filter">
                                        <CheckBox />
                                        Закваски для творога
                                    </div>
                                    <div className="dropdown-list__filters-filter">
                                        <CheckBox />
                                        Закваска для ряженки
                                    </div>
                                    <div className="dropdown-list__filters-filter">
                                        <CheckBox />
                                        Закваски для йогурта
                                    </div>
                                    <div className="dropdown-list__filters-filter">
                                        <CheckBox />
                                        Закваски Скваска
                                    </div>
                                    <div className="dropdown-list__filters-filter">
                                        <CheckBox />
                                        Закваски Каприна
                                    </div>
                                    <div className="dropdown-list__filters-filter">
                                        <CheckBox />
                                        Закваски для кефира
                                    </div>
                                </div>
                                <div className="dropdown-list__button">
                                    <button>Применить</button>
                                </div>
                            </div>
                        </div>
                        <div className="category__filters-list__filter">
                            <div className="title">
                                Производитель
                                <ArrowDownIcon />
                            </div>
                            <div className="dropdown-list">

                            </div>
                        </div>
                        <div className="category__filters-list__filter">
                            <div className="title">
                                Цена
                                <ArrowDownIcon />
                            </div>
                            <div className="dropdown-list active price-filter">
                                <CustomInputRange />
                                <div className="dropdown-list__filters">
                                    <div className="dropdown-list__filters-filter">
                                        <CheckBox />
                                        Товары со скидкой
                                    </div>
                                </div>
                                <div className="dropdown-list__button">
                                    <button>Применить</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="category__filters-is__available">
                        <CheckBox />
                        Показывать только товар в наличии
                    </div>
                </div>
                <div className="category__added-filters">
                    <div className="category__added-filters__list">
                        <FilterCard />
                        <FilterCard />
                        <FilterCard />
                    </div>
                    <div className="category__added-filters__reset">
                        <button>Очистить фильтр</button>
                    </div>
                </div>
                <div className="category__inner">
                    <MainNav />
                    <div className="category__inner-content">
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