import React, {useState} from 'react';
import './style.scss';
import Wrapper from "../../components/wrapper";
import MainNav from "../../components/main-nav";
import AnalogsProductsSlider from "../../components/analogs-slider";
import ProductAddedAlert from "../../components/product-added-alert";
import ProductsSlider from "../../components/products-slider";
import Tabs from "./tabs";
import Vendor from "./vendor";
import Rate from "./rate";

const ProductCard = () => {
    const [isProductAvailable, setIsProductAvailable] = useState(true);
    const [showAlert, setShowAlert] = useState(false);

    return (
        <Wrapper>
            <div className="product-card">
                <ProductAddedAlert productName={'Мезофильная закваска Hansen Flora Danica (50U)'} showAlert={showAlert}/>
                <div className="product-card__inner">
                    <MainNav/>
                    <div className="product-card__inner-content">
                        <div className="title">
                            Мезофильная закваска Hansen Flora Danica (50U)
                        </div>
                        <Rate />
                        <Vendor />
                        {isProductAvailable
                            ? <AnalogsProductsSlider/>
                            : <AnalogsProductsSlider bigSize={!isProductAvailable}/>
                        }
                        <Tabs />
                    </div>
                </div>
                <ProductsSlider title={"похожие товары"}/>
            </div>
        </Wrapper>
    );
};

export default ProductCard;