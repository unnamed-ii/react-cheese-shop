import React from 'react';
import './style.scss';
import FilterCard from "../../components/filter-card";

const AddedFiltersList = ({addedFilters, removeSingleFilter, resetAddedFilters}) => {

    return (
        <>
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
        </>
    );
};
export default AddedFiltersList;