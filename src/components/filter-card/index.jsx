import React from 'react';
import './style.scss'
import {useDispatch} from "react-redux";
import {removeFilterActionCreator} from "../../store/syncReducers/category-filters";
import {ReactComponent as CloseFilterIcon} from "../../images/icons/close-moduls-btn.svg";

const FilterCard = ({title, idx}) => {
    const dispatch = useDispatch();
    const removeSingleFilter = (idx) => dispatch(removeFilterActionCreator(idx));

    return (
        <div className="added-filter">
            <div className="added-filter__inner">
                {title}
                <button onClick={() => removeSingleFilter(idx)}>
                    <CloseFilterIcon />
                </button>
            </div>
        </div>
    )
}

export default FilterCard;