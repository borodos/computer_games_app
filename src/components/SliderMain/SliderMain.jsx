import React from "react";
import Slider from "react-slick";
import { mokActionsData } from "../../mokActionsData";

import "../../styles/SliderMain.scss";
import { SliderCard } from "./SliderCard";

export const SliderMain = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <section className="slider">
            <div className="slider__container">
                <Slider className="slider__component" {...settings}>
                    {mokActionsData.map((value, index) => (
                        <SliderCard computer={value} key={`${value}-${index}`} />
                    ))}
                </Slider>
            </div>
        </section>
    );
};
