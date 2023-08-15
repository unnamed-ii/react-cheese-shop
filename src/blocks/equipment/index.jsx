import React, {useState} from 'react';
import './style.scss';
import Wrapper from "../../components/wrapper";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {ReactComponent as ArrowRight} from "../../images/icons/slider/arrow-right.svg";
import {ReactComponent as ArrowLeft} from "../../images/icons/slider/arrow-left.svg";
import {SlidesData} from "./constants";
import {EquipmentSlide} from "./equipment-slide";

const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, content: ArrowRight }}
            onClick={onClick}
        >
            <ArrowRight />
        </div>
    );
}

const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, content: ArrowLeft }}
            onClick={onClick}
        >
            <ArrowLeft />
        </div>
    );
}

const Equipment = () => {
    const [currentSlideIdx, setCurrentSlideIdx] = useState(1);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    return (
        <Wrapper>
            <div className="equipment">
                <div className="equipment__title">
                    наше оборудование
                </div>
                <Slider {...settings}>
                    {SlidesData.map(slide =>
                        <EquipmentSlide
                            key={slide.id}
                            title={slide.title}
                            text={slide.text}
                        />
                    )}
                </Slider>
                <div className="equipment__current-slide">
                    0{currentSlideIdx} / 03
                </div>
            </div>
        </Wrapper>
    );
};

export default Equipment;