import React from 'react';
import './style.scss';
import Basket from "../../components/basket";
import Wrapper from "../../components/wrapper";
import {Link, NavLink} from "react-router-dom";
import {ReactComponent as LocationIcon} from '../../images/icons/location.svg';
import {ReactComponent as ArrowDownIcon} from '../../images/icons/arrow-down.svg';
import {ReactComponent as ClockIcon} from '../../images/icons/clock.svg';
import {ReactComponent as UserProfileIcon} from '../../images/icons/profile.svg';
import {ReactComponent as TelegramIcon} from '../../images/header-social/telegram.svg';
import {ReactComponent as WhatsUpIcon} from '../../images/header-social/whatsup.svg';
import {ReactComponent as MessengerIcon} from '../../images/header-social/messenger.svg';
import {ReactComponent as SearchIcon} from '../../images/icons/search.svg';
import {ReactComponent as PhoneIcon} from '../../images/header-phone.svg';
import darkLogo from '../../images/dark-logo.png';
import delivery from '../../images/header-advantages/delivery.png';
import discount from '../../images/header-advantages/discount.png';
import protection from '../../images/header-advantages/user-protection.png';

const Header = () => {
    const isAuth = localStorage.getItem('isUserAuthorized');

    return (
        <Wrapper>
            <div className="header">
                <div className="header__inner">
                    <div className="header__about">
                        <div className="header__about-block">
                            <div className="header__about-address">
                                <LocationIcon className="location-icon"/>
                                Ваш город: Москва
                                <ArrowDownIcon className="arrow-down-icon"/>
                            </div>
                            <div className="header__about-schedule">
                                <ClockIcon className="clock-icon"/>
                                Пн-Пт 9:00 - 19:00
                            </div>
                        </div>
                        <div className="header__about-block">
                            <div className="header__about-links">
                                <NavLink to="/about">О компании</NavLink>
                                <NavLink to="/advantages">Преимущества</NavLink>
                                <NavLink to="/promotion-products">Акционные товары</NavLink>
                                {isAuth ?
                                    <NavLink to="profile" className="header__about-login">
                                        <UserProfileIcon className='user-profile-icon'/>
                                        Мой профиль
                                    </NavLink>
                                    :
                                    <NavLink to="authorization" className="header__about-login">
                                        <UserProfileIcon className='user-profile-icon'/>
                                        Войти в аккаунт
                                    </NavLink>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="horizontal"/>
                    <div className="header__info">
                        <Link to="/" className="link"><img className="logo" src={darkLogo} alt=""/></Link>
                        <div className="header__info-advantages">
                            <div className="header__info-advantage delivery">
                                <img src={delivery} alt=""/>
                                Бесплатная доставка
                                <div className="header__info-advantage__hover delivery">
                                    <div className="fragment"/>
                                    Дарим бесплатную доставку в пределах России при заказе товара на сумму от 2500 руб.
                                </div>
                            </div>
                            <div className="header__info-advantage discount">
                                <img src={discount} alt=""/>
                                Скидка при оплате на сайте
                                <div className="header__info-advantage__hover discount">
                                    <div className="fragment"/>
                                    Дарим скидку при заказе товара на сумму от 2500 руб.
                                </div>
                            </div>
                            <div className="header__info-advantage safety">
                                <img src={protection} alt=""/>
                                Защита покупателей
                                <div className="header__info-advantage__hover safety">
                                    <div className="fragment"/>
                                    Дарим скидку при заказе товара на сумму от 2500 руб.
                                </div>
                            </div>
                        </div>
                        <div className="vertical"/>
                        <div className="header__info-contacts">
                            <div className="header__info-contacts__social">
                                <a href="#"><TelegramIcon/></a>
                                <a href="#"><WhatsUpIcon/></a>
                                <a href="#"><MessengerIcon/></a>
                            </div>
                            <div className="header__info-contacts__phone">
                                <a href="tel:89164601960">+8 916 460-19-60</a>
                                <button>
                                    <PhoneIcon className="phone-icon"/>
                                    Заказать звонок
                                </button>
                            </div>
                        </div>
                        <div className="vertical"/>
                        <Basket/>
                    </div>
                    <div className="horizontal"/>
                    <div className="header__nav">
                        <div className="header__nav-links">
                            <div className='header__nav-links__recipe' id="link-to-recipes">
                                <NavLink to="/recipes">
                                    Рецепты
                                </NavLink>
                                <ArrowDownIcon className="arrow-down"/>
                                <ul className="header__nav-links__list">
                                    <li><Link to="/">Молодые сыры</Link></li>
                                    <li><Link to="/">Полутвердые сыры</Link></li>
                                    <li><Link to="/">Паста Филата</Link></li>
                                    <li><Link to="/">Сывороточные сыры</Link></li>
                                    <li><Link to="/">Сыры с плесенью</Link></li>
                                    <li><Link to="/">Твердые сыры</Link></li>
                                    <li><Link to="/">Творожные сыры</Link></li>
                                    <li><Link to="/">Кисломолочные продукты</Link></li>
                                    <li><Link to="recipes">Все рецепты</Link></li>
                                </ul>
                            </div>
                            <NavLink to="delivery">Доставка и оплата</NavLink>
                            <NavLink to="calculator">Калькулятор Сыродела</NavLink>
                            <NavLink to="reviews">Отзывы</NavLink>
                            <NavLink to="questions-and-answers">Вопросы и ответы</NavLink>
                            <NavLink to="contacts">Контакты</NavLink>
                        </div>
                        <div className="header__nav-search">
                            <div className="vertical"/>
                            <SearchIcon className="search-icon"/>
                            <input type="text" placeholder='Введите название товара или артикул'/>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default Header;