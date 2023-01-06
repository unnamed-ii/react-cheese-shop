import React, {useState} from 'react';
import './style.scss';
import {CollectionData} from "./constants";

const CollectionTabs = () => {
    const [activeTab, setActiveTab] = useState(CollectionData.tabsTitles[0].typeOfTab);
    const handleChangeActiveTab = (tabId) => setActiveTab(tabId)

    return (
        <div className="collection__tabs">
            <div className="collection__tabs-titles">
                {CollectionData.tabsTitles.map(i =>
                    <div
                        key={Math.floor(Math.random() * 100000)}
                        className={"profile__tabs-title " + (activeTab === i.typeOfTab && "active")}
                        onClick={() => handleChangeActiveTab(i.typeOfTab)}
                    >
                        {i.title}
                    </div>
                )}
            </div>
            <div className="collection__tabs-items">
                <div className="collection__tabs-item">
                    <div className="collection__tabs-item__line">
                        <div className="title">
                            Что входит в набор:
                        </div>
                        <div className="text">
                            Мезофильная закваска, Термофильная закваска , Сычужный фермент 20мл, Хлористый
                            кальций 10г, Форма для самопрессующихся сыров Д12, Весы ювелирные, Термометр
                            механический с щупом, Дренажный коврик, Лавсановый мешочек
                        </div>
                    </div>
                    <div className="collection__tabs-item__line">
                        <div className="title">
                            Транспортировкa
                        </div>
                        <div className="text">
                            2 недели с соблюдением температуры.
                        </div>
                    </div>
                    <div className="collection__tabs-item__line">
                        <div className="title">
                            Размер упаковки и хранение
                        </div>
                        <div className="text">
                            Поможет приготовить вам вкусный творог в домашних условиях.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CollectionTabs;