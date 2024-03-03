import {doc, getDoc} from "firebase/firestore";
import {database} from "../firebase";

export const getUsersPreviousOrders = async (setIsLoading, userId, setOrders) => {
    try {
        setIsLoading(true);
        const userRef = await doc(database, "users", userId);
        const userData = await getDoc(userRef);
        const usersPreviousOrders = userData.data().orders;
        setOrders([...usersPreviousOrders]);
        setIsLoading(false);
    } catch (e) {
        console.log(e)
    }
}