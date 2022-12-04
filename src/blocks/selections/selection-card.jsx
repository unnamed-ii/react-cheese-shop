import React from "react";
import {Link} from "react-router-dom";

const Selection = ({
                       title,
                       image,
                       text,
                       linkTo,
                       selectionsName
                   }) => {
    return (
        <div className={`selections__items-${selectionsName}`}>
            <img className={`selections__items-${selectionsName}__bg`} src={image} alt=""/>
            <div className={`selections__items-${selectionsName}__title`}>
                {title}
            </div>
            <div className={`selections__items-${selectionsName}__text`}>
                {text}
            </div>
            <Link className={`selections__items-${selectionsName}__link`} to={linkTo}>
                Перейти
            </Link>
        </div>
    )
}

export default Selection;