import React from 'react';
import './style.scss';
import CheckBox from "../../components/checkbox";
import CustomInputRange from "../../components/input-range";
import {useDispatch, useSelector} from "react-redux";
import {addFilterActionCreator} from "../../store/category-filters";
import {ReactComponent as ArrowDownIcon} from "../../images/icons/arrow-down.svg";
import Button from "../../components/button";

const Filters = () => {
    const dispatch = useDispatch();
    const filters = useSelector(state => state.filters)
    const addFilter = (filter) => dispatch(addFilterActionCreator(filter))

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
                            {filters.price.map((filter, idx) => (
                                <div className="dropdown-list__filters-filter" key={idx}>
                                    <CheckBox/>
                                    {filter}
                                </div>
                            ))}
                        </div>
                        <Button
                            text={"Применить"}
                            className={"filter"}
                        />
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
                            {filters.kinds.map((filter, idx) => (
                                <div className="dropdown-list__filters-filter" key={idx}>
                                    <CheckBox/>
                                    {filter}
                                </div>
                            ))}
                        </div>
                        <Button
                            text={"Применить"}
                            className={"filter"}
                        />
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
                            {filters.manufacturer.map((filter, idx) => (
                                <div className="dropdown-list__filters-filter" key={idx}>
                                    <CheckBox />
                                    {filter}
                                </div>
                            ))}
                        </div>
                        <Button
                            text={"Применить"}
                            className={"filter"}
                        />
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
                        <Button
                            text={"Применить"}
                            className={"filter"}
                        />
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