import {doc, updateDoc} from "firebase/firestore";
import {database} from "../firebase";

export const updateUserInfo = async (form, userInfo) => {
    try {
        const userDataRef = doc(database, "users", userInfo.id);
        const userData = {
            fullName: form.fullName,
            phone: form.phone,
            email: form.email,
            address: form.address,
        }
        await updateDoc(userDataRef, userData);
        await localStorage.setItem("userInfo", JSON.stringify({
            id: userInfo.id,
            userData: userData
        }));
    } catch (e) {
        console.log(e)
    }
}