import React, {useState} from 'react';
import './style.scss';
import MainNav from "../../components/main-nav";
import Card from "../../components/card";
import Wrapper from "../../components/wrapper";
import Filters from "./filters";
import AddedFiltersList from "./added-filters-list";
import {ReactComponent as FilterToggleIcon} from "../../images/icons/fitler-toggle.svg";
import {ReactComponent as FilterToggleDisabledIcon} from "../../images/icons/fitler-toggle-disabled.svg";

const Category = () => {
    const [addedFilters, setAddedFilters] = useState(['some filter 1', 'some filter 2', 'some filter 3']);
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
                {isFiltersActive && <Filters/>}
                {isFiltersActive && <AddedFiltersList
                    addedFilters={addedFilters}
                    removeSingleFilter={removeSingleFilter}
                    resetAddedFilters={resetAddedFilters}
                />}
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