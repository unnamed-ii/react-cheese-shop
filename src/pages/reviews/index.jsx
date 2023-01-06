import React, {useState} from 'react';
import './style.scss';
import Wrapper from "../../components/wrapper";
import MainNav from "../../components/main-nav";
import ReviewCard from "./review-card";
import RegistrationModal from "../../components/modals/registration";
import {ReviewsData} from "./constants";
import {ReactComponent as UserIcon} from '../../images/icons/reviews-user.svg';

const Reviews = () => {
    const [isModalOpened, setIsModalOpened] = useState(false);
    const toggleModal = () => setIsModalOpened(!isModalOpened);

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
                                <button onClick={toggleModal}>
                                    <UserIcon className="user-icon"/> Авторизоваться
                                </button>
                                {isModalOpened &&
                                    <RegistrationModal
                                        toggleModal={toggleModal}
                                        isModalOpened={isModalOpened}
                                    />
                                }
                            </div>
                        </div>
                        <div className="reviews__list">
                            {ReviewsData.map(review =>
                                <ReviewCard
                                    key={Math.floor(Math.random() * 100000)}
                                    name={review.name}
                                    address={review.address}
                                    text={review.text}
                                    date={review.date}
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