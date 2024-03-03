import {collection, doc, getDocs, updateDoc} from "firebase/firestore";
import {database} from "../firebase";

export const changeUserPassword = async (oldPassword, currentPassword, newPassword, userId) => {
    try {
        const querySnapshot = await getDocs(collection(database, "users"));
        querySnapshot.forEach((user) => {
            if (user.data().password === oldPassword) {
                currentPassword = oldPassword;
            }
        });

        if (currentPassword){
            // here we'll send new pass to server
            const userRef = await doc(database, "users", userId);
            await updateDoc(userRef, {
                password: newPassword,
            })
        }
    } catch (e) {
        console.log(e);
    }
}