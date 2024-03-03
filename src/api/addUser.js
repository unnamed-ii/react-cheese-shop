import {addDoc, collection, getDocs} from "firebase/firestore";
import {database} from "../firebase";

export const addUser = async (data, navigate) => {
    try {
        const userInputsData = {
            ...data,
            phone: "",
            address: "",
            coupons: [],
            favourite: [],
            orders: [],
        }
        let isEmailRegistered = false;
        const usersCollectionSnapshot = await getDocs(collection(database, "users"));
        usersCollectionSnapshot.forEach((doc) => {
            const user = doc.data();
            if (user.email === userInputsData.email) {
                alert("Account with this email is already registered");
                isEmailRegistered = true;
            }
        });

        if (isEmailRegistered === false) {
            await addDoc(collection(database, "users"), userInputsData);
            navigate("/authorization");
        }
    } catch (e) {
        console.log(e);
    }
}