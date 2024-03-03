import React, {useContext, useEffect, useState} from 'react';
import './style.scss';
import Wrapper from "../../components/wrapper";
import MainNav from "../../components/main-nav";
import ReviewCard from "./review-card";
import {ReactComponent as UserIcon} from '../../images/icons/reviews-user.svg';
import LoginModal from "../../components/modals/login";
import LoadingAnimation from "../../components/loadingAnimation/loadingAnimation";
import {LoadingAnimationContext} from "../../Context";
import Title from "../../components/title";
import ReviewModal from "../../components/modals/review-modal";
import {getReviews, sendReview} from "../../api";

const Reviews = () => {
    const isAuth = JSON.parse(localStorage.getItem('isUserAuthorized'));
    const userFullName = isAuth ? JSON.parse(localStorage.getItem('userInfo')).userData.fullName : "";
    const [isModalOpened, setIsModalOpened] = useState(false);
    const {isLoading, setIsLoading} = useContext(LoadingAnimationContext);
    const [reviewsList, setReviewsList] = useState([]);
    const [sendingReviewInputs, setSendingReviewInputs] = useState({
        rate: 5,
        text: ''
    });

    const toggleModal = () => setIsModalOpened(!isModalOpened);
    const onSendingReviewInputChange = (e) => {
        setSendingReviewInputs(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }

    useEffect(() => {
        void getReviews(setIsLoading, setReviewsList);
        setTimeout(() => setIsLoading(false), 1000)
    }, []);

    return (
        <Wrapper>
            <div className="reviews">
                <div className="reviews__inner">
                    <MainNav/>
                    <div className="reviews__inner-content">
                        <div className="reviews__top">
                            <Title
                                title={"Отзывы покупателей"}
                                className={"page"}
                            />
                            {isAuth ?
                                <>
                                    <button onClick={toggleModal} className="reviews__top-authorization__button">
                                        <UserIcon className="user-icon"/> Оставить отзыв
                                    </button>
                                    <ReviewModal
                                        sendReview={(e) => sendReview(e, setIsLoading, userFullName, sendingReviewInputs, toggleModal)}
                                        toggleModal={toggleModal}
                                        isModalOpened={isModalOpened}
                                        onSendingReviewInputChange={onSendingReviewInputChange}
                                    />
                                </>
                                :
                                <div className="reviews__top-authorization">
                                    Что бы оставить отзыв необходимо
                                    <button onClick={toggleModal} className="reviews__top-authorization__button">
                                        <UserIcon className="user-icon"/> Авторизоваться
                                    </button>
                                    <LoginModal
                                        toggleModal={toggleModal}
                                        isModalOpened={isModalOpened}
                                    />
                                </div>
                            }
                        </div>
                        <div className="reviews__list">
                            {!reviewsList.length && <h2>Отзывов пока нет</h2>}
                            {reviewsList?.map((review, idx) =>
                                <ReviewCard
                                    key={idx}
                                    name={review.name}
                                    address={review.address}
                                    text={review.text}
                                    createdAt={review.createdAt}
                                    rate={review.rate}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <LoadingAnimation isLoading={isLoading}/>
        </Wrapper>
    );
};

export default Reviews;