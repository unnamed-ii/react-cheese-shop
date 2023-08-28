import React from 'react';
import './style.scss';
import Wrapper from "../../components/wrapper";
import Selection from "./selection-card";
import {SelectionsData} from "./constants";
import Title from "../../components/title";

const Selections = () => {
    return (
        <Wrapper>
            <div className="selections">
                <Title
                    title={"Мы подобрали для вас"}
                    className={"home-page__selection-block"}
                />
                <div className="selections__items">
                    {SelectionsData.map(selection => (
                        <Selection
                            key={selection.id}
                            title={selection.title}
                            image={selection.image}
                            text={selection.text}
                            linkTo={selection.linkTo}
                            selectionsName={selection.selectionsName}
                        />
                    ))}
                </div>
            </div>
        </Wrapper>
    );
};

export default Selections;