import React from 'react';
import './style.scss'
import {Link} from "react-router-dom";
import {ReactComponent as ArrowRightIcon} from "../../images/icons/arrow-right.svg";
import addedRecipe from "../../images/added-recipe.png";

const AddedRecipe = ({title, text, id}) => {
    return (
        <div className="added-recipe">
            <img src={addedRecipe} alt=""/>
            <div className="added-recipe__info">
                <div className="added-recipe__info-title">
                    {title}
                </div>
                <div className="added-recipe__info-text">
                    {text}
                </div>
            </div>
            <div className="added-recipe__link">
                <Link to={id}>
                    Читать далее
                </Link>
                <ArrowRightIcon/>
            </div>
        </div>
    )
}

export default AddedRecipe;