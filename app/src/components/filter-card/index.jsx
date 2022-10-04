import React from 'react';
import './style.scss'
import {ReactComponent as CloseFilterIcon} from "../../images/icons/close-moduls-btn.svg";

const FilterCard = () => {
    return (
        <div className="added-filter">
            <div className="added-filter__inner">
                Закваски для йогурта
                <CloseFilterIcon />
            </div>
        </div>
    )
}

export default FilterCard;