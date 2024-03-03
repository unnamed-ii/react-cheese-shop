import {collection, getDocs} from "firebase/firestore";
import {database} from "../firebase";

export const getArticles = async (setArticles) => {
    try {
        const querySnapshot = await getDocs(collection(database, "articles"));
        await querySnapshot.forEach((doc) => {
            const id = doc.id;
            const data = doc.data();
            const article = {...JSON.parse(JSON.stringify(data)), id};
            setArticles(p => ([...p, article]));
        })
    } catch (e) {
        console.log(e);
    }
}