import {ref, getDownloadURL} from "firebase/storage";
import {storage} from "../firebase";

export const getFileURLFromFirebaseStorage = async (fileURL, setState) => {
    try {
        const starsRef = ref(storage, fileURL);
        const url = await getDownloadURL(starsRef);
        setState(url);
    } catch (e) {
        console.log(e);
    }
}