import React from "react";
import { Button, Image, useDisclosure } from "@chakra-ui/react";
import ReactStars from "react-rating-stars-component";
import { useNavigate } from "react-router-dom";
import { ModalDescription } from "./Modal/ModalDescription";

import "../styles/ProductCard.scss";

export const ProductCard = ({ computer }) => {
    const ratingChanged = (newRating) => {
        console.log(newRating);
    };

    const navigate = useNavigate();

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <div className="product-card">
            <div className="product-card__img">
                <Image boxSize="400px" src={computer?.image} alt="Computer" />
            </div>
            <div className="product-card__content">
                <span className="product-card__name-product">{computer.name}</span>
                <div className="product-card__rating">
                    <ReactStars
                        count={5}
                        value={computer.rating}
                        isHalf={true}
                        onChange={ratingChanged}
                        size={24}
                        activeColor="#ffd700"
                    />
                </div>
                <span className="product-card__description" onClick={onOpen}>
                    Описание
                </span>

                <ModalDescription isOpen={isOpen} onClose={onClose} description={computer.description} />
                <div className="product-card__price">{computer.price} Р</div>
                <Button
                    mt="10px"
                    color="gray.900"
                    variant="solid"
                    _hover={{ bg: "#242424b0", color: "white" }}
                    width="50%"
                    onClick={() => navigate(`/products/${computer.id}`)}
                >
                    Купить
                </Button>
            </div>
        </div>
    );
};
