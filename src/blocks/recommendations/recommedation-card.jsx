import React from "react";
import {Link} from "react-router-dom";

export const RecommendationCard = ({subtitle, title, text, bgImage, isActive}) => {
    return (
        <div className={"recommendations__item " + (isActive && "active")}>
            <img src={bgImage} alt=""/>
            <div className="recommendations__item-subtitle">{subtitle}</div>
            <div className="recommendations__item-title">{title}</div>
            <div className="recommendations__item-text">
                {text}
            </div>
            <Link to="collections" className="recommendations__item-link">Смотреть наборы</Link>
        </div>
    )
}