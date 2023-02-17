import { Image } from "@chakra-ui/react";
import React from "react";
import G305 from "../../assets/G305.png";

export const SliderCard = ({ computer }) => {
    return (
        <div className="slider-card">
            <div className="slider-card__wrapper">
                <div className="slider-card__content">
                    <p className="slider-card__title">Самый популярный товар недели:</p>
                    <p className="slider-card__subtitle">
                        Игровая мышка <br /> Logitech G305
                    </p>
                </div>
                <div className="slider-card__img">
                    <Image src={computer?.image} alt="G305" />
                </div>
            </div>
        </div>
    );
};
