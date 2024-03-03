import {doc, getDoc} from "firebase/firestore";
import {database} from "../firebase";

export const getProductData = async (collectionName, productId) => {
    try {
        const productRef = doc(database, collectionName, productId)
        const productData = await getDoc(productRef);
        const id = productData.id;
        const data = productData.data();
        return {
            id,
            ...data
        }
    } catch (e) {
        console.log(e);
    }
}