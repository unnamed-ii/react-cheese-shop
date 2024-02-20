import React, {useContext, useState} from 'react';
import "./style.scss";
import {ReactComponent as SolidHeartIcon} from "../../images/icons/profile/heart-solid.svg";
import {ReactComponent as HeartIcon} from "../../images/icons/orange-empty-heart.svg";
import {LoadingAnimationContext} from "../../Context";
import LoadingAnimation from "../loadingAnimation/loadingAnimation";
import {database} from "../../firebase";
import {doc, getDoc, updateDoc} from "firebase/firestore";

const AddToFavouriteButton = ({
                                  productId,
                                  collectionName,
                                  isAlreadyAdded = false,
                                  updateShowingFavouriteProductsList,
                                  ...props
                              }) => {
    const {isLoading, setIsLoading} = useContext(LoadingAnimationContext);
    const isAuth = JSON.parse(localStorage.getItem('isUserAuthorized'));
    const [isAdded, setIsAdded] = useState(isAlreadyAdded);
    const userId = isAuth ? JSON.parse(localStorage.getItem("userInfo")).id : "";
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
        try {
            setIsLoading(true);
            const userRef = doc(database, "users", userId);
            const userSnap = await getDoc(userRef);
            if (isAdded) {
                const updatedFavouriteProducts = userSnap.data().favourite.filter(product => product.id !== productId);
                await updateDoc(userRef, {
                    favourite: updatedFavouriteProducts
                })
                updateShowingFavouriteProductsList(productId);
            }
            if (!isAdded) {
                const currentProduct = await getProductData();
                const updatedFavouriteProducts = [...userSnap.data().favourite, currentProduct];
                await updateDoc(userRef, {
                    favourite: updatedFavouriteProducts
                })
            }
            setIsLoading(false);
            setIsAdded(!isAdded);
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <button className="to-favourite" onClick={addProductToFavourites} {...props}>
            <LoadingAnimation isLoading={isLoading}/>
            {isAdded ? <SolidHeartIcon/> : <HeartIcon/>}
        </button>
    );
};

export default AddToFavouriteButton;