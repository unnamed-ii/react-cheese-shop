import React from 'react';
import './style.scss';
import FavouriteTabItem from "./favourite-tab-item";
import favouriteProductImage from '../../images/favourite-product.png'

const FavouriteTab = ({activeTab}) => {
    return (
        <div className={"profile__tabs-item " + (activeTab === "favourite" && "active favourite")}>
            <div className="title">
                Избранные товары
            </div>
            <div className="subtitle">
                Товары, которые вы добавили в список будуших покупок
            </div>
            <div className="favourite-cards">
                <FavouriteTabItem
                    image={favouriteProductImage}
                    title={"Форма для твердого сыра 1 кг - 40 отверстий"}
                    subtitle={"БК-Углич-ЛД 1 Е.А."}
                    discountPrice={2300}
                    normalPrice={3400}
                />
                <FavouriteTabItem
                    image={favouriteProductImage}
                    status={"out-of-stock"}
                    title={"Форма для твердого сыра 1 кг - 40 отверстий"}
                    subtitle={"БК-Углич-ЛД 1 Е.А."}
                    discountPrice={2300}
                    normalPrice={3400}
                />
                <FavouriteTabItem
                    image={favouriteProductImage}
                    title={"Форма для твердого сыра 1 кг - 40 отверстий"}
                    subtitle={"БК-Углич-ЛД 1 Е.А."}
                    discountPrice={2300}
                    normalPrice={3400}
                />
                <FavouriteTabItem
                    image={favouriteProductImage}
                    status={"out-of-stock"}
                    title={"Форма для твердого сыра 1 кг - 40 отверстий"}
                    subtitle={"БК-Углич-ЛД 1 Е.А."}
                    discountPrice={2300}
                    normalPrice={3400}
                />
            </div>
        </div>
    );
};

export default FavouriteTab;