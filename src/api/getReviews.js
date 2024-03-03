import {collection, getDocs} from "firebase/firestore";
import {database} from "../firebase";

export const getReviews = async (setIsLoading, setReviewsList) => {
    await setIsLoading(true);
    const querySnapshot = await getDocs(collection(database, "reviews"));
    querySnapshot.forEach((review) => {
        const addingReview = review.data();
        setReviewsList(prevState => ([
            ...prevState,
            addingReview
        ]))
    });
}