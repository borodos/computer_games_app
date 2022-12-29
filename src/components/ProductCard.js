import React from "react";
import { Button } from "@chakra-ui/react";

import "../styles/ProductCard.scss";

import comp1 from "../assets/computers/hyperpc-ampere-mini.jpg";
import comp2 from "../assets/computers/hyperpc-ampere-mini.jpg";
import comp3 from "../assets/computers/hyperpc-ampere-mini.jpg";
import comp4 from "../assets/computers/hyperpc-ampere-mini.jpg";
import ReactStars from "react-rating-stars-component";

export const ProductCard = () => {
    const ratingChanged = (newRating) => {
        console.log(newRating);
    };

    return (
        <div className="product-card">
            <div className="product-card__img">
                <img src={comp2} alt="Computer" />
            </div>
            <div className="product-card__content">
                <div className="product-card__name-product">MSI MAG Infinite S3 11SC-213XRU</div>
                <div className="product-card__rating">
                    <ReactStars count={5} onChange={ratingChanged} size={24} activeColor="#ffd700" />
                </div>
                <a href="/" className="product-card__description">
                    Описание
                </a>
                <div className="product-card__price">1000$</div>
                <Button mt="10px" color="gray.900" variant="solid" _hover={{ bg: "black", color: "white" }} width="50%">
                    Settings
                </Button>
            </div>
        </div>
    );
};
