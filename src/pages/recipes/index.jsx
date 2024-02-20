import React, {useContext, useEffect, useState} from 'react';
import './style.scss'
import Wrapper from "../../components/wrapper";
import MainNav from "../../components/main-nav";
import CheeseRecipeCard from "../../components/recipe-card";
import AddedRecipe from "../../components/added-recipe-card";
import {LoadingAnimationContext} from "../../Context";
import {collection, getDocs} from "firebase/firestore";
import {database} from "../../firebase";
import LoadingAnimation from "../../components/loadingAnimation/loadingAnimation";
import Title from "../../components/title";

const Recipes = () => {
    const {isLoading, setIsLoading} = useContext(LoadingAnimationContext);
    const [recipes, setRecipes] = useState([]);
    const [recentAddedRecipes, setRecentAddedRecipes] = useState([]);

    useEffect( () => {
        setIsLoading(true);
        const getRecipes = async () => {
            try {
                let docsIdx = 0;
                const querySnapshot = await getDocs(collection(database, 'recipes'));
                await querySnapshot.forEach((doc) => {
                    docsIdx++;
                    const id = doc.id;
                    const data = doc.data();
                    const recipe = {...JSON.parse(JSON.stringify(data)), id};
                    if (docsIdx <= 6){
                        setRecipes(p => ([...p, recipe]));
                    } else {
                        setRecentAddedRecipes(p => ([...p, recipe]));
                    }
                })
            } catch (e) {
                console.log(e);
            }
        }
        getRecipes();
        setIsLoading(false);
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