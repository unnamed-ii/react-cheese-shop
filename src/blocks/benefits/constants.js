import React from "react";
import {ReactComponent as ClockIcon} from "../../images/benefits/clock.svg";
import {ReactComponent as ApprovedIcon} from "../../images/benefits/approved.svg";
import {ReactComponent as AwardIcon} from "../../images/benefits/award.svg";
import {ReactComponent as DollarIcon} from "../../images/benefits/dollar-sign.svg";
import {ReactComponent as PercentIcon} from "../../images/benefits/percent.svg";


export const BenefitsData = [
    {
        typeOfBenefit: 'clock',
        icon: <ClockIcon className="icon"/>,
        text: 'Прием заказов круглостуточно',
        id: '1'
    },
    {
        typeOfBenefit: 'quality',
        icon: <ApprovedIcon className="icon"/>,
        text: 'Наивысшее качество продукции',
        id: '2'
    },
    {
        typeOfBenefit: 'discounts',
        icon: <AwardIcon className="icon"/>,
        text: 'Выгодные скидки при оплате',
        id: '3'
    },
    {
        typeOfBenefit: 'prices',
        icon: <DollarIcon className="icon"/>,
        text: 'Выгодные цены и условия',
        id: '4'
    },
    {
        typeOfBenefit: 'service',
        icon: <PercentIcon className="icon"/>,
        text: 'Обеспечиваем высокий уровень сервиса',
        id: '5'
    },
]