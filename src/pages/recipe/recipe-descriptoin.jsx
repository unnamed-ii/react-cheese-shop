import React from 'react';
import {RecipeData} from "./constants";
import {ReactComponent as BasketIcon} from "../../images/icons/recipe-page-basket.svg";
import recipeDescription from "../../images/recipe-page-description.png";
import Title from "../../components/title";

const RecipeDescription = ({
                               name,
                               description,
                               ingredients,
                               equipment
                           }) => {
    return (
        <div className="description">
            <Title
                title={name}
                className={"recipe-page-title"}
            />
            <div className="description__text">
                {description}
            </div>
            <div className="description__ingredients">
                <div className="description__ingredients-title">
                    Ингредиенты
                </div>
                <div className="description__ingredients-list">
                    {ingredients?.map((ingredient, idx) =>
                        <div className="description__ingredients-list__item" key={idx}>
                            <div className="text">
                                {ingredient}
                            </div>
                            {ingredient.isAvailableToBuy &&
                            <button>
                                <BasketIcon/>
                                В корзину
                            </button>
                            }
                        </div>
                    )}
                </div>
            </div>
            <div className="description__equipments">
                <div className="description__equipments-title">
                    Оборудование
                </div>
                <div className="description__equipments-list">
                    {equipment?.map((equipment, idx) =>
                        <div className="description__ingredients-list__item" key={idx}>
                            <div className="text">
                                {equipment}
                            </div>
                            {equipment.isAvailableToBuy &&
                            <button>
                                <BasketIcon/>
                                В корзину
                            </button>
                            }
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default RecipeDescription;