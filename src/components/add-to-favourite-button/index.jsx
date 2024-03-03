import React, {useContext, useState} from 'react';
import "./style.scss";
import {ReactComponent as SolidHeartIcon} from "../../images/icons/profile/heart-solid.svg";
import {ReactComponent as HeartIcon} from "../../images/icons/orange-empty-heart.svg";
import {LoadingAnimationContext} from "../../Context";
import LoadingAnimation from "../loadingAnimation/loadingAnimation";
import {addProductToFavourites} from "../../api";

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

    return (
        <button className="to-favourite"
                onClick={() => addProductToFavourites(setIsLoading, isAdded, updateShowingFavouriteProductsList, productId, userId, setIsAdded, collectionName)}
                {...props}>
            <LoadingAnimation isLoading={isLoading}/>
            {isAdded ? <SolidHeartIcon/> : <HeartIcon/>}
        </button>
    );
};

export default AddToFavouriteButton;