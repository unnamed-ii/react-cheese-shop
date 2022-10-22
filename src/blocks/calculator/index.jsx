import React from 'react';
import './style.scss'

import {ReactComponent as QuestionMarkIcon} from '../../images/icons/question-mark.svg';
import Wrapper from "../../components/wrapper";
import MainNav from "../../components/main-nav";

const Calculator = () => {
    return (
        <Wrapper>
            <div className="calculator">
                <div className="calculator__inner">
                    <MainNav />
                    <div className="calculator__inner-content">
                        <div className="calculator__title">
                            Калькулятор сыродела
                        </div>
                        <div className="calculator__box">
                            <div className="calculator__box-calculations">
                                <div className="calculator__box-calculations__title">
                                    Расчет количества закваски
                                </div>
                                <div className="calculator__box-calculations__inputs">
                                    <div className="calculator__box-calculations__input">
                                        <div className="title">
                                            На какой объем рассчитан весь пакет?
                                        </div>
                                        <input type="number"/>
                                    </div>
                                    <div className="calculator__box-calculations__input">
                                        <div className="title">
                                            Какой объем молока вы используете?
                                        </div>
                                        <input type="number"/>
                                    </div>
                                    <div className="calculator__box-calculations__input">
                                        <div className="title">
                                            Сколько весит вся закваска в пакете?
                                        </div>
                                        <input type="number"/>
                                    </div>
                                </div>
                                <div className="calculator__box-calculations__btn">
                                    Рассчитать
                                </div>
                            </div>
                            <div className="calculator__box-result">
                                <div className="calculator__box-result__title">
                                    Результат
                                </div>
                                <div className="calculator__box-result__text">
                                    Для переработки <span>2</span> литров молока вам потребуется&nbsp;<span>1/1</span> часть пакета
                                    закваски или <span>1</span> грамм (0,5
                                    грамм на каждый литр молока)
                                </div>
                                <div className="calculator__box-result__instructions">
                                    <div className="title">
                                        Нужна помощь с расчетами?
                                    </div>
                                    <div className="line">
                                        <QuestionMarkIcon class="question-mark"/>
                                        <div className="line__text">
                                            Пакет любой закваски для сыра рассчитан на переработку конкретного объема молока.
                                        </div>
                                    </div>
                                    <div className="line">
                                        <QuestionMarkIcon class="question-mark"/>
                                        <div className="line__text">
                                            Укажите количество молока (в литрах), которое вы собираетесь использовать за одну
                                            варку.
                                        </div>
                                    </div>
                                    <div className="line">
                                        <QuestionMarkIcon class="question-mark"/>
                                        <div className="line__text">
                                            Для правильного расчета необходимо указать, сколько весит вся закваска в пакете (с
                                            точностью до 0,1 гр)
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default Calculator;