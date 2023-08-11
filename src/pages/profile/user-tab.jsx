import React from 'react';
import './style.scss';

const UserTab = ({activeTab, toggleEditingForm}) => {
    let userInfo = JSON.parse(localStorage.getItem('userInfo')).userData;

    return (
        <div className={"profile__tabs-item " + (activeTab === "user" && "active user")}>
            <div className="title">
                {userInfo.name}
            </div>
            <button className="edit" onClick={toggleEditingForm}>
                Редактировать информацию
            </button>
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