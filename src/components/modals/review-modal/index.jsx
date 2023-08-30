import React, {useEffect} from "react";
import "./style.scss";
import ModalWrapper from "../../modal-wrapper";
import {ReactComponent as CloseBtnIcon} from "../../../images/icons/close-moduls-btn.svg";

const ReviewModal = ({
                         toggleModal,
                         isModalOpened,
                         onSendingReviewInputChange,
                         sendReview
                     }) => {
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isModalOpened && !event.target.closest('.modal-window')) {
                toggleModal();
            }
        }
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        }
    }, [isModalOpened, toggleModal]);

    return (
        <ModalWrapper isModalOpened={isModalOpened}>
            <div className="modal-window reviews-form">
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
                <button onClick={sendReview} className="send-review__btn">
                    Отправить
                </button>
                <button onClick={toggleModal} className="close-review__btn">
                    <CloseBtnIcon/>
                </button>
            </div>
        </ModalWrapper>
    )
}

export default ReviewModal;