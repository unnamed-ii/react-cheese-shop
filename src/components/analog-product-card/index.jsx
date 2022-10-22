import React from 'react';
import './style.scss'
import analogProduct from "../../images/analog-product.png";

const AnalogProductCard = () => {
    return (
        <div className="analog-product">
            <img src={analogProduct} alt=""/>
            <div className="analog-product__info">
                <div className="analog-product__info-title">
                    Стоик, Россия
                </div>
                <div className="analog-product__info-text">
                    Мезофильная закваска Biochem Lactoferm MSO (20U)
                </div>
                <div className="analog-product__info-bottom">
                    <div className="price">
                        1,250₽
                    </div>
                    <div>
                        5 stars
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AnalogProductCard;