import React from "react";
import {ReactComponent as PhoneIcon} from '../../images/icons/about/phone.svg';
import {ReactComponent as ShieldIcon} from '../../images/icons/about/shield.svg';
import {ReactComponent as PercentIcon} from '../../images/icons/about/percent.svg';
import {ReactComponent as BoxIcon} from '../../images/icons/about/box.svg';

export const AboutData = {
    masters: [
        {
            title: "Алексей",
            subtitle: "«Cыроварня Ильиных»",
            text: "Мне нравится, что в любой момент я могупозвонить своему менеджеру и получить пол-ноценную профессиональную консультацию.",
            id: '1'
        },
        {
            title: "Василий",
            subtitle: "«Cыроварня Ильиных»",
            text: "Мне нравится, что в любой момент я могупозвонить своему менеджеру и получить пол-ноценную профессиональную консультацию.",
            id: '2'
        },
        {
            title: "Генадий",
            subtitle: "«Cыроварня Ильиных»",
            text: "Мне нравится, что в любой момент я могупозвонить своему менеджеру и получить пол-ноценную профессиональную консультацию.",
            id: '3'
        },

    ],
    advantages: [
        {
            icon: <PhoneIcon/>,
            text: "Профессиональная информационная поддержка, вы можете в любой момент связаться с нами",
            id: '1'
        },
        {
            icon: <ShieldIcon/>,
            text: "Гарантия качества всей продукции, при заказе товара вы можете увидеть сертификат",
            id: '2'
        },
        {
            icon: <PercentIcon/>,
            text: "Программа лояльности, бонусы, акции, лучшие предложения только у нас",
            id: '3'
        },
        {
            icon: <BoxIcon/>,
            text: "Вы покупаете всё в одном месте или оставить запрос и мы превезем под заказ",
            id: '4'
        }
    ],
}