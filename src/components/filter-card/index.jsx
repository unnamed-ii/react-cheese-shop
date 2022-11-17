import React from 'react';
import './style.scss'
import {ReactComponent as CloseFilterIcon} from "../../images/icons/close-moduls-btn.svg";

const FilterCard = ({title}) => {
    return (
        <div className="added-filter">
            <div className="added-filter__inner">
                {title}
                <CloseFilterIcon />
            </div>
        </div>
    )
}

export default FilterCard;