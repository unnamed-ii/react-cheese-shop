import React from 'react';
import './style.scss'
import analogProduct from "../../images/analog-product.png";

const AnalogProductCard = ({title="Стоик, Россия", text="Мезофильная закваска Biochem Lactoferm MSO (20U)", price="1,250₽"}) => {
    return (
        <div className="analog-product">
            <img src={analogProduct} alt=""/>
            <div className="analog-product__info">
                <div className="analog-product__info-title">
                    {title}
                </div>
                <div className="analog-product__info-text">
                    {text}
                </div>
                <div className="analog-product__info-bottom">
                    <div className="price">
                        {price}
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