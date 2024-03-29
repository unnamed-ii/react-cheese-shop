import React from 'react';
import './style.scss';
import PopularRecipeCard from "../../components/popular-recipe-card";
import {PopularRecipesData} from "./constants";
import Title from "../../components/title";

const PopularRecipes = () => {
    return (
        <div className="popular__recipes">
            <Title
                title={"Популярные рецепты"}
                className={"popular-recipes__title"}
            />
            <div className="popular__recipes-list">
                {PopularRecipesData.map(popularRecipe =>
                    <PopularRecipeCard
                        key={popularRecipe.id}
                        title={popularRecipe.title}
                        text={popularRecipe.text}
                    />
                )}
            </div>
        </div>
    );
};

export default PopularRecipes;