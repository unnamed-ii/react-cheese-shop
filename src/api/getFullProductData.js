import {doc, getDoc} from "firebase/firestore";
import {database} from "../firebase";

export const getFullProductData = async (setIsLoading, setProductData, currentShowingProductId) => {
    try {
        setIsLoading(true);
        const productRef = await doc(database, 'products', currentShowingProductId);
        const productSnap = await getDoc(productRef);
        if (productSnap.exists()) {
            setProductData({
                collectionId: productSnap.id,
                ...productSnap.data()
            });
        }
        setIsLoading(false);
    } catch (e) {
        setIsLoading(false);
        console.log(e);
    }
}