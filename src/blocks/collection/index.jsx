import React from 'react';
import './style.scss';
import Wrapper from "../../components/wrapper";
import MainNav from "../../components/main-nav";
import ProductsSlider from "../../components/products-slider";
import CollectionInfo from "./collection-info";
import CollectionTabs from "./collection-tabs";

const Collection = () => {


    return (
        <Wrapper>
            <div className="collection">
                <div className="collection__inner">
                    <MainNav/>
                    <div className="collection__inner-content">
                        <CollectionInfo />
                        <CollectionTabs />
                    </div>
                </div>
                <ProductsSlider title={'заказать дополнительно'}/>
            </div>
        </Wrapper>
    );
};

export default Collection;