import React, {useState} from 'react';
import './style.scss';

import {ReactComponent as LocationIcon} from '../../images/icons/location.svg';
import {ReactComponent as ArrowDownIcon} from '../../images/icons/arrow-down.svg';
import {ReactComponent as ClockIcon} from '../../images/icons/clock.svg';
import {ReactComponent as UserProfileIcon} from '../../images/icons/profile.svg';
import {ReactComponent as TelegramIcon} from '../../images/header-social/telegram.svg';
import {ReactComponent as WhatsUpIcon} from '../../images/header-social/whatsup.svg';
import {ReactComponent as MessengerIcon} from '../../images/header-social/messenger.svg';
import {ReactComponent as BasketIcon} from '../../images/basket.svg';
import {ReactComponent as SearchIcon} from '../../images/icons/search.svg';
import darkLogo from '../../images/dark-logo.png';
import delivery from '../../images/header-advantages/delivery.png';
import discount from '../../images/header-advantages/discount.png';
import protection from '../../images/header-advantages/user-protection.png';

import Basket from "../../components/basket";
import Wrapper from "../../components/wrapper";
import {Link} from "react-router-dom";

const Header = () => {
    const [isListDropped, setIsListDropped] = useState(false);
    const [isBasketDropped, setIsBasketDropped] = useState(false);

    const toggleDroppingItem = (droppingItem) => {
        if (droppingItem === 'dropdown-list') setIsListDropped(!isListDropped);
        if (droppingItem === 'basket') setIsBasketDropped(!isBasketDropped);
    }

    return (
        <Wrapper>
            <div className="header">
                <div className="header__inner">
                    <div className="header__about">
                        <div>
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
                        <div>
                            <div className="header__about-links">
                                <Link to="/about">О компании</Link>
                                <Link to="/">Преимущества</Link>
                                <Link to="/">Акционные товары</Link>
                                <Link to="authorization" className="header__about-login">
                                    <UserProfileIcon className='user-profile-icon'/>
                                    Войти в аккаунт
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="horizontal"/>
                    <div className="header__info">
                        <Link to="/" className="link"><img className="logo" src={darkLogo} alt=""/></Link>
                        <div className="header__info-advantages">
                            <div className="header__info-advantage" style={{width: '116px'}}>
                                <img src={delivery} alt=""/>
                                Бесплатная доставка
                            </div>
                            <div className="header__info-advantage" style={{width: '139px'}}>
                                <img src={discount} alt=""/>
                                Скидка при оплате на сайте
                            </div>
                            <div className="header__info-advantage" style={{width: '116px'}}>
                                <img src={protection} alt=""/>
                                Защита покупателей
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
                                <button>Заказать звонок</button>
                            </div>
                        </div>
                        <div className="vertical"/>
                        <div className="header__info-basket">
                            <div className="header__info-basket__price">
                                Ваша корзина
                                <span>1680 руб.</span>
                            </div>
                            <div className="basket-image">
                                <BasketIcon onClick={() => toggleDroppingItem('basket')}/>
                                <div className='basket-image__circle'>5</div>
                                <Basket isActive={isBasketDropped}/>
                            </div>
                        </div>
                    </div>
                    <div className="horizontal"/>
                    <div className="header__nav">
                        <div className="header__nav-links">
                            <a className='header__nav-links__recipe'
                               onClick={() => toggleDroppingItem('dropdown-list')}
                               href="#">
                                Рецепты
                                <ArrowDownIcon className="arrow-down"/>
                            </a>
                            <div className={"header__nav-links__list " + (isListDropped && "dropdown-list")}>
                                <ul>
                                    <li><a href="#">Молодые сыры</a></li>
                                    <li><a href="#">Полутвердые сыры</a></li>
                                    <li><a href="#">Паста Филата</a></li>
                                    <li><a href="#">Сывороточные сыры</a></li>
                                    <li><a href="#">Сыры с плесенью</a></li>
                                    <li><a href="#">Твердые сыры</a></li>
                                    <li><a href="#">Творожные сыры</a></li>
                                    <li><a href="#">Кисломолочные продукты</a></li>
                                    <li><Link to="recipes">Все рецепты</Link></li>
                                </ul>
                            </div>
                            <Link to="delivery">Доставка и оплата</Link>
                            <Link to="calculator">Калькулятор Сыродела</Link>
                            <Link to="reviews">Отзывы</Link>
                            <Link to="questions-and-answers">Вопросы и ответы</Link>
                            <Link to="contacts">Контакты</Link>
                        </div>
                        <div className="header__nav-search">
                            <div className="vertical"/>
                            <SearchIcon className="search-icon"/>
                            <input type="text" placeholder='Введите название товара или артикул'/>
                        </div>
                    </div>
                </div>
                <Basket/>
            </div>
        </Wrapper>
    );
};

export default Header;