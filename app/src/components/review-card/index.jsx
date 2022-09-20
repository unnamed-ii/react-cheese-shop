import React from "react";
import './style.scss';

import reviewImg from "../../images/review-image.png";

const ReviewCard = () => {
    return (
        <div className="review">
            <div className="review__top">
                <div className="user">
                    <div className="user__name">
                        Светлана Петровна
                    </div>
                    <div className="user__city">г. Москва</div>
                </div>
                <div className="rate">
                    5 звёзд
                </div>
            </div>
            <div className="review__text">
                Заказываю сама и рекомендую всем! Всегда в наличии все необходимое для моего хобби:
                закваски, ферменты и еще много чего. Доставка, оплата - быстро и четко. Для тех, кто только
                пробует себя в сыроделии - проконсультируют и помогут.
            </div>
            <div className="review__images">
                <img src={reviewImg} alt=""/>
                <img src={reviewImg} alt=""/>
                <img src={reviewImg} alt=""/>
            </div>
            <div className="review__date">
                24 октября 2020
            </div>
        </div>
    )
}

export default ReviewCard;