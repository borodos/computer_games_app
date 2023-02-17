import React from "react";

import { ProductCard } from "../ProductCard";

import "../../styles/NewProductsMain.scss";
import Slider from "react-slick";
import { mokNewComputersData } from "../../mokNewComputersData";

export const NewProductsMain = () => {
    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    return (
        <section className="new-products">
            <div className="new-products__title">
                <h2>НОВИНКИ МАГАЗИНА</h2>
            </div>

            <Slider className="new-products__slider" {...settings}>
                {mokNewComputersData.map((value, index) => (
                    <div className="new-products__component" key={`${value}-${index}`}>
                        <ProductCard catalog="true" computer={value} />
                    </div>
                ))}
            </Slider>
        </section>
    );
};
