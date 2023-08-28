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
import Title from "../../components/title";

const Profile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState(TabsData.titles[0].typeOfTab);
    const [showEditingForm, setShowEditingForm] = useState(false);
    const toggleEditingForm = () => setShowEditingForm(!showEditingForm);
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

    return (
        <Wrapper>
            {showEditingForm &&
                <EditingInfoForm
                    activeTab={activeTab}
                    toggleEditingForm={toggleEditingForm}
                />
            }
            <div className="profile">
                <Title
                    title={"Личный кабинет"}
                    className={"page"}
                />
                <div className="profile__tabs">
                    <div className="profile__tabs-titles">
                        {TabsData.titles.map(tab =>
                            <div
                                className={"profile__tabs-title " + (activeTab === tab.typeOfTab && "active")}
                                onClick={() => onClickOnTab(tab.typeOfTab)}
                                key={tab.id}
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
                        <OrdersTab
                            activeTab={activeTab}
                        />
                        <FavouriteTab
                            activeTab={activeTab}
                        />
                        <CouponsTab
                            activeTab={activeTab}
                        />
                        <AddressTab
                            activeTab={activeTab}
                            toggleEditingForm={toggleEditingForm}
                        />
                        <ChangePasswordTab
                            activeTab={activeTab}
                        />
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default Profile;