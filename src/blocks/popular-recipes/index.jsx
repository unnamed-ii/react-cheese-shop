import React from 'react';
import './style.scss';
import PopularRecipeCard from "../../components/popular-recipe-card";
import {PopularRecipesData} from "./constants";

const PopularRecipes = () => {
    return (
        <div className="popular__recipes">
            <div className="popular__recipes-title">
                популярные рецепты
            </div>
            <div className="popular__recipes-list">
                {PopularRecipesData.map(popularRecipe =>
                    <PopularRecipeCard
                        title={popularRecipe.title}
                        text={popularRecipe.text}
                    />
                )}
            </div>
        </div>
    );
};

export default PopularRecipes;