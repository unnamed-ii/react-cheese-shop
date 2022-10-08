import React from 'react';
import './style.scss';

import {ReactComponent as UserIcon} from '../../images/icons/reviews-user.svg';
import Wrapper from "../../components/wrapper";
import MainNav from "../../components/main-nav";
import ReviewCard from "../../components/review-card";
import {Link} from "react-router-dom";

const Reviews = () => {
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
                                <Link to="/authorization">
                                    <UserIcon className="user-icon" /> Авторизоваться
                                </Link>
                            </div>
                        </div>
                        <div className="reviews__list">
                            <ReviewCard/>
                            <ReviewCard/>
                            <ReviewCard/>
                            <ReviewCard/>
                            <ReviewCard/>
                            <ReviewCard/>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default Reviews;