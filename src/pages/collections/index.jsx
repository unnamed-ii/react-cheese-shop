import React, {useContext, useEffect, useState} from 'react';
import './style.scss'
import Wrapper from "../../components/wrapper";
import MainNav from "../../components/main-nav";
import {CollectionCard} from "./collection-card";
import {collection, getDocs} from "firebase/firestore";
import {database} from "../../firebase";
import {LoadingAnimationContext} from "../../Context";
import LoadingAnimation from "../../components/loadingAnimation/loadingAnimation";
import Title from "../../components/title";

const Collections = () => {
    const {isLoading, setIsLoading} = useContext(LoadingAnimationContext);
    const [collections, setCollections] = useState([]);

    useEffect( () => {
        setIsLoading(true);
        const getCollections = async () => {
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
        }
        getCollections();
        setIsLoading(false);
    }, []);

    return (
        <Wrapper>
            <LoadingAnimation isLoading={isLoading}/>
            <div className="collections">
                <div className="collections__inner">
                    <MainNav/>
                    <div className="collections__inner-content">
                        <Title
                            title={"Наборы для сыра"}
                            className={"collections-page"}
                        />
                        <div className="collections__group">
                            {collections.map((collection) => (
                                <CollectionCard
                                    key={collection.id}
                                    title={collection.name}
                                    description={collection.shortDescription}
                                    price={collection.price}
                                    id={collection.id}
                                    productImageURL={collection.image}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default Collections;