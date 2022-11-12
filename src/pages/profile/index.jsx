import React, {useState} from 'react';
import './style.scss';
import Wrapper from "../../components/wrapper";
import UserTab from "./user-tab";
import OrdersTab from "./orders-tab";
import FavouriteTab from "./favourite-tab";
import CouponsTab from "./coupons-tab";
import AddressTab from "./address-tab";
import ChangePasswordTab from "./change-password-tab";
import {TabsData} from "./constants";

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
                                {i.icon}
                                {i.title}
                            </div>
                        )}
                    </div>
                    <div className="profile__tabs-items">
                        <UserTab activeTab={activeTab}/>
                        <OrdersTab activeTab={activeTab}/>
                        <FavouriteTab activeTab={activeTab}/>
                        <CouponsTab activeTab={activeTab}/>
                        <AddressTab activeTab={activeTab}/>
                        <ChangePasswordTab activeTab={activeTab}/>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default Profile;