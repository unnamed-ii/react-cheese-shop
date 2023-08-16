import React from "react";
import {Link} from "react-router-dom";
import {ReactComponent as ArrowRightIcon} from "../../images/icons/arrow-right.svg";

export const ArticleCard = ({title, text, image, id}) => {
    return (
        <div className="articles__list-item">
            <img className="articles__list-item__image" src={image} alt=""/>
            <div className="articles__list-item__box">
                <div className="articles__list-item__title">
                    {title}
                </div>
                <div className="articles__list-item__text">
                    {text}
                </div>
                <Link className="articles__list-item__link" to={`articles/${id}`}>
                    Читать далее
                    <ArrowRightIcon className="image"/>
                </Link>
            </div>
        </div>
    )
}