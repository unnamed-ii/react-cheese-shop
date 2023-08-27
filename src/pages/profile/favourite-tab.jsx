import React, {useContext, useEffect, useState} from 'react';
import './style.scss';
import FavouriteTabItem from "./favourite-tab-item";
import favouriteProductImage from '../../images/favourite-product.png'
import {database} from "../../firebase";
import {doc, getDoc} from "firebase/firestore";
import {LoadingAnimationContext} from "../../Context";
import LoadingAnimation from "../../components/loadingAnimation/loadingAnimation";

const FavouriteTab = ({activeTab}) => {
    const {isLoading, setIsLoading} = useContext(LoadingAnimationContext);
    const [favouriteProducts, setFavouriteProducts] = useState([]);
    const userId = JSON.parse(localStorage.getItem("userInfo")).id;

    useEffect(() => {
        const getFavouriteProducts = async () => {
            try {
                setIsLoading(true);
                const userRef = await doc(database, 'users', userId);
                const userSnap = await getDoc(userRef);
                setFavouriteProducts([...userSnap.data().favourite]);
                setIsLoading(false);
            } catch (e) {
                console.log(e)
            }
        }
        getFavouriteProducts();
    }, []);


    return (
        <div className={"profile__tabs-item " + (activeTab === "favourite" && "active favourite")}>
            <LoadingAnimation isLoading={isLoading}/>
            <div className="title">
                Избранные товары
            </div>
            <div className="subtitle">
                Товары, которые вы добавили в список будуших покупок
            </div>
            {favouriteProducts.length
                ?
                <div className="favourite-cards">
                    {favouriteProducts.map(product => (
                        <FavouriteTabItem
                            key={product.id}
                            image={favouriteProductImage}
                            status={product.status}
                            title={product.title}
                            subtitle={product.subtitle}
                            discountPrice={product.discountPrice}
                            normalPrice={product.price}
                        />
                    ))}
                </div>
                :
                <h1>
                    Тут пусто
                </h1>
            }
        </div>
    );
};

export default FavouriteTab;