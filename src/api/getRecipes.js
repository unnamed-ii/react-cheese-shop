import {collection, getDocs} from "firebase/firestore";
import {database} from "../firebase";

export const getRecipes = async (setIsLoading, setRecipes, setRecentAddedRecipes) => {
    try {
        setIsLoading(true);
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
        });
        setIsLoading(false);
    } catch (e) {
        setIsLoading(false);
        console.log(e);
    }
}