import React from "react";
import {ReactComponent as CashPaymentIcon} from '../../images/icons/payment-methods/cash.svg';
import {ReactComponent as OnlinePaymentIcon} from '../../images/icons/payment-methods/online.svg';
import {ReactComponent as AdvancePaymentIcon} from '../../images/icons/payment-methods/advance.svg';

export const PaymentMethodsData = [
    {
        image: <AdvancePaymentIcon />,
        title: "Предоплата по счету",
        text: "При оформлении заказа выберите в поле оплаты счёт для юридических лиц и введите реквизиты. Счет на оплату будет выслан на электронную почту.",
        id: '1'
    },
    {
        image: <OnlinePaymentIcon />,
        title: "Он-лайн оплата",
        text: "Вы можете оплатить товар в интернет магазине банковской картой или с использованием платежных систем Яндекс-деньги и Web-money",
        id: '2'
    },
    {
        image: <CashPaymentIcon />,
        title: "Наличными при получении",
        text: "Вы всегда можете оплатить заказ наличными – курьеру, на почте или при получении в транспортной компании.",
        id: '3'
    },
]