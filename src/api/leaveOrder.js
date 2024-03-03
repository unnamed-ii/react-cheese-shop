import {addDoc, collection, doc, getDoc, updateDoc} from "firebase/firestore";
import {database} from "../firebase";
import {clearBasketActionCreator} from "../store/basket";

export const leaveOrder = async (setIsLoading, order, userId, navigate, dispatch) => {
    try {
        setIsLoading(true);
        await addDoc(collection(database, "orders"), order);
        const userRef = await doc(database, "users", userId);
        const userDoc = await getDoc(userRef);
        const userPreviousOrders = [...userDoc.data().orders];
        await updateDoc(userRef, {
            orders: [...userPreviousOrders, ...order.products]
        })
        navigate("/");
        alert("Ваш заказ принят!")
        dispatch(clearBasketActionCreator());
        setIsLoading(false);
    } catch (e) {
        console.log(e)
    }
}