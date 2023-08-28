import React from "react";
import {Link} from "react-router-dom";
import {ReactComponent as ArrowRightIcon} from "../../images/icons/arrow-right.svg";
import Title from "../../components/title";

export const ArticleCard = ({title, text = '...', image, id}) => {
    text = text.slice(0, 85) + '...';

    return (
        <div className="articles__list-item">
            <img className="articles__list-item__image" src={image} alt=""/>
            <div className="articles__list-item__box">
                <Title
                    title={title}
                    className={"article-card"}
                />
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