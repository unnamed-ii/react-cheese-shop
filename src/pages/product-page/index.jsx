import React, {useContext, useEffect, useState} from 'react';
import './style.scss';
import Wrapper from "../../components/wrapper";
import MainNav from "../../components/main-nav";
import AnalogsProductsSlider from "../../components/analogs-slider";
import ProductAddedAlert from "../../components/product-added-alert";
import ProductsSlider from "../../components/products-slider";
import Tabs from "./tabs";
import Vendor from "./vendor";
import Rating from "@mui/material/Rating";
import {database} from "../../firebase";
import {getDoc, doc} from "firebase/firestore";
import {useLocation} from "react-router-dom";
import {LoadingAnimationContext} from "../../Context";
import LoadingAnimation from "../../components/loadingAnimation/loadingAnimation";
import {useDispatch, useSelector} from "react-redux";
import {addProductActionCreator} from "../../store/basket";
import card from '../../images/card.png'
import Title from "../../components/title";
import ProductAddedModal from "../../components/modals/product-added";

const ProductPage = () => {
    const dispatch = useDispatch();
    const {pathname} = useLocation();
    const basketProducts = useSelector(state => state.basket.products);
    const currentShowingProductId = pathname.split('/')[pathname.split('/').length - 1];
    const {isLoading, setIsLoading} = useContext(LoadingAnimationContext);
    const [productData, setProductData] = useState({});
    const [productsNumber, setProductsNumber] = useState(1);
    const [isProductAdded, setIsProductAdded] = useState(false);
    const toggleModal = () => setIsProductAdded(!isProductAdded);

    useEffect(async () => {
        setIsLoading(true);
        try {
            const productRef = await doc(database, 'products', currentShowingProductId);
            const productSnap = await getDoc(productRef);
            if (productSnap.exists()) {
                setProductData({
                    collectionId: productSnap.id,
                    ...productSnap.data()
                });
            }
        } catch (e) {
            console.log(e);
        }
        setIsLoading(false);
    }, []);

    const addProductToBasket = () => {
        let isProductInBasket = false;
        for (let product of basketProducts) {
            if (product.id === productData.id) {
                isProductInBasket = true;
                break;
            }
        }

        if (!isProductInBasket) {
            dispatch(addProductActionCreator({
                ...productData,
                title: productData.name,
                id: productData.collectionId,
                price: productData.discountPrice,
                amount: productsNumber,
                image: card,
            }));
            toggleModal();
        }
    }

    return (
        <Wrapper>
            <LoadingAnimation isLoading={isLoading}/>
            <div className={"product-page " + (productData.inStock === false && "not-available")}>
                <ProductAddedModal
                    toggleModal={toggleModal}
                    isModalOpened={isProductAdded}
                    title={productData?.name}
                    amount={productsNumber}
                />
                <div className="product-card__inner">
                    <MainNav/>
                    <div className="product-card__inner-content">
                        <Title
                            title={productData?.name}
                            className={"page"}
                        />
                        <Vendor
                            price={productData.price}
                            discountPrice={productData.discountPrice}
                            code={productData.code}
                            manufacturer={productData.manufacturer}
                            addProductToBasket={addProductToBasket}
                            productsNumber={productsNumber}
                            setProductsNumber={setProductsNumber}
                            productId={productData?.collectionId}
                            isInStock={productData?.inStock}
                        />
                        <AnalogsProductsSlider bigSize={!productData.inStock}/>
                        <Tabs
                            description={productData.description}
                            reviews={productData.reviews}
                            characteristics={productData.characteristics}
                        />
                    </div>
                </div>
                <ProductsSlider title={"Похожие товары"}/>
            </div>
        </Wrapper>
    );
};

export default ProductPage;