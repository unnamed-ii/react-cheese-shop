import React, {useState} from 'react';
import './style.scss';
import Wrapper from "../../components/wrapper";
import MainNav from "../../components/main-nav";
import SimilarProducts from "../../components/similar-products";
import AnalogsProductsSlider from "../../components/analogs-slider";
import {ReactComponent as ReviewIcon} from "../../images/icons/review.svg";
import {ReactComponent as SolidHeartIcon} from "../../images/icons/profile/heart-solid.svg";
import {ReactComponent as QuestionIcon} from "../../images/icons/choose-modal-question.svg";
import {ReactComponent as GiftIcon} from "../../images/icons/product-card-page/gift.svg";
import {ReactComponent as CreditCardsIcon} from "../../images/icons/product-card-page/credit-cards.svg";
import {ReactComponent as MedalIcon} from "../../images/icons/product-card-page/medals.svg";
import {ReactComponent as FullViewIcon} from "../../images/icons/360.svg";
import productCart from '../../images/product-card-page.png'
import productCart2 from '../../images/product-card-page2.png'
import ProductAddedAlert from "../../components/product-added-alert";

const ProductCard = () => {
    const [isProductAvailable, setIsProductAvailable] = useState(false);

    return (
        <Wrapper>
            <div className="product-card">
                <ProductAddedAlert productName={'Мезофильная закваска Hansen Flora Danica (50U)'}/>
                <div className="product-card__inner">
                    <MainNav/>
                    <div className="product-card__inner-content">
                        <div className="title">
                            Мезофильная закваска Hansen Flora Danica (50U)
                        </div>
                        <div className="rate">
                            <div className="rate__stars">
                                5 stars
                            </div>
                            <a href="#" className="rate__reviews">
                                <ReviewIcon/>
                                2 Отзыва
                            </a>
                        </div>
                        <div className="box">
                            <div className="box__images">
                                <img className="box__images-main" src={productCart} alt=""/>
                                <div className="box__images-group">
                                    <img src={productCart2} alt=""/>
                                    <img src={productCart2} alt=""/>
                                    <img src={productCart2} alt=""/>
                                </div>
                                <a href="" className="box__images-360__view">
                                    <FullViewIcon/>
                                    Посмотреть товар в 3D
                                </a>
                            </div>
                            <div className="box__info">
                                <div className="box__info-available">
                                    В наличии
                                </div>
                                <div className="box__info-title">
                                    <div className="box__info-title__price">
                                        950 руб.
                                        <span>1200&nbsp;руб.</span>
                                    </div>
                                    <div className="box__info-title__favourite">
                                        <SolidHeartIcon/>
                                        В избранное
                                    </div>
                                </div>
                                <div className="box__info-bonus">
                                    <span>+95</span>бонусных рублей <QuestionIcon/>
                                </div>
                                <div className="box__info-details">
                                    <div className="box__info-details__detail">
                                        Артикул: <span>23006</span>
                                    </div>
                                    <div className="box__info-details__detail">
                                        Производитель: <span>Lactofarm ECO, Италия</span>
                                    </div>
                                </div>
                                <div className="box__info-adding">
                                    <div className="box__info-adding-calculator">
                                        calculator
                                    </div>
                                    <button className="available">
                                        В корзину
                                    </button>
                                    <button className="not-available">
                                        Товар закончился
                                    </button>
                                </div>
                                <div className="box__info-address">
                                    <div className="box__info-address__title">
                                        Выберите регион для рассчета стоимости доставки:
                                    </div>
                                    <select>
                                        <option>Выберите регион</option>
                                    </select>
                                </div>
                                <div className="box__info-benefits">
                                    <div className="box__info-benefits__benefit">
                                        <GiftIcon/>
                                        Возвращаем 10% бонусами
                                    </div>
                                    <div className="box__info-benefits__benefit">
                                        <CreditCardsIcon/>
                                        Удобные способы оплаты
                                    </div>
                                    <div className="box__info-benefits__benefit">
                                        <MedalIcon/>
                                        Гарантия качества
                                    </div>
                                </div>
                            </div>
                        </div>
                        {isProductAvailable
                            ? <AnalogsProductsSlider/>
                            : <AnalogsProductsSlider bigSize={!isProductAvailable}/>
                        }
                        <div className="tabs">
                            <div className="tabs__titles">
                                <button className="tabs__titles-title active">Описание</button>
                                <button className="tabs__titles-title">Доставка и оплата</button>
                                <button className="tabs__titles-title">Отзывы (3)</button>
                            </div>
                            <div className="tabs__items">
                                <div className="tabs__items-description active">
                                    <div className="tabs__items-description__text">
                                        P00802 Эта форма небольших размеров предназначена для получения маленьких
                                        головок сыра Рикотта и других мягких сыров в условиях домашнего или фермерского
                                        производства. Наличие хорошего дренажа обеспечивает ее использование для
                                        прессования сыров с плесенью, в том числе сорта Французский нешатель. Размер
                                        сырной головки, которую удается получить при использовании этой формы – до 80 г.
                                        Это аккуратный, готовый к подаче кусочек сыра, который не придется нарезать.
                                        Изготовлена форма из специального высококачественного пищевого пластика, который
                                        хорошо адаптирован к агрессивной молочнокислой среде.
                                    </div>
                                    <div className="tabs__items-description__rows">
                                        <div className="row">
                                            <div className="row__title">
                                                Выход сыра
                                            </div>
                                            <div className="row__text">
                                                до 5-6 кг
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="row__title">
                                                Материал
                                            </div>
                                            <div className="row__text">
                                                высококачественный пищевой пластик
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="row__title">
                                                Наличие дна
                                            </div>
                                            <div className="row__text">
                                                есть
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="row__title">
                                                Наличие ножек
                                            </div>
                                            <div className="row__text">
                                                нет
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="row__title">
                                                Размеры
                                            </div>
                                            <div className="row__text">
                                                высота - 22 см, диаметр верха - 27 см
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tabs__items-deliveryPayment">
                                    <div className="tabs__items-deliveryPayment__title">
                                        Для Вашего удобства мы предусмотрели все возможные способы оплаты заказа:
                                    </div>
                                    <div className="tabs__items-deliveryPayment__rows">
                                        <div className="row">
                                            <div className="row__title">
                                                Предоплата по счету
                                            </div>
                                            <div className="row__text">
                                                При оформлении заказа выберите в поле оплаты "счёт для юридических лиц"
                                                и введите реквизиты. Счет на оплату будет выслан на электронную почту.
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="row__title">
                                                Он-лайн оплата
                                            </div>
                                            <div className="row__text">
                                                Поможет приготовить вам вкусный творог в домашних условиях. В данном
                                                продукте есть минеральные вещества и белки, которые необходимы
                                                организму.
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="row__title">
                                                Наличными при получении
                                            </div>
                                            <div className="row__text">
                                                2 недели с соблюдением температуры.
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="row__title">
                                                Доставка по Новосибирску
                                            </div>
                                            <div className="row__text">
                                                Вы можете забрать товар из нашего магазина самостоятельно, приехав по
                                                адресу: г. Новосибирск, ул. Котовского, д. 12/1, офис 1. Или заказать
                                                курьерскую доставку до двери. Стоимость доставки – 150 рублей.
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="row__title">
                                                Доставка по РФ
                                            </div>
                                            <div className="row__text">
                                                Доставка по РФ осуществляется логистическими службами СДЭК и Почта
                                                России. В любой момент Вы можете отследить путь своего заказа по
                                                трек-номеру.
                                                Приблизительные сроки и стоимость доставки указаны в таблице ниже.
                                                Окончательная сумма зависит от веса и способа оплаты заказа (при
                                                наложенном платеже – стоимость доставки выше) и рассчитывается
                                                автоматически в момент оформления.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tabs__items-reviews">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <SimilarProducts/>
            </div>
        </Wrapper>
    );
};

export default ProductCard;