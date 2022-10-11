import React from 'react';
import './style.scss'
import {ReactComponent as CloseBtnIcon} from '../../../images/icons/close-moduls-btn.svg';
import {ReactComponent as QuestionMarkIcon} from '../../../images/icons/choose-modal-question.svg';
import productImg from '../../../images/icons/choose-product-img.png';

const ProductAddedModal = () => {
    return (
        <div className="product-added__wrapper">
            <div className="product-added">
                <div className="product-added__title">
                    Добавлено в корзину
                </div>
                <div className="product-added__close">
                    <CloseBtnIcon />
                </div>
                <div className="product-added__product">
                    <img src={productImg} alt="" className="product-added__product-image"/>
                    <div className="product-added__product-info">
                        <div className="top">
                            <div className="top__title">
                                Ароматобразующая закваска Danisсo Choozit Flav 43 LYO (5d)
                            </div>
                            <div className="top__amount">
                                2 шт.
                            </div>
                        </div>
                        <div className="bonus">
                            <span>+99</span>  бонусных рублей
                            <QuestionMarkIcon className="question-mark-icon"/>
                        </div>
                    </div>
                </div>
                <div className="product-added__buttons">
                    <div className="product-added__buttons-button">
                        Продолжить покупки
                    </div>
                    <div className="product-added__buttons-button orange">
                        Просмотр корзины
                    </div>
                </div>
                <div className="product-added__slider">

                </div>
            </div>
        </div>
    );
};

export default ProductAddedModal;