import React from 'react';
import {ReactComponent as ReviewIcon} from "../../images/icons/review.svg";

const Rate = () => {
    return (
        <div className="rate">
            <div className="rate__stars">
                5 stars
            </div>
            <a href="#" className="rate__reviews">
                <ReviewIcon/>
                2 Отзыва
            </a>
        </div>
    );
};

export default Rate;