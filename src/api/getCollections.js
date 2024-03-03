import {collection, getDocs} from "firebase/firestore";
import {database} from "../firebase";

export const getCollections = async (setIsLoading, setCollections) => {
    try {
        setIsLoading(true);
        const querySnapshot = await getDocs(collection(database, 'collections'));
        await querySnapshot.forEach((doc) => {
            const id = doc.id;
            const data = doc.data();
            const newCollection = {...JSON.parse(JSON.stringify(data)), id};
            setCollections(p => ([...p, newCollection]));
        });
        setIsLoading(false);
    } catch (e) {
        setIsLoading(false);
        console.log(e);
    }
}