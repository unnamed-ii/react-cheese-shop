import React from 'react';
import './style.scss'
import {ReactComponent as ArrowRightIcon} from "../../images/icons/arrow-right.svg";
import {Link} from "react-router-dom";
import popularRecipe from "../../images/popular-recipe.png";

const PopularRecipeCard = () => {
    return (
        <div className="popular-recipe">
            <img src={popularRecipe} alt=""/>
            <div className="popular-recipe__info">
                <div className="popular-recipe__info-title">
                    посол сырной головки
                </div>
                <div className="popular-recipe__info-text">
                    Особенно характерно наличие дырочек разных размеров в структуре швейцарских сортов сыра. Сначала
                    люди думали, что эти
                </div>
            </div>
            <div className="popular-recipe__link">
                <Link to="/">Читать далее </Link>
                <ArrowRightIcon/>
            </div>
        </div>
    )
}

export default PopularRecipeCard;