import React, {useContext, useEffect, useState} from 'react';
import './style.scss';
import FavouriteTabItem from "./favourite-tab-item";
import favouriteProductImage from '../../images/favourite-product.png'
import {database} from "../../firebase";
import {doc, getDoc} from "firebase/firestore";
import {LoadingAnimationContext} from "../../Context";
import LoadingAnimation from "../../components/loadingAnimation/loadingAnimation";
import Title from "../../components/title";

const FavouriteTab = ({activeTab}) => {
    const {isLoading, setIsLoading} = useContext(LoadingAnimationContext);
    const [favouriteProducts, setFavouriteProducts] = useState([]);
    const userId = JSON.parse(localStorage.getItem("userInfo")).id;

    const updateShowingFavouriteProductsList = (id) => {
        const updatedFavouriteProductsList = favouriteProducts.filter(product => product.id !== id);
        setFavouriteProducts(updatedFavouriteProductsList);
    }

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
        return () => {
            setFavouriteProducts([]);
        }
    }, []);


    return (
        <div className={"profile__tabs-item " + (activeTab === "favourite" && "active favourite")}>
            <LoadingAnimation isLoading={isLoading}/>
            <Title
                title={"Избранные товары"}
                className={"profile-page__tab-title"}
            />
            <div className="subtitle">
                Товары, которые вы добавили в список будуших покупок
            </div>
            {favouriteProducts.length
                ?
                <div className="favourite-cards">
                    {favouriteProducts.map(product => (
                        <FavouriteTabItem
                            key={product.id}
                            title={product.name}
                            productId={product.id}
                            status={product.inStock}
                            normalPrice={product.price}
                            image={favouriteProductImage}
                            manufacturer={product.manufacturer}
                            discountPrice={product.discountPrice}
                            updateShowingFavouriteProductsList={updateShowingFavouriteProductsList}
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