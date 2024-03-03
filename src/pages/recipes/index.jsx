import React, {useContext, useEffect, useState} from 'react';
import './style.scss'
import Wrapper from "../../components/wrapper";
import MainNav from "../../components/main-nav";
import CheeseRecipeCard from "../../components/recipe-card";
import AddedRecipe from "../../components/added-recipe-card";
import {LoadingAnimationContext} from "../../Context";
import LoadingAnimation from "../../components/loadingAnimation/loadingAnimation";
import Title from "../../components/title";
import {getRecipes} from "../../api";

const Recipes = () => {
    const {isLoading, setIsLoading} = useContext(LoadingAnimationContext);
    const [recipes, setRecipes] = useState([]);
    const [recentAddedRecipes, setRecentAddedRecipes] = useState([]);

    useEffect( () => {
        void getRecipes(setIsLoading, setRecipes, setRecentAddedRecipes);
    }, []);

    return (
        <Wrapper>
            <LoadingAnimation isLoading={isLoading}/>
            <div className="recipes">
                <div className="recipes__inner">
                    <MainNav/>
                    <div className="recipes__inner-content">
                        <div className="recipes__inner-content__cheese">
                            <Title
                                title={"Рецепты сыров"}
                                className={"recipes-page"}
                            />
                            <div className="box">
                                {recipes?.map(recipe =>
                                    <CheeseRecipeCard
                                        key={recipe.id}
                                        id={recipe.id}
                                        title={recipe.name}
                                    />
                                )}
                            </div>
                        </div>
                        <div className="recipes__inner-content__added">
                            <Title
                                title={"Последние добавленные"}
                                className={"recipes-page"}
                            />
                            <div className="box">
                                {recentAddedRecipes?.map(recipe =>
                                    <AddedRecipe
                                        id={recipe.id}
                                        key={recipe.id}
                                        title={recipe.name}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default Recipes;