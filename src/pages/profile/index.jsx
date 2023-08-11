import React, {useState} from 'react';
import './style.scss';
import {TabsData} from "./constants";
import {useDispatch} from "react-redux";
import Wrapper from "../../components/wrapper";
import UserTab from "./user-tab";
import OrdersTab from "./orders-tab";
import FavouriteTab from "./favourite-tab";
import CouponsTab from "./coupons-tab";
import AddressTab from "./address-tab";
import ChangePasswordTab from "./change-password-tab";
import {EditingInfoForm} from "./editing-form";
import {logOutActionCreator} from "../../store/user";
import {useNavigate} from "react-router-dom";
import {refreshPage} from "../../utils/refreshPage";

const Profile = () => {
    const [activeTab, setActiveTab] = useState(TabsData.titles[0].typeOfTab);
    const [showEditingForm, setShowEditingForm] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onClickOnTab = (tabId) => {
        if (tabId === 'exit') {
            if (window.confirm('Are you sure you want to exit?')) {
                localStorage.removeItem('isUserAuthorized');
                dispatch(logOutActionCreator());
                navigate('/');
                refreshPage();
            }
        } else {
            setActiveTab(tabId);
        }
    }

    const toggleEditingForm = () => setShowEditingForm(!showEditingForm);

    return (
        <Wrapper>
            {showEditingForm && <EditingInfoForm toggleEditingForm={toggleEditingForm} />}
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