import React, {useContext, useEffect, useState} from 'react';
import './style.scss';
import FavouriteTabItem from "./favourite-tab-item";
import {LoadingAnimationContext} from "../../Context";
import LoadingAnimation from "../../components/loadingAnimation/loadingAnimation";
import Title from "../../components/title";
import {getFavouriteProducts} from "../../api";

const FavouriteTab = ({activeTab}) => {
    const {isLoading, setIsLoading} = useContext(LoadingAnimationContext);
    const [favouriteProducts, setFavouriteProducts] = useState([]);
    const userId = JSON.parse(localStorage.getItem("userInfo")).id;

    const updateShowingFavouriteProductsList = (id) => {
        const updatedFavouriteProductsList = favouriteProducts.filter(product => product.id !== id);
        setFavouriteProducts(updatedFavouriteProductsList);
    }
    console.log(favouriteProducts)
    useEffect(() => {
        void getFavouriteProducts(setIsLoading, userId, setFavouriteProducts);
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
                            productImageURL={product.image}
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