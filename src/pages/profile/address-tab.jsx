import React from 'react';
import './style.scss';
import Button from "../../components/button";
import Title from "../../components/title";

const AddressTab = ({activeTab, toggleEditingForm}) => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo')).userData;

    return (
        <div className={"profile__tabs-item " + (activeTab === "address" && "active address")}>
            <Title
                title={userInfo.fullName}
                className={"profile-page__tab-title"}
            />
            <Button
                text={"Редактировать адрес"}
                className={"profile-page__address-tab"}
                onClick={toggleEditingForm}
            />
            <div className="box">
                <div className="box-titles">
                    <div>Адрес доставки:</div>
                    <div>Город:</div>
                    <div>Регион:</div>
                    <div>Страна:</div>
                </div>
                <div className="box-texts">
                    <div>{userInfo.address}</div>
                    <div>{userInfo.address}</div>
                    <div>{userInfo.address}</div>
                    <div>{userInfo.address}</div>
                </div>
            </div>
        </div>
    );
};

export default AddressTab;