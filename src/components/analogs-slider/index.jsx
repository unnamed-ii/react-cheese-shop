import React from 'react';
import './style.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AnalogProductCard from "../analog-product-card";
import Card from "../card";
import {ReactComponent as ArrowRight} from "../../images/icons/slider/arrow-right.svg";
import {ReactComponent as ArrowLeft} from "../../images/icons/slider/arrow-left.svg";

const SampleNextArrow = (props) => {
    const {className, style, onClick} = props;
    return (
        <div
            className={className}
            style={{...style, content: ArrowRight}}
            onClick={onClick}
        >
            <ArrowRight/>
        </div>
    );
}

const SamplePrevArrow = (props) => {
    const {className, style, onClick} = props;
    return (
        <div
            className={className}
            style={{...style, content: ArrowLeft}}
            onClick={onClick}
        >
            <ArrowLeft/>
        </div>
    );
}

const AnalogsSlider = ({bigSize}) => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>,
        responsive: [
            {
                breakpoint: 880,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    };

    return (
        <div className="analog-wrapper">
            <div className={"analog-slider " + (bigSize && "big-size")}>
                <div className="analog-slider__title">
                    Аналогичные товары
                </div>
                {bigSize
                    ?
                    <Slider {...settings}>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                    </Slider>
                    :
                    <Slider {...settings}>
                        <AnalogProductCard/>
                        <AnalogProductCard/>
                        <AnalogProductCard/>
                        <AnalogProductCard/>
                        <AnalogProductCard/>
                        <AnalogProductCard/>
                    </Slider>
                }
            </div>
        </div>
    );
};

export default AnalogsSlider;