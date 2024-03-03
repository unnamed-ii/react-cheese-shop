import {addDoc, collection} from "firebase/firestore";
import {database} from "../firebase";
import {refreshPage} from "../utils/refreshPage";

export const sendReview = async (e, setIsLoading, userFullName, sendingReviewInputs, toggleModal) => {
    e.preventDefault();
    setIsLoading(true);
    try {
        const reviewData = {
            fullName: userFullName,
            rate: sendingReviewInputs.rate,
            text: sendingReviewInputs.text,
            createdAt: new Date().toDateString()
        }
        await addDoc(collection(database, "reviews"), reviewData);
        refreshPage();
        toggleModal();
    } catch (e) {
        console.log(e);
    }
    setIsLoading(false);
}