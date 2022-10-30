import React from 'react';
import './style.scss'
import Wrapper from "../../components/wrapper";
import MainNav from "../../components/main-nav";
import {CollectionCard} from "./collection-card";

const Collections = () => {
    return (
        <Wrapper>
            <div className="collections">
                <div className="collections__inner">
                    <MainNav/>
                    <div className="collections__inner-content">
                        <div className="collections__title">
                            Наборы для сыра
                        </div>
                        <div className="collections__group">
                            <CollectionCard />
                            <CollectionCard />
                            <CollectionCard />
                            <CollectionCard />
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default Collections;