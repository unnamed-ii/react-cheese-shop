import {doc, getDoc} from "firebase/firestore";
import {database} from "../firebase";

export const getArticle = async (setIsLoading, currentShowingCollectionId, setArticle) => {
    try {
        setIsLoading(true);
        const articleRef = await doc(database, "articles", currentShowingCollectionId);
        const articleSnap = await getDoc(articleRef);
        if (articleSnap.exists()) {
            setArticle({
                collectionId: articleSnap.id,
                ...articleSnap.data()
            });
        }
        setIsLoading(false);
    } catch (e) {
        console.log(e);
        setIsLoading(false);
    }
}