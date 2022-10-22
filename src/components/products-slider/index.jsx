import React from 'react';
import './style.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {ReactComponent as ArrowRight} from "../../images/icons/slider/arrow-right.svg";
import {ReactComponent as ArrowLeft} from "../../images/icons/slider/arrow-left.svg";
import Card from "../card";
import Wrapper from "../wrapper";

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

const ProductsSlider = ({title}) => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>,
    };

    return (
        <Wrapper>
            <div className="products-slider">
                <div className="products-slider__title">
                    {title}
                </div>
                <Slider {...settings}>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </Slider>
            </div>
        </Wrapper>
    );
};

export default ProductsSlider;