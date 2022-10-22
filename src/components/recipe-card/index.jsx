import React from 'react';
import './style.scss'
import {Link} from "react-router-dom";
import {ReactComponent as ArrowRightIcon} from "../../images/icons/arrow-right.svg";

const CheeseRecipeCard = () => {
    return (
        <div className="recipe">
            <div className="recipe__title">
                Молодые сыры
            </div>
            <div className="recipe__link">
                <Link to="/">Смотреть</Link>
                <ArrowRightIcon/>
            </div>
        </div>
    )
}

export default CheeseRecipeCard;