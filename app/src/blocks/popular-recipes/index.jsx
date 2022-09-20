import React from 'react';
import './style.scss';
import PopularRecipeCard from "../../components/popular-recipe-card";

const PopularRecipes = () => {
    return (
        <div className="popular__recipes">
            <div className="popular__recipes-title">
                популярные рецепты
            </div>
            <div className="popular__recipes-list">
                <PopularRecipeCard />
                <PopularRecipeCard />
                <PopularRecipeCard />
            </div>
        </div>
    );
};

export default PopularRecipes;