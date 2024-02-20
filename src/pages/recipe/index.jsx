import React, {useContext, useEffect, useState} from 'react';
import './style.scss';
import Wrapper from "../../components/wrapper";
import MainNav from "../../components/main-nav";
import PopularRecipes from "../../blocks/popular-recipes";
import RecipeDescription from "./recipe-descriptoin";
import RecipeBenefit from "./recipe-benefit";
import RecipeRecommendation from "./recipe-recommendation";
import {useLocation} from "react-router-dom";
import {LoadingAnimationContext} from "../../Context";
import {doc, getDoc} from "firebase/firestore";
import {database} from "../../firebase";
import LoadingAnimation from "../../components/loadingAnimation/loadingAnimation";

const Recipe = () => {
    const {pathname} = useLocation()
    const {isLoading, setIsLoading} = useContext(LoadingAnimationContext);
    const [recipe, setRecipe] = useState({});
    const currentShowingRecipeId = pathname.split('/')[pathname.split('/').length - 1];
    useEffect(() => {
        setIsLoading(true);
        const getRecipe = async () => {
            try {
                const recipeRef = await doc(database, 'recipes', currentShowingRecipeId);
                const recipeSnap = await getDoc(recipeRef);
                if (recipeSnap.exists()) {
                    setRecipe({
                        collectionId: recipeSnap.id,
                        ...recipeSnap.data()
                    });
                }
            } catch (e) {
                console.log(e);
            }
        }
        getRecipe();
        setIsLoading(false);
    }, []);

    return (
        <Wrapper>
            <LoadingAnimation isLoading={isLoading}/>
            <div className="recipe-page">
                <div className="recipe-page__inner">
                    <MainNav/>
                    <div className="recipe-page__inner-content">
                        <RecipeDescription
                            name={recipe.name}
                            description={recipe.description}
                            ingredients={recipe.ingredients}
                            equipment={recipe.equipment}
                        />
                        <RecipeBenefit
                            instruction={recipe.instruction}
                        />
                        <RecipeRecommendation />
                    </div>
                </div>
                <PopularRecipes />
            </div>
        </Wrapper>
    );
};

export default Recipe;