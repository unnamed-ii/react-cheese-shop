import React from "react";

export const EquipmentSlide = ({title, text}) => {
    return (
        <div className="slide">
            <div className="slide__inner">
                <div className="slide__inner-title">
                    {title}
                </div>
                <div className="slide__inner-text">
                    {text}
                </div>
                <a href="#" className="slide__inner-link">
                    Узнать больше
                </a>
            </div>
        </div>
    )
}