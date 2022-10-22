import React from 'react';
import './style.scss'
import Card from "../card";
import Wrapper from "../wrapper";

const SimilarProducts = () => {
    return (
        <Wrapper>
            <div className="similar-products">
                <div className="similar-products__title">
                    похожие товары
                </div>
                <div className="similar-products__list">
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>
        </Wrapper>
    );
};

export default SimilarProducts;