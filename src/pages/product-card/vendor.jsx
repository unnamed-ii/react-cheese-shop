import React from 'react';
import Counter from "../../components/counter";
import {ReactComponent as FullViewIcon} from "../../images/icons/360.svg";
import {ReactComponent as SolidHeartIcon} from "../../images/icons/profile/heart-solid.svg";
import {ReactComponent as QuestionIcon} from "../../images/icons/choose-modal-question.svg";
import {ReactComponent as GiftIcon} from "../../images/icons/product-card-page/gift.svg";
import {ReactComponent as CreditCardsIcon} from "../../images/icons/product-card-page/credit-cards.svg";
import {ReactComponent as MedalIcon} from "../../images/icons/product-card-page/medals.svg";
import productCart from "../../images/product-card-page.png";
import productCart2 from "../../images/product-card-page2.png";

const Vendor = () => {
    return (
        <div className="vendor">
            <div className="vendor__images">
                <img className="vendor__images-main" src={productCart} alt=""/>
                <div className="vendor__images-group">
                    <img src={productCart2} alt=""/>
                    <img src={productCart2} alt=""/>
                    <img src={productCart2} alt=""/>
                </div>
                <a href="" className="box__images-360__view">
                    <FullViewIcon/>
                    Посмотреть товар в 3D
                </a>
            </div>
            <div className="vendor__info">
                <div className="vendor__info-available">
                    В наличии
                </div>
                <div className="vendor__info-title">
                    <div className="vendor__info-title__price">
                        950 руб.
                        <span>1200&nbsp;руб.</span>
                    </div>
                    <div className="vendor__info-title__favourite">
                        <SolidHeartIcon/>
                        В избранное
                    </div>
                </div>
                <div className="vendor__info-bonus">
                    <span>+95</span>бонусных рублей <QuestionIcon/>
                </div>
                <div className="vendor__info-details">
                    <div className="vendor__info-details__detail">
                        Артикул: <span>23006</span>
                    </div>
                    <div className="vendor__info-details__detail">
                        Производитель: <span>Lactofarm ECO, Италия</span>
                    </div>
                </div>
                <div className="vendor__info-adding">
                    <Counter />
                    <button className="available">
                        В корзину
                    </button>
                    <button className="not-available">
                        Товар закончился
                    </button>
                </div>
                <div className="vendor__info-address">
                    <div className="box__info-address__title">
                        Выберите регион для рассчета стоимости доставки:
                    </div>
                    <select>
                        <option>Выберите регион</option>
                    </select>
                </div>
                <div className="vendor__info-benefits">
                    <div className="vendor__info-benefits__benefit">
                        <GiftIcon/>
                        Возвращаем 10% бонусами
                    </div>
                    <div className="vendor__info-benefits__benefit">
                        <CreditCardsIcon/>
                        Удобные способы оплаты
                    </div>
                    <div className="vendor__info-benefits__benefit">
                        <MedalIcon/>
                        Гарантия качества
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Vendor;