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
            icon: UserIcon
        },
        {
            title: "Мои заказы",
            typeOfTab: 'orders',
            icon: BagIcon
        },
        {
            title: "Избранные товары",
            typeOfTab: 'favourite',
            icon: HeartIcon
        },
        {
            title: "Мои купоны",
            typeOfTab: 'coupons',
            icon: CouponIcon
        },
        {
            title: "Адрес доставки",
            typeOfTab: 'address',
            icon: DirectionIcon
        },
        {
            title: "Сменить пароль",
            typeOfTab: 'change-password',
            icon: LockIcon
        },
        {
            title: "Выход",
            typeOfTab: 'exit',
            icon: LogoutIcon
        }
    ],
    items: [

    ]
}