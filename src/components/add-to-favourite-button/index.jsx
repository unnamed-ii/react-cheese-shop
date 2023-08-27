import React, {useContext, useState} from 'react';
import "./style.scss";
import {ReactComponent as SolidHeartIcon} from "../../images/icons/profile/heart-solid.svg";
import {ReactComponent as HeartIcon} from "../../images/icons/orange-empty-heart.svg";
import {LoadingAnimationContext} from "../../Context";
import LoadingAnimation from "../loadingAnimation/loadingAnimation";
import {database} from "../../firebase";
import {doc, updateDoc, getDoc} from "firebase/firestore";

const AddToFavouriteButton = ({productId, collectionName, isAlreadyAdded = false}) => {
    const {isLoading, setIsLoading} = useContext(LoadingAnimationContext);
    const [isAdded, setIsAdded] = useState(isAlreadyAdded);
    const userId = JSON.parse(localStorage.getItem("userInfo")).id;

    const getProductData = async () => {
        try {
            const productRef = doc(database, collectionName, productId)
            const productData = await getDoc(productRef);
            const id = productData.id;
            const data = productData.data();
            return {
                id,
                ...data
            }
        } catch (e) {
            console.log(e);
        }
    }

    const addProductToFavourites = async () => {
        setIsLoading(true);
        try {
            const userRef = doc(database, "users", userId);
            const userSnap = await getDoc(userRef);
            if (isAdded) {
                // remove from favourites collection
                const updatedFavouriteProducts = userSnap.data().favourite.filter(product => product.id !== productId);
                await updateDoc(userRef, {
                    favourite: updatedFavouriteProducts
                })
            }
            if (!isAdded) {
                const currentProduct = await getProductData();
                const updatedFavouriteProducts = [...userSnap.data().favourite, currentProduct];
                await updateDoc(userRef, {
                    favourite: updatedFavouriteProducts
                })
            }
        } catch (e) {
            console.log(e);
        }
        setIsLoading(false);
        setIsAdded(!isAdded);
    }

    return (
        <button className="to-favourite" onClick={addProductToFavourites}>
            <LoadingAnimation isLoading={isLoading}/>
            {isAdded ? <SolidHeartIcon/> : <HeartIcon/>}
        </button>
    );
};

export default AddToFavouriteButton;