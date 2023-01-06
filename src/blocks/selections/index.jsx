import React from 'react';
import './style.scss';
import Wrapper from "../../components/wrapper";
import Selection from "./selection-card";
import {SelectionsData} from "./constants";

const Selections = () => {
    return (
        <Wrapper>
            <div className="selections">
                <div className="selections__title">
                    Мы подобрали для вас
                </div>
                <div className="selections__items">
                    {SelectionsData.map(selection => (
                        <Selection
                            key={Math.random() * 100000}
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