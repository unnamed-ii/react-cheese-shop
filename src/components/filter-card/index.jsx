import React from 'react';
import './style.scss'
import {ReactComponent as CloseFilterIcon} from "../../images/icons/close-moduls-btn.svg";

const FilterCard = ({title, removeSingleFilter}) => {
    return (
        <div className="added-filter">
            <div className="added-filter__inner">
                {title}
                <button onClick={() => removeSingleFilter(title)}>
                    <CloseFilterIcon />
                </button>
            </div>
        </div>
    )
}

export default FilterCard;