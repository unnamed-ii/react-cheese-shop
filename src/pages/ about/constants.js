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
            text: "Мне нравится, что в любой момент я могупозвонить своему менеджеру и получить пол-ноценную профессиональную консультацию."
        },
        {
            title: "Василий",
            subtitle: "«Cыроварня Ильиных»",
            text: "Мне нравится, что в любой момент я могупозвонить своему менеджеру и получить пол-ноценную профессиональную консультацию."
        },
        {
            title: "Генадий",
            subtitle: "«Cыроварня Ильиных»",
            text: "Мне нравится, что в любой момент я могупозвонить своему менеджеру и получить пол-ноценную профессиональную консультацию."
        },

    ],
    advantages: [
        {
            icon: <PhoneIcon/>,
            text: "Профессиональная информационная поддержка, вы можете в любой момент связаться с нами"
        },
        {
            icon: <ShieldIcon/>,
            text: "Гарантия качества всей продукции, при заказе товара вы можете увидеть сертификат"
        },
        {
            icon: <PercentIcon/>,
            text: "Программа лояльности, бонусы, акции, лучшие предложения только у нас"
        },
        {
            icon: <BoxIcon/>,
            text: "Вы покупаете всё в одном месте или оставить запрос и мы превезем под заказ"
        }
    ],
}