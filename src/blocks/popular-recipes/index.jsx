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
                {PopularRecipesData.map(i =>
                    <PopularRecipeCard
                        title={i.title}
                        text={i.text}
                    />
                )}
            </div>
        </div>
    );
};

export default PopularRecipes;