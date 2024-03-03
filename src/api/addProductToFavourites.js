import {doc, getDoc, updateDoc} from "firebase/firestore";
import {database} from "../firebase";
import {getProductData} from "./getProductData";

export const addProductToFavourites = async (setIsLoading, isAdded, updateShowingFavouriteProductsList, productId, userId, setIsAdded, collectionName) => {
    try {
        setIsLoading(true);
        const userRef = doc(database, "users", userId);
        const userSnap = await getDoc(userRef);
        if (isAdded) {
            const updatedFavouriteProducts = userSnap.data().favourite.filter(product => product.id !== productId);
            await updateDoc(userRef, {
                favourite: updatedFavouriteProducts
            })
            updateShowingFavouriteProductsList(productId);
        }
        if (!isAdded) {
            const currentProduct = await getProductData(collectionName, productId);
            const updatedFavouriteProducts = [...userSnap.data().favourite, currentProduct];
            await updateDoc(userRef, {
                favourite: updatedFavouriteProducts
            })
        }
        setIsLoading(false);
        setIsAdded(!isAdded);
    } catch (e) {
        console.log(e);
    }
}