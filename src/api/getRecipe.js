import {doc, getDoc} from "firebase/firestore";
import {database} from "../firebase";

export const getRecipe = async (setIsLoading, currentShowingRecipeId, setRecipe) => {
    try {
        setIsLoading(true);
        const recipeRef = await doc(database, 'recipes', currentShowingRecipeId);
        const recipeSnap = await getDoc(recipeRef);
        if (recipeSnap.exists()) {
            setRecipe({
                collectionId: recipeSnap.id,
                ...recipeSnap.data()
            });
        }
        setIsLoading(false);
    } catch (e) {
        setIsLoading(false);
        console.log(e);
    }
}