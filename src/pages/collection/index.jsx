import React, {useContext, useEffect, useState} from 'react';
import './style.scss';
import Wrapper from "../../components/wrapper";
import MainNav from "../../components/main-nav";
import ProductsSlider from "../../components/products-slider";
import CollectionInfo from "./collection-info";
import CollectionTabs from "./collection-tabs";
import {doc, getDoc} from "firebase/firestore";
import {database} from "../../firebase";
import {LoadingAnimationContext} from "../../Context";
import {useLocation} from "react-router-dom";
import LoadingAnimation from "../../components/loadingAnimation/loadingAnimation";

const Collection = () => {
    const {pathname} = useLocation()
    const {isLoading, setIsLoading} = useContext(LoadingAnimationContext);
    const [collectionData, setCollectionData] = useState({});
    const currentShowingCollectionId = pathname.split('/')[pathname.split('/').length - 1];
    useEffect(async () => {
        setIsLoading(true);
        try {
            const collectionRef = await doc(database, 'collections', currentShowingCollectionId);
            const collectionSnap = await getDoc(collectionRef);
            if (collectionSnap.exists()) {
                setCollectionData({
                    collectionId: collectionSnap.id,
                    ...collectionSnap.data()
                });
            }
        } catch (e) {
            console.log(e);
        }
        setIsLoading(false);
    }, []);

    return (
        <Wrapper>
            <LoadingAnimation isLoading={isLoading}/>
            <div className="collection">
                <div className="collection__inner">
                    <MainNav/>
                    <div className="collection__inner-content">
                        <CollectionInfo
                            price={collectionData.price}
                            inStock={collectionData.inStock}
                            title={collectionData.name}
                            shortDescription={collectionData.shortDescription}
                            id={collectionData.collectionId}
                            productImageURL={collectionData.image}
                        />
                        <CollectionTabs
                            description={collectionData.description}
                            reviews={collectionData.reviews}
                        />
                    </div>
                </div>
                <ProductsSlider title={'заказать дополнительно'}/>
            </div>
        </Wrapper>
    );
};

export default Collection;