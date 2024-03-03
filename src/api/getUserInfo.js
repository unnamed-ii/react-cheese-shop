import {doc, getDoc} from "firebase/firestore";
import {database} from "../firebase";

export const getUserInfo = async (userInfo) => {
    try {
        const userRef = doc(database, "users", userInfo.id);
        const userSnap = await getDoc(userRef);
        console.log("EditingInfoForm =>", userSnap.data());
    } catch (e) {
        console.log(e);
    }
}