import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBUgtgqPN1PgpKpYqBfZel7HpuDDrJ4GHc",
    authDomain: "cheese-shopp.firebaseapp.com",
    projectId: "cheese-shopp",
    storageBucket: "cheese-shopp.appspot.com",
    messagingSenderId: "837477032784",
    appId: "1:837477032784:web:d3e98e0fa7021721be0255"
};

const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const storage = getStorage(app);