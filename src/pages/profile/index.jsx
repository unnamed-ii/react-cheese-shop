import React, {useState} from 'react';
import './style.scss';
import Wrapper from "../../components/wrapper";
import UserTab from "./user-tab";
import OrdersTab from "./orders-tab";
import FavouriteTab from "./favourite-tab";
import CouponsTab from "./coupons-tab";
import AddressTab from "./address-tab";
import ChangePasswordTab from "./change-password-tab";
import {EditingInfoForm} from "./editing-form";
import {TabsData} from "./constants";
import {useDispatch, useSelector} from "react-redux";
import {logOutActionCreator} from "../../store/syncReducers/user";
import {useNavigate} from "react-router-dom";

const Profile = () => {
    const [activeTab, setActiveTab] = useState(TabsData.titles[0].typeOfTab);
    const [showEditingForm, setShowEditingForm] = useState(false);
    const userInfo = useSelector(state => state.user.userData);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onClickOnTab = (tabId) => {
        if (tabId === 'exit') {
            if (window.confirm('Are you sure you want to exit?')) {
                localStorage.removeItem('isUserAuthorized');
                dispatch(logOutActionCreator());
                navigate('/');
            }
        } else {
            setActiveTab(tabId);
        }
    }

    const toggleEditingForm = () => setShowEditingForm(!showEditingForm);

    return (
        <Wrapper>
            {showEditingForm &&
            <EditingInfoForm
                toggleEditingForm={toggleEditingForm}
                name={userInfo.name || "Empty"}
                phone={userInfo.phone || "Empty"}
                email={userInfo.email || "Empty"}
                address={userInfo.address || "Empty"}
            />
            }
            <div className="profile">
                <div className="profile__title">
                    Личный кабинет
                </div>
                <div className="profile__tabs">
                    <div className="profile__tabs-titles">
                        {TabsData.titles.map(tab =>
                            <div
                                className={"profile__tabs-title " + (activeTab === tab.typeOfTab && "active")}
                                onClick={() => onClickOnTab(tab.typeOfTab)}
                                key={Math.floor(Math.random() * 100000)}
                            >
                                {tab.icon}
                                {tab.title}
                            </div>
                        )}
                    </div>
                    <div className="profile__tabs-items">
                        <UserTab
                            activeTab={activeTab}
                            toggleEditingForm={toggleEditingForm}
                        />
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