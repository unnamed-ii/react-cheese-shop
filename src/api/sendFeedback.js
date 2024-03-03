import {addDoc, collection} from "firebase/firestore";
import {database} from "../firebase";
import {refreshPage} from "../utils/refreshPage";

export const sendFeedback = async (setIsLoading, form) => {
    try {
        setIsLoading(true);
        await addDoc(collection(database, "questions-messages"), form);
        setTimeout(() => {
            refreshPage();
        }, 1000)
    } catch (e) {
        console.log(e);
    }
}