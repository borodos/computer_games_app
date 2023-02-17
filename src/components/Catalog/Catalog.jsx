import React from "react";
import { ProductCard } from "../ProductCard";

import "../../styles/Catalog.scss";
import Slider from "react-slick";
import { mokСomputersData } from "../../mokСomputersData";

export const Catalog = () => {
    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 3,
    };

    return (
        <section className="catalog">
            <div className="catalog__title">
                <h2>КАТАЛОГ</h2>
            </div>
            <Slider className="catalog__slider" {...settings}>
                {mokСomputersData.map((value, index) => (
                    <div className="catalog__component" key={`${value}-${index}`}>
                        <ProductCard catalog="true" computer={value} />
                    </div>
                ))}
            </Slider>
        </section>
    );
};
