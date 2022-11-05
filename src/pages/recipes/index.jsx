import React from 'react';
import './style.scss'
import Wrapper from "../../components/wrapper";
import MainNav from "../../components/main-nav";
import CheeseRecipeCard from "../../components/recipe-card";
import AddedRecipe from "../../components/added-recipe-card";
import {RecipesData} from "./constants";

const Recipes = () => {
    return (
        <Wrapper>
            <div className="recipes">
                <div className="recipes__inner">
                    <MainNav/>
                    <div className="recipes__inner-content">
                        <div className="recipes__inner-content__cheese">
                            <div className="title">
                                рецепты сыров
                            </div>
                            <div className="box">
                                {RecipesData.cheeseRecipes.map(i =>
                                    <CheeseRecipeCard
                                        title={i.title}
                                    />
                                )}
                            </div>
                        </div>
                        <div className="recipes__inner-content__added">
                            <div className="title">
                                Последние добавленные
                            </div>
                            <div className="box">
                                {RecipesData.cheeseRecipes.map(i =>
                                    <AddedRecipe
                                        title={i.title}
                                    />
                                )}
                            </div>
                        </div>
                        <div className="recipes__inner-content__button">
                            <button>Загрузить еще</button>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default Recipes;