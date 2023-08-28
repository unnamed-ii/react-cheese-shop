import React from 'react';
import './style.scss';
import Title from "../../components/title";
import Button from "../../components/button";

const UserTab = ({activeTab, toggleEditingForm}) => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo')).userData;

    return (
        <div className={"profile__tabs-item " + (activeTab === "user" && "active user")}>
            <Title
                title={userInfo.fullName}
                className={"profile-page__tab-title"}
            />
            <Button
                text={"Редактировать информацию"}
                className={"profile-page__user-tab"}
                onClick={toggleEditingForm}
            />
            <div className="phone">
                <div className="phone__title">
                    Телефон:
                </div>
                <div className="phone__text">
                    {userInfo.phone}
                </div>
            </div>
            <div className="email">
                <div className="email__title">
                    Email:
                </div>
                <div className="email__text">
                    {userInfo.email}
                </div>
            </div>
            <div className="address">
                <div className="address__title">
                    Адрес доставки:
                </div>
                <div className="address__text">
                    {userInfo.address}
                </div>
            </div>
        </div>
    );
};

export default UserTab;