import React from 'react';
import './style.scss'
import {ReactComponent as RubleIcon} from '../../images/payment-methods/ruble.svg';
import {ReactComponent as WebMoneyIcon} from '../../images/payment-methods/webmoney.svg';
import {ReactComponent as SberbankIcon} from '../../images/payment-methods/sberbank.svg';
import {ReactComponent as YandexIcon} from '../../images/payment-methods/yandex.svg';
import {ReactComponent as MasterCardIcon} from '../../images/payment-methods/mastercard.svg';
import {ReactComponent as VisaIcon} from '../../images/payment-methods/visa.svg';
import {ReactComponent as InstagramIcon} from '../../images/footer-social/instagram.svg';
import {ReactComponent as VkIcon} from '../../images/footer-social/vk.svg';
import {ReactComponent as TwitterIcon} from '../../images/footer-social/twitter.svg';
import {ReactComponent as FacebookIcon} from '../../images/footer-social/facebook.svg';
import {ReactComponent as YouTubeIcon} from '../../images/footer-social/youtube.svg';
import {ReactComponent as LocationIcon} from '../../images/icons/location.svg';
import {ReactComponent as ClockIcon} from '../../images/icons/clock.svg';
import logo from '../../images/footer-logo.png';
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__copyright">
                <img className="footer__copyright-logo" src={logo} alt=""/>
                <div className="footer__copyright-text">
                    Все материалы данного сайта являются объектами авторского права.
                </div>
                Разработка сайта: ЛяЧиз
            </div>
            <div className="footer__company">
                <div className="footer__company-title">
                    Компания
                </div>
                <ul className="footer__company-list">
                    <li><Link to="/about">О компании</Link></li>
                    <li><Link to="/">Акции и скидки</Link></li>
                    <li><Link to="/delivery">Доставка и оплата</Link></li>
                    <li><Link to="/reviews">Отзывы</Link></li>
                    <li><Link to="/">Гарантия и возврат</Link></li>
                </ul>
            </div>
            <div className="footer__support">
                <div className="footer__company-title">
                    Поддержка
                </div>
                <ul className="footer__company-list">
                    <li><Link to="/questions-and-answers">Вопрос-ответ</Link></li>
                    <li><Link to="/">Бонусная программа</Link></li>
                    <li><Link to="/">Политика конфиденциальности</Link></li>
                    <li><Link to="/">Персональные данных</Link></li>
                </ul>
            </div>
            <div className="footer__payment-methods">
                <div className="footer__payment-methods__title">
                    Способы оплаты
                </div>
                <ul>
                    <li><RubleIcon/></li>
                    <li><WebMoneyIcon/></li>
                    <li><SberbankIcon/></li>
                    <li><YandexIcon/></li>
                </ul>
                <ul>
                    <li><MasterCardIcon/></li>
                    <li><VisaIcon/></li>
                </ul>
            </div>
            <div className="footer__info">
                <a className="footer__info-phone" href="tel:74951200000">+7 495 120-00-00</a>
                <div className="footer__info-address">
                    <div className="footer__info-address__line">
                        <ClockIcon/>
                        Пн-пт 9:00 - 19:00
                    </div>
                    <div className="footer__info-address__line">
                        <LocationIcon/>
                        г. Москва, улица Свободы 1/7
                    </div>
                </div>
                <ul className="footer__info-social">
                    <li><a href="#"><InstagramIcon/></a></li>
                    <li><a href="#"><VkIcon/></a></li>
                    <li><a href="#"><TwitterIcon/></a></li>
                    <li><a href="#"><FacebookIcon/></a></li>
                    <li><a href="#"><YouTubeIcon/></a></li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;