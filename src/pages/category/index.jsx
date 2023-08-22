import React from 'react';
import './style.scss';
import MainNav from "../../components/main-nav";
import Card from "../../components/card";
import Wrapper from "../../components/wrapper";
import Filters from "./filters";
import AddedFiltersList from "./added-filters-list";
import {useDispatch, useSelector} from "react-redux";
import {toggleFiltersActionCreator} from "../../store/category-filters";
import {ReactComponent as FilterToggleIcon} from "../../images/icons/fitler-toggle.svg";
import {ReactComponent as FilterToggleDisabledIcon} from "../../images/icons/fitler-toggle-disabled.svg";
import PageTitle from "../../components/page-title";

const Category = () => {
    const dispatch = useDispatch();
    const showFilters = useSelector(state => state.filters.showFilters);
    const toggleFilters = () => dispatch(toggleFiltersActionCreator());

    return (
        <Wrapper>
            <div className="category">
                <div className="category__top">
                    <PageTitle title={"Кисломолочные закваски"}/>
                    <div className="category__top-filter__toggle">
                       <button className={"filters__toggle-button " + (showFilters && "active")}
                               onClick={toggleFilters}>
                           {showFilters ?
                               <FilterToggleIcon/>
                               :
                               <FilterToggleDisabledIcon/>
                           }
                           Фильтр
                       </button>
                   </div>
                </div>
                {showFilters && <Filters/>}
                {showFilters && <AddedFiltersList/>}
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