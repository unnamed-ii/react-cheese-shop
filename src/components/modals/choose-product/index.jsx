import React from 'react';
import './style.scss'
import ModalWrapper from "../../modal-wrapper";
import {ReactComponent as CloseBtnIcon} from '../../../images/icons/close-moduls-btn.svg';
import productImage from '../../../images/choose-product.png';

const ChooseProductModal = () => {
    return (
        <ModalWrapper>
            <div className="choose-product">
                <div className="choose-product__title">
                    Выберите производителя
                </div>
                <div className="choose-product__close">
                    <CloseBtnIcon />
                </div>
                <div className="choose-product__products">
                    <div className="choose-product__product">
                        <div className="choose-product__product-image">
                            <img src={productImage} alt=""/>
                        </div>
                        <div className="choose-product__product-info">
                            <div className="top">
                                <div className="title">
                                    Sacco, Италия
                                </div>
                                <div className="rate">
                                    5 stars
                                </div>
                            </div>
                            <div className="title">
                                Ароматообразующая закваска
                                LH 100 LYO (10D)
                            </div>
                            <div className="bottom">
                                <div className="price">
                                    860 руб. / 1 шт.
                                </div>
                                <button>
                                    В корзину
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="choose-product__product">
                        <div className="choose-product__product-image">
                            <img src={productImage} alt=""/>
                        </div>
                        <div className="choose-product__product-info">
                            <div className="top">
                                <div className="title">
                                    Sacco, Италия
                                </div>
                                <div className="rate">
                                    5 stars
                                </div>
                            </div>
                            <div className="title">
                                Ароматообразующая закваска
                                LH 100 LYO (10D)
                            </div>
                            <div className="bottom">
                                <div className="price">
                                    860 руб. / 1 шт.
                                </div>
                                <button>
                                    В корзину
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="choose-product__product">
                        <div className="choose-product__product-image">
                            <img src={productImage} alt=""/>
                        </div>
                        <div className="choose-product__product-info">
                            <div className="top">
                                <div className="title">
                                    Sacco, Италия
                                </div>
                                <div className="rate">
                                    5 stars
                                </div>
                            </div>
                            <div className="title">
                                Ароматообразующая закваска
                                LH 100 LYO (10D)
                            </div>
                            <div className="bottom">
                                <div className="price">
                                    860 руб. / 1 шт.
                                </div>
                                <button>
                                    В корзину
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ModalWrapper>
    );
};

export default ChooseProductModal;