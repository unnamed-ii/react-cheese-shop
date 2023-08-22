import React, {useContext, useEffect, useState} from 'react';
import './style.scss'
import Wrapper from "../../components/wrapper";
import MainNav from "../../components/main-nav";
import {CollectionCard} from "./collection-card";
import collectionImage from "../../images/collections.png";
import {collection, getDocs} from "firebase/firestore";
import {database} from "../../firebase";
import {useLocation} from "react-router-dom";
import {LoadingAnimationContext} from "../../Context";
import LoadingAnimation from "../../components/loadingAnimation/loadingAnimation";
import PageTitle from "../../components/page-title";

const Collections = () => {
    const {isLoading, setIsLoading} = useContext(LoadingAnimationContext);
    const [collections, setCollections] = useState([]);

    useEffect(async () => {
        setIsLoading(true);
        try {
            const querySnapshot = await getDocs(collection(database, 'collections'));
            await querySnapshot.forEach((doc) => {
                const id = doc.id;
                const data = doc.data();
                const newCollection = {...JSON.parse(JSON.stringify(data)), id};
                setCollections(p => ([...p, newCollection]));
            })
        } catch (e) {
            console.log(e);
        }
        setIsLoading(false);
    }, []);

    return (
        <Wrapper>
            <LoadingAnimation isLoading={isLoading}/>
            <div className="collections">
                <div className="collections__inner">
                    <MainNav/>
                    <div className="collections__inner-content">
                        <PageTitle title={"Наборы для сыра"}/>
                        <div className="collections__group">
                            {collections.map((collection) => (
                                <CollectionCard
                                    key={collection.id}
                                    title={collection.name}
                                    description={collection.shortDescription}
                                    price={collection.price}
                                    id={collection.id}
                                    image={collectionImage}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default Collections;