import {collection, getDocs} from "firebase/firestore";
import {database} from "../firebase";

export const getProducts = async (setIsLoading, setIngredientProducts, setEquipmentProducts) => {
    try {
        setIsLoading(true);
        const querySnapshot = await getDocs(collection(database, "products"));
        await querySnapshot.forEach((doc) => {
            const id = doc.id;
            const data = doc.data();
            const product = {...JSON.parse(JSON.stringify(data)), id};
            if (product.type === "ingredient") {
                setIngredientProducts(p => ([...p, product]));
            }
            if (product.type === "equipment") {
                setEquipmentProducts(p => ([...p, product]));
            }
            setIsLoading(false);
        });
    } catch (e) {
        setIsLoading(false);
        console.log(e);
    }
}