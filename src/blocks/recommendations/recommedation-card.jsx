import React from "react";
import {Link} from "react-router-dom";
import Title from "../../components/title";

export const RecommendationCard = ({
                                       id,
                                       subtitle,
                                       title,
                                       text,
                                       bgImage,
                                       activeBlockId,
                                       setActiveBlockId
                                   }) => {

    return (
        <div className={"recommendations__item " + (activeBlockId === id ? "active" : "")}
             onClick={() => setActiveBlockId(id)}>
            <img src={bgImage} alt=""/>
            <div className="recommendations__item-subtitle">{subtitle}</div>
            <Title
                title={title}
                className={"recommendations__item-title"}
            />
            <div className="recommendations__item-text">
                {text}
            </div>
            <Link to="collections" className="recommendations__item-link">Смотреть</Link>
        </div>
    )
}