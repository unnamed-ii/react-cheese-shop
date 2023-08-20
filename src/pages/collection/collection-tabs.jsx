import React, {useState} from 'react';
import './style.scss';
import {CollectionData} from "./constants";

const CollectionTabs = ({description, reviews}) => {
    const [activeTab, setActiveTab] = useState(CollectionData.tabsTitles[0].typeOfTab);
    const handleChangeActiveTab = (tabId) => setActiveTab(tabId)

    return (
        <div className="collection__tabs">
            <div className="collection__tabs-titles">
                {CollectionData.tabsTitles.map(collection =>
                    <div
                        key={collection.id}
                        className={"profile__tabs-title " + (activeTab === collection.typeOfTab && "active")}
                        onClick={() => handleChangeActiveTab(collection.typeOfTab)}
                    >
                        {collection.title}
                    </div>
                )}
            </div>
            <div className="collection__tabs-items">
                <div className="collection__tabs-item">
                    {description?.map((i,idx) => (
                        <div className="collection__tabs-item__line" key={idx}>
                            <div className="title">
                                {i.subtitle}:
                            </div>
                            <div className="text">
                                {i.text}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CollectionTabs;