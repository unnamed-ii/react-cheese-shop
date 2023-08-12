import React from 'react';
import './style.scss';

const AddressTab = ({activeTab, toggleEditingForm}) => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo')).userData;

    return (
        <div className={"profile__tabs-item " + (activeTab === "address" && "active address")}>
            <div className="title">
                {userInfo.name}
            </div>
            <div className="edit" onClick={toggleEditingForm}>
                Редактировать адрес
            </div>
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