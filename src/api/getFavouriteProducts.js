import {doc, getDoc} from "firebase/firestore";
import {database} from "../firebase";

export const getFavouriteProducts = async (setIsLoading, userId, setFavouriteProducts) => {
    try {
        setIsLoading(true);
        const userRef = await doc(database, 'users', userId);
        const userSnap = await getDoc(userRef);
        setFavouriteProducts([...userSnap.data().favourite]);
        setIsLoading(false);
    } catch (e) {
        console.log(e)
    }
}