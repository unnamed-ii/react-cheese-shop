import React, {useEffect} from 'react';
import './style.scss'
import ModalWrapper from "../../modal-wrapper";
import {ReactComponent as CloseBtnIcon} from '../../../images/icons/close-moduls-btn.svg';
import {ReactComponent as QuestionMarkIcon} from '../../../images/icons/choose-modal-question.svg';
import productImg from '../../../images/icons/choose-product-img.png';
import {Link} from "react-router-dom";

const ProductAddedModal = ({
                               toggleModal,
                               isModalOpened,
                               title,
                               amount,
                               image
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
            <div className="product-added modal-window">
                <div className="product-added__title">
                    Добавлено в корзину
                </div>
                <button className="product-added__close" onClick={toggleModal}>
                    <CloseBtnIcon/>
                </button>
                <div className="product-added__product">
                    <img src={image} alt="" className="product-added__product-image"/>
                    <div className="product-added__product-info">
                        <div className="top">
                            <div className="top__title">
                                {title}
                            </div>
                            <div className="top__amount">
                                {amount} шт.
                            </div>
                        </div>
                        <div className="bonus">
                            <span>+99</span> бонусных рублей
                            <QuestionMarkIcon className="question-mark-icon"/>
                        </div>
                    </div>
                </div>
                <div className="product-added__buttons">
                    <button className="product-added__buttons-button" onClick={toggleModal}>
                        Продолжить покупки
                    </button>
                    <Link to="/checkout" className="product-added__buttons-button orange">
                        Просмотр корзины
                    </Link>
                </div>
            </div>
        </ModalWrapper>
    );
};

export default ProductAddedModal;