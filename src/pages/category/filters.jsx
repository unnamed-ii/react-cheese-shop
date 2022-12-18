import React from 'react';
import './style.scss';
import {CategoryFiltersData} from "./constanst";
import CheckBox from "../../components/checkbox";
import CustomInputRange from "../../components/input-range";
import {ReactComponent as ArrowDownIcon} from "../../images/icons/arrow-down.svg";

const Filters = () => {

    return (
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
    );
};
export default Filters;