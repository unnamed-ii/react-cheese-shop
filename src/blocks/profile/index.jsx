import React, {useState} from 'react';
import './style.scss';
import Wrapper from "../../components/wrapper";
import {TabsData} from "./constants";
import {ReactComponent as UserIcon} from '../../images/icons/profile/user.svg';
import {ReactComponent as HeartSolidIcon} from '../../images/icons/profile/heart-solid.svg';
import productImage from '../../images/checkout-products-image.png';
import favouriteProduct from '../../images/favourite-product.png';
import couponActive from '../../images/profile-coupon-active.png';

const Profile = () => {
    const [activeTab, setActiveTab] = useState(TabsData.titles[0].typeOfTab);
    const handleChangeActiveTab = (tabId) => {
        setActiveTab(tabId)
    }
    return (
        <Wrapper>
            <div className="profile">
                <div className="profile__title">
                    Личный кабинет
                </div>
                <div className="profile__tabs">
                    <div className="profile__tabs-titles">
                        {TabsData.titles.map(i =>
                            <div className={"profile__tabs-title " + (activeTab === i.typeOfTab && "active")}
                                 onClick={() => handleChangeActiveTab(i.typeOfTab)}
                            >
                                <UserIcon className="icon"/>
                                {i.title}
                            </div>
                        )}
                    </div>
                    <div className="profile__tabs-items">
                        <div className={"profile__tabs-item " + (activeTab === "user" && "active user")}>
                            <div className="title">
                                Kristina Anfalova
                            </div>
                            <div className="edit">
                                Редактировать информацию
                            </div>
                            <div className="phone">
                                <div className="phone__title">
                                    Телефон:
                                </div>
                                <div className="phone__text">
                                    +7 (380) 664-61-24
                                </div>
                            </div>
                            <div className="email">
                                <div className="email__title">
                                    Email:
                                </div>
                                <div className="email__text">
                                    saraconet@gmail.com
                                </div>
                            </div>
                            <div className="address">
                                <div className="address__title">
                                    Адрес доставки:
                                </div>
                                <div className="address__text">
                                    123333, Российская Федерация,
                                    <br/>
                                    Карачаево-Черкеcсия, Kharkov, Московская 4 кв.4
                                </div>
                            </div>
                        </div>
                        <div className={"profile__tabs-item " + (activeTab === "orders" && "active orders")}>
                            <div className="title">
                                Мои заказы
                            </div>
                            <div className="subtitle">
                                Список ваших прошлыз покупок
                            </div>
                            <div className="table">
                                <div className="table__headline">
                                    <div className="table__headline-title main">
                                        Товар
                                    </div>
                                    <div className="table__headline-title">
                                        Стоимость
                                    </div>
                                    <div className="table__headline-title">
                                        Количество
                                    </div>
                                    <div className="table__headline-title">
                                        Итого
                                    </div>
                                </div>
                                <div className="table__items">
                                    <div className="table__item">
                                        <img src={productImage} alt="" className="table__item-image"/>
                                        <div className="table__item-info">
                                            <div className="table__item-info__title">
                                                Кардамон молотый 50 г
                                            </div>
                                            <div className="table__item-info__code">
                                                Код товара: 323432
                                            </div>
                                        </div>
                                        <div className="table__item-price">
                                            300 ₽
                                        </div>
                                        <div className="table__item-amount">
                                            2 шт.
                                        </div>
                                        <div className="table__item-total">
                                            600 ₽
                                        </div>
                                        <button className="table__item-button">
                                            Добавить
                                        </button>
                                    </div>
                                    <div className="table__item">
                                        <img src={productImage} alt="" className="table__item-image"/>
                                        <div className="table__item-info">
                                            <div className="table__item-info__title">
                                                Кардамон молотый 50 г
                                            </div>
                                            <div className="table__item-info__code">
                                                Код товара: 323432
                                            </div>
                                        </div>
                                        <div className="table__item-price">
                                            300 ₽
                                        </div>
                                        <div className="table__item-amount">
                                            2 шт.
                                        </div>
                                        <div className="table__item-total">
                                            600 ₽
                                        </div>
                                        <button className="table__item-button">
                                            Добавить
                                        </button>
                                    </div>
                                    <div className="table__item">
                                        <img src={productImage} alt="" className="table__item-image"/>
                                        <div className="table__item-info">
                                            <div className="table__item-info__title">
                                                Кардамон молотый 50 г
                                            </div>
                                            <div className="table__item-info__code">
                                                Код товара: 323432
                                            </div>
                                        </div>
                                        <div className="table__item-price">
                                            300 ₽
                                        </div>
                                        <div className="table__item-amount">
                                            2 шт.
                                        </div>
                                        <div className="table__item-total">
                                            600 ₽
                                        </div>
                                        <button className="table__item-button">
                                            Добавить
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={"profile__tabs-item " + (activeTab === "favourite" && "active favourite")}>
                            <div className="title">
                                Избранные товары
                            </div>
                            <div className="subtitle">
                                Товары, которые вы добавили в список будуших покупок
                            </div>
                            <div className="favourite-cards">
                                <div className="favourite-cards__card">
                                    <div className="favourite-cards__card-top">
                                        <div className="text">
                                            В наличии
                                        </div>
                                        <HeartSolidIcon/>
                                    </div>
                                    <img src={favouriteProduct} alt="" className="favourite-cards__card-image"/>
                                    <div className="favourite-cards__card-title">
                                        Форма для твердого сыра 1 кг - 40 отверстий
                                    </div>
                                    <div className="favourite-cards__card-subtitle">
                                        БК-Углич-ЛД 1 Е.А.
                                    </div>
                                    <div className="favourite-cards__card-bottom">
                                        <div className="price">
                                            <div className="price__discount">
                                                3400 руб.
                                            </div>
                                            <div className="price">
                                                2300 руб.
                                            </div>
                                        </div>
                                        <button>
                                            В корзину
                                        </button>
                                    </div>
                                </div>
                                <div className="favourite-cards__card out-of-stock">
                                    <div className="favourite-cards__card-top">
                                        <div className="text">
                                            Нет в наличии
                                        </div>
                                        <HeartSolidIcon/>
                                    </div>
                                    <img src={favouriteProduct} alt="" className="favourite-cards__card-image"/>
                                    <div className="favourite-cards__card-title">
                                        Форма для твердого сыра 1 кг - 40 отверстий
                                    </div>
                                    <div className="favourite-cards__card-subtitle">
                                        БК-Углич-ЛД 1 Е.А.
                                    </div>
                                    <div className="favourite-cards__card-bottom">
                                        <div className="price">
                                            <div className="price__discount">
                                                3400 руб.
                                            </div>
                                            <div className="price">
                                                2300 руб.
                                            </div>
                                        </div>
                                        <button disabled={true}>
                                            В корзину
                                        </button>
                                    </div>
                                </div>
                                <div className="favourite-cards__card">
                                    <div className="favourite-cards__card-top">
                                        <div className="text">
                                            В наличии
                                        </div>
                                        <HeartSolidIcon/>
                                    </div>
                                    <img src={favouriteProduct} alt="" className="favourite-cards__card-image"/>
                                    <div className="favourite-cards__card-title">
                                        Форма для твердого сыра 1 кг - 40 отверстий
                                    </div>
                                    <div className="favourite-cards__card-subtitle">
                                        БК-Углич-ЛД 1 Е.А.
                                    </div>
                                    <div className="favourite-cards__card-bottom">
                                        <div className="price">
                                            <div className="price__discount">
                                                3400 руб.
                                            </div>
                                            <div className="price">
                                                2300 руб.
                                            </div>
                                        </div>
                                        <button>
                                            В корзину
                                        </button>
                                    </div>
                                </div>
                                <div className="favourite-cards__card">
                                    <div className="favourite-cards__card-top">
                                        <div className="text">
                                            В наличии
                                        </div>
                                        <HeartSolidIcon/>
                                    </div>
                                    <img src={favouriteProduct} alt="" className="favourite-cards__card-image"/>
                                    <div className="favourite-cards__card-title">
                                        Форма для твердого сыра 1 кг - 40 отверстий
                                    </div>
                                    <div className="favourite-cards__card-subtitle">
                                        БК-Углич-ЛД 1 Е.А.
                                    </div>
                                    <div className="favourite-cards__card-bottom">
                                        <div className="price">
                                            <div className="price__discount">
                                                3400 руб.
                                            </div>
                                            <div className="price">
                                                2300 руб.
                                            </div>
                                        </div>
                                        <button>
                                            В корзину
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={"profile__tabs-item " + (activeTab === "coupons" && "active coupons")}>
                            <div className="coupons__coupon active">
                                <div className="coupons__coupon-info">
                                    <img src={couponActive} alt=""/>
                                    <div className="coupons__coupon-info__box">
                                        <div className="status">
                                            Активный
                                        </div>
                                        <div className="title">
                                            Скидочный купон на 300 руб.
                                        </div>
                                        <div className="subtitle">
                                            До 20 июня 2021 г.
                                        </div>
                                    </div>
                                </div>
                                <div className="coupons__coupon-scan">
                                    <div className="code">
                                        №1234556
                                    </div>
                                    <button>Скопировать код</button>
                                </div>
                            </div>
                            <div className="coupons__coupon">
                                <div className="coupons__coupon-info">
                                    <img src={couponActive} alt=""/>
                                    <div className="coupons__coupon-info__box">
                                        <div className="status">
                                            Не активный
                                        </div>
                                        <div className="title">
                                            Скидочный купон на 500 руб.
                                        </div>
                                        <div className="subtitle">
                                            Срок действия закончился
                                        </div>
                                    </div>
                                </div>
                                <div className="coupons__coupon-scan">
                                    <div className="code">
                                        №1234556
                                    </div>
                                    <button>Скопировать код</button>
                                </div>
                            </div>
                        </div>
                        <div className={"profile__tabs-item " + (activeTab === "address" && "active address")}>
                            <div className="title">
                                Kristina Anfalova
                            </div>
                            <div className="edit">
                                Редактировать адрес
                            </div>
                            <div className="box">
                                <div className="box-titles">
                                    <div>Адрес доставки:</div>
                                    <div>Город:</div>
                                    <div>Регион:</div>
                                    <div>Страна:</div>
                                </div>
                                <div className="box-texts">
                                    <div>Адрес: Московская 4 кв.4</div>
                                    <div>Kharkov 123333</div>
                                    <div>Карачаево-Черкеcсия</div>
                                    <div>Российская Федерация</div>
                                </div>
                            </div>
                        </div>
                        <div className={"profile__tabs-item " + (activeTab === "change-password" && "active change-password")}>
                            <div className="title">
                                Сменить пароль
                            </div>
                            <div className="subtitle">
                                После смены пароля мы пришлем подтверждение на ваш электронный адрес
                            </div>
                            <form>
                                <div className="inputs">
                                    <div className="inputs__input">
                                        <div>Старый пароль</div>
                                        <input type="password" placeholder="Введите старый пароль"/>
                                    </div>
                                    <div className="inputs__input">
                                        <div>Новый пароль</div>
                                        <input type="password" placeholder="Не менее 8 символов"/>
                                    </div>
                                </div>
                                <button>Подтвердить</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default Profile;