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
import {ReactComponent as CloseBtnIcon} from '../../images/icons/close-moduls-btn.svg'
import ModalWrapper from "../../components/modal-wrapper";
import {LoadingAnimationContext} from "../../Context";

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
    const sendReview = async (e) => {
        e.preventDefault();
        try {
            const reviewData = {
                fullName: userFullName,
                rate: sendingReviewInputs.rate,
                text: sendingReviewInputs.text,
                createdAt: new Date().toDateString()
            }
            await addDoc(collection(database, "reviews"), reviewData);
            await toggleModal();
        } catch (e) {
            console.log(e);
        }
    }
    useEffect(() => {
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
                            <div className="reviews__top-title">
                                отзывы покупателей
                            </div>
                            {isAuth
                                ?
                                <div className="review__form">
                                    <button onClick={toggleModal} className="reviews__top-authorization__button">
                                        <UserIcon className="user-icon"/> Оставить отзыв
                                    </button>
                                    {isModalOpened &&
                                    <ModalWrapper>
                                        <form>
                                            <h3>Оставьте ваш отзыв</h3>
                                            <input
                                                type="number"
                                                placeholder="Ваша оценка от 0 до 5"
                                                name="rate"
                                                onChange={onSendingReviewInputChange}
                                            />
                                            <textarea
                                                placeholder="Ваш отзыв..."
                                                cols="30"
                                                rows="10"
                                                name="text"
                                                onChange={onSendingReviewInputChange}
                                            />
                                            <button onClick={sendReview} className="send-review__btn">Отправить</button>
                                            <button onClick={toggleModal} className="close-review__btn"><CloseBtnIcon/>
                                            </button>
                                        </form>
                                    </ModalWrapper>
                                    }
                                </div>
                                :
                                <div className="reviews__top-authorization">
                                    Что бы оставить отзыв необходимо
                                    <button onClick={toggleModal} className="reviews__top-authorization__button">
                                        <UserIcon className="user-icon"/> Авторизоваться
                                    </button>
                                    {isModalOpened &&
                                    <LoginModal
                                        toggleModal={toggleModal}
                                        isModalOpened={isModalOpened}
                                    />
                                    }
                                </div>
                            }
                        </div>
                        <div className="reviews__list">
                            {!reviewsList.length && <h2>Отзывов пока нет</h2>}
                            {reviewsList?.map(review =>
                                <ReviewCard
                                    key={review.email+review.name}
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