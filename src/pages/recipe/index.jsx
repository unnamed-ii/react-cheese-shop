import React from 'react';
import './style.scss';
import Wrapper from "../../components/wrapper";
import MainNav from "../../components/main-nav";
import PopularRecipes from "../../blocks/popular-recipes";
import RecipeDescription from "./recipe-descriptoin";
import RecipeBenefit from "./recipe-benefit";
import RecipeRecommendation from "./recipe-recommendation";

const Recipe = () => {
    return (
        <Wrapper>
            <div className="recipe-page">
                <div className="recipe-page__inner">
                    <MainNav/>
                    <div className="recipe-page__inner-content">
                        <RecipeDescription />
                        <RecipeBenefit />
                        <RecipeRecommendation />
                    </div>
                </div>
                <PopularRecipes />
            </div>
        </Wrapper>
    );
};

export default Recipe;