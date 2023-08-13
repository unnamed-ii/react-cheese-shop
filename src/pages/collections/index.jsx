import React from 'react';
import './style.scss'
import Wrapper from "../../components/wrapper";
import MainNav from "../../components/main-nav";
import {CollectionCard} from "./collection-card";
import collectionImage from "../../images/collections.png";

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
                            <CollectionCard id={"1"} image={collectionImage}/>
                            <CollectionCard id={"2"} image={collectionImage}/>
                            <CollectionCard id={"3"} image={collectionImage}/>
                            <CollectionCard id={"4"} image={collectionImage}/>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default Collections;