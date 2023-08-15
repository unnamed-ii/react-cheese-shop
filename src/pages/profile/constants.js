import React from "react";
import {ReactComponent as UserIcon} from "../../images/icons/profile/user.svg";
import {ReactComponent as BagIcon} from "../../images/icons/profile/bag.svg";
import {ReactComponent as HeartIcon} from "../../images/icons/profile/heart.svg";
import {ReactComponent as CouponIcon} from "../../images/icons/profile/coupon.svg";
import {ReactComponent as DirectionIcon} from "../../images/icons/profile/direction.svg";
import {ReactComponent as LockIcon} from "../../images/icons/profile/lock.svg";
import {ReactComponent as LogoutIcon} from "../../images/icons/profile/logout.svg";

export const TabsData = {
    titles: [
        {
            title: "Мой профиль",
            typeOfTab: 'user',
            icon: <UserIcon />,
            id: '1'
        },
        {
            title: "Мои заказы",
            typeOfTab: 'orders',
            icon: <BagIcon />,
            id: '2'
        },
        {
            title: "Избранные товары",
            typeOfTab: 'favourite',
            icon: <HeartIcon />,
            id: '3'
        },
        {
            title: "Мои купоны",
            typeOfTab: 'coupons',
            icon: <CouponIcon />,
            id: '4'
        },
        {
            title: "Адрес доставки",
            typeOfTab: 'address',
            icon: <DirectionIcon />,
            id: '5'
        },
        {
            title: "Сменить пароль",
            typeOfTab: 'change-password',
            icon: <LockIcon />,
            id: '6'
        },
        {
            title: "Выход",
            typeOfTab: 'exit',
            icon: <LogoutIcon />,
            id: '7'
        }
    ],
    items: [

    ]
}