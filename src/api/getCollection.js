import {doc, getDoc} from "firebase/firestore";
import {database} from "../firebase";

export const getCollection = async (setIsLoading, currentShowingCollectionId, setCollectionData) => {
    setIsLoading(true);
    try {
        const collectionRef = await doc(database, 'collections', currentShowingCollectionId);
        const collectionSnap = await getDoc(collectionRef);
        if (collectionSnap.exists()) {
            setCollectionData({
                collectionId: collectionSnap.id,
                ...collectionSnap.data()
            });
        }
    } catch (e) {
        console.log(e);
    }
    setIsLoading(false);
}