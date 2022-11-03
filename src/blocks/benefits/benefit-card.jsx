import message from "../../images/benefits/message.png";
import {ReactComponent as Clock} from "../../images/benefits/clock.svg";
import React from "react";

export const BenefitCard = ({typeOfBenefit, text}) => {
    return (
        <div className={"benefits__list-benefit " + typeOfBenefit}>
            <div className="plus">
                <div className="plus__inner">
                    +
                </div>
            </div>
            <div className="box">
                <img src={message} alt="" className="message-image"/>
                <Clock className="icon"/>
                <div className="text">
                    {text}
                </div>
            </div>
        </div>
    )
}