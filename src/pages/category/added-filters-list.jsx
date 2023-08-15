import React from 'react';
import './style.scss';
import FilterCard from "../../components/filter-card";
import {resetFiltersActionCreator} from "../../store/category-filters";
import {useDispatch, useSelector} from "react-redux";

const AddedFiltersList = () => {
    const dispatch = useDispatch();
    const addedFilters = useSelector(state => state.filters.addedFilters);
    const resetAddedFilters = () => dispatch(resetFiltersActionCreator());

    return (
        <>
            {!!addedFilters.length && <div className="category__added-filters">
                <div className="category__added-filters__list">
                    {addedFilters.map((filter, idx) => (
                        <FilterCard
                            key={filter + idx}
                            title={filter}
                            idx={idx}
                        />
                    ))}
                </div>
                <div className="category__added-filters__reset">
                    <button onClick={resetAddedFilters}>Очистить фильтр</button>
                </div>
            </div>}
        </>
    );
};
export default AddedFiltersList;