import React, {useState} from 'react';
import './style.scss';
import Wrapper from "../../components/wrapper";
import MainNav from "../../components/main-nav";
import ReviewCard from "./review-card";
import RegistrationModal from "../../components/modals/registration";
import {ReviewsData} from "./constants";
import {ReactComponent as UserIcon} from '../../images/icons/reviews-user.svg';

const Reviews = () => {
    const [isModalShowed, setIsModalShowed] = useState(false);

    return (
        <Wrapper>
            <div className="reviews">
                <div className="reviews__inner">
                    <MainNav/>
                    <div className="reviews__inner-content">
                        <div className="reviews__top">
                            <div className="reviews__top-title">
                                отзывы покупателей
                            </div>
                            <div className="reviews__top-authorization">
                                Что бы оставить отзыв необходимо
                                <button onClick={() => setIsModalShowed(!isModalShowed)}>
                                    <UserIcon className="user-icon" /> Авторизоваться
                                </button>
                                <RegistrationModal show={isModalShowed} />
                            </div>
                        </div>
                        <div className="reviews__list">
                            {ReviewsData.map(i =>
                                <ReviewCard
                                    name={i.name}
                                    address={i.address}
                                    text={i.text}
                                    date={i.date}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default Reviews;