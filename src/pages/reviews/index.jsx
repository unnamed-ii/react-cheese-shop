import React, {useContext, useEffect, useState} from 'react';
import './style.scss';
import Wrapper from "../../components/wrapper";
import MainNav from "../../components/main-nav";
import ReviewCard from "./review-card";
import {ReactComponent as UserIcon} from '../../images/icons/reviews-user.svg';
import LoginModal from "../../components/modals/login";
import {database} from "../../firebase";
import {addDoc, collection, getDocs} from "firebase/firestore";
import LoadingAnimation from "../../components/loadingAnimation/loadingAnimation";
import {LoadingAnimationContext} from "../../Context";
import {refreshPage} from "../../utils/refreshPage";
import Title from "../../components/title";
import ReviewModal from "../../components/modals/review-modal";

const Reviews = () => {
    const isAuth = JSON.parse(localStorage.getItem('isUserAuthorized'));
    const userFullName = JSON.parse(localStorage.getItem('userInfo')).userData.fullName;
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

    const getReviews = async () => {
        await setIsLoading(true);
        const querySnapshot = await getDocs(collection(database, "reviews"));
        querySnapshot.forEach((review) => {
            const addingReview = review.data();
            setReviewsList(prevState => ([
                ...prevState,
                addingReview
            ]))
        });
    }

    const sendReview = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const reviewData = {
                fullName: userFullName,
                rate: sendingReviewInputs.rate,
                text: sendingReviewInputs.text,
                createdAt: new Date().toDateString()
            }
            await addDoc(collection(database, "reviews"), reviewData);
            refreshPage();
            toggleModal();
        } catch (e) {
            console.log(e);
        }
        setIsLoading(false);
    }
    useEffect(() => {
        getReviews();
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
                                        sendReview={sendReview}
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