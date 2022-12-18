import React, {useState} from 'react';
import './style.scss';
import MainNav from "../../components/main-nav";
import Card from "../../components/card";
import Wrapper from "../../components/wrapper";
import CheckBox from "../../components/checkbox";
import {ReactComponent as FilterToggleIcon} from "../../images/icons/fitler-toggle.svg";
import {ReactComponent as FilterToggleDisabledIcon} from "../../images/icons/fitler-toggle-disabled.svg";
import {ReactComponent as ArrowDownIcon} from "../../images/icons/arrow-down.svg";
import FilterCard from "../../components/filter-card";
import CustomInputRange from "../../components/input-range";
import {CategoryFiltersData} from "./constanst";

// create constants file for filters, so you can use data to render all filters in dropdown lists for each filter
// after it you can easily set state of added filters and update list of returning array of products with all conditions

const Category = () => {
    const [addedFilters, setAddedFilters] = useState(['asd', 'asxcz', '12313']);
    const [isFiltersActive, setIsFiltersActive] = useState(false);

    const toggleFilters = () => setIsFiltersActive(!isFiltersActive);

    const resetAddedFilters = () => setAddedFilters([]);

    const removeSingleFilter = (filtersTitleUsedAsId) => {
        const updatedFiltersArr = addedFilters.filter(i => i !== filtersTitleUsedAsId);
        setAddedFilters(updatedFiltersArr);
    }

    return (
        <Wrapper>
            <div className="category">
                <div className="category__top">
                    <div className="category__top-title">
                        Кисломолочные закваски
                    </div>
                    <button className={"category__top-filter__toggle " + (isFiltersActive && "active")}
                            onClick={toggleFilters}>
                        {!isFiltersActive ?
                            <FilterToggleDisabledIcon/>
                            :
                            <FilterToggleIcon/>
                        }
                        Фильтр
                    </button>
                </div>
                <div className="category__filters">
                    <div className="category__filters-list">
                        <div className="category__filters-list__filter">
                            <div className="title">
                                От дорогих к дешевым
                                <ArrowDownIcon/>
                            </div>
                            <div className="dropdown-list quality-filter">
                                <div className="dropdown-list__title">
                                    Выберите фильтр
                                </div>
                                <div className="dropdown-list__filters">
                                    {CategoryFiltersData.price.map(i => (
                                        <div className="dropdown-list__filters-filter">
                                            <CheckBox/>
                                            {i}
                                        </div>
                                    ))}
                                </div>
                                <div className="dropdown-list__button">
                                    <button>Применить</button>
                                </div>
                            </div>
                        </div>
                        <div className="category__filters-list__filter">
                            <div className="title">
                                Тип продукта
                                <ArrowDownIcon/>
                            </div>
                            <div className="dropdown-list">
                                <div className="dropdown-list__title">
                                    Выберите фильтр
                                </div>
                                <div className="dropdown-list__filters">
                                    {CategoryFiltersData.types.map(i => (
                                        <div className="dropdown-list__filters-filter">
                                            <CheckBox/>
                                            {i}
                                        </div>
                                    ))}
                                </div>
                                <div className="dropdown-list__button">
                                    <button>Применить</button>
                                </div>
                            </div>
                        </div>
                        <div className="category__filters-list__filter">
                            <div className="title">
                                Производитель
                                <ArrowDownIcon/>
                            </div>
                            <div className="dropdown-list">
                                <div className="dropdown-list__title">
                                    Выберите фильтр
                                </div>
                                <div className="dropdown-list__filters">
                                    {CategoryFiltersData.manufacturer.map(i => (
                                        <div className="dropdown-list__filters-filter">
                                            <CheckBox/>
                                            {i}
                                        </div>
                                    ))}
                                </div>
                                <div className="dropdown-list__button">
                                    <button>Применить</button>
                                </div>
                            </div>
                        </div>
                        <div className="category__filters-list__filter">
                            <div className="title">
                                Цена
                                <ArrowDownIcon/>
                            </div>
                            <div className="dropdown-list price-filter">
                                <CustomInputRange/>
                                <div className="dropdown-list__filters">
                                    <div className="dropdown-list__filters-filter">
                                        <CheckBox/>
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
                        <CheckBox/>
                        Показывать только товар в наличии
                    </div>
                </div>
                {!!addedFilters.length && <div className="category__added-filters">
                    <div className="category__added-filters__list">
                        {addedFilters.map(i => (
                            <FilterCard
                                key={Math.floor(Math.random() * 10000)}
                                title={i}
                                removeSingleFilter={removeSingleFilter}
                            />
                        ))}
                    </div>
                    {!!addedFilters.length &&
                    <div className="category__added-filters__reset">
                        <button onClick={resetAddedFilters}>Очистить фильтр</button>
                    </div>}
                </div>}
                <div className="category__inner">
                    <MainNav/>
                    <div className="category__inner-content">
                        <div className="category__inner-content__list">
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};
export default Category;