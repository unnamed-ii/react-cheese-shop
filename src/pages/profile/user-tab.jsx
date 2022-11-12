import React from 'react';
import './style.scss';

const UserTab = ({activeTab}) => {

    return (
        <div className={"profile__tabs-item " + (activeTab === "user" && "active user")}>
            <div className="title">
                Kristina Anfalova
            </div>
            <button className="edit">
                Редактировать информацию
            </button>
            <div className="phone">
                <div className="phone__title">
                    Телефон:
                </div>
                <div className="phone__text">
                    +7 (380) 664-61-24
                </div>
            </div>
            <div className="email">
                <div className="email__title">
                    Email:
                </div>
                <div className="email__text">
                    saraconet@gmail.com
                </div>
            </div>
            <div className="address">
                <div className="address__title">
                    Адрес доставки:
                </div>
                <div className="address__text">
                    123333, Российская Федерация,
                    <br/>
                    Карачаево-Черкесия, Kharkov, Московская 4 кв.4
                </div>
            </div>
        </div>
    );
};

export default UserTab;