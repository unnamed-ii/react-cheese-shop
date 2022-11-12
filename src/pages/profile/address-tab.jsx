import React from 'react';
import './style.scss';

const AddressTab = ({activeTab}) => {

    return (
        <div className={"profile__tabs-item " + (activeTab === "address" && "active address")}>
            <div className="title">
                Kristina Anfalova
            </div>
            <div className="edit">
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
                    <div>Адрес: Московская 4 кв.4</div>
                    <div>Kharkov 123333</div>
                    <div>Карачаево-Черкеcсия</div>
                    <div>Российская Федерация</div>
                </div>
            </div>
        </div>
    );
};

export default AddressTab;