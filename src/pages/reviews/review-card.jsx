import React from "react";
import './style.scss';
import reviewImg from "../../images/review-image.png";

const ReviewCard = ({name="Имя пользователя", address='г. Москва', text="Текст отзыва", date="24 октября 2020"}) => {
    return (
        <div className="review">
            <div className="review__top">
                <div className="user">
                    <div className="user__name">
                        {name}
                    </div>
                    <div className="user__city">{address}</div>
                </div>
                <div className="rate">
                    5 звёзд
                </div>
            </div>
            <div className="review__text">
                {text}
            </div>
            <div className="review__images">
                <img src={reviewImg} alt=""/>
                <img src={reviewImg} alt=""/>
                <img src={reviewImg} alt=""/>
            </div>
            <div className="review__date">
                {date}
            </div>
        </div>
    )
}

export default ReviewCard;