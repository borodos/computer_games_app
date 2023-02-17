import { Button, Image, useDisclosure, useToast } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { removeProduct } from "../redux/cartSlice";

import "../styles/CartCard.scss";
import { ModalDescription } from "./Modal/ModalDescription";
export const CartCard = ({ computer }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const dispatch = useDispatch();
    const toast = useToast();

    const showToastSuccess = () => {
        toast({
            position: "top-center",
            title: "Success",
            description: "Товар успешно куплен",
            status: "success",
            duration: 2000,
            isClosable: true,
        });
    };

    const showToastWarning = () => {
        toast({
            position: "top-center",
            title: "Warning",
            description: "Товар удален из корзины",
            status: "warning",
            duration: 2000,
            isClosable: true,
        });
    };

    const deleteProductFromCart = () => {
        dispatch(removeProduct(computer.id));
        showToastWarning();
    };

    return (
        <div className="cart-card">
            <div className="cart-card__wrapper">
                <div className="cart-card__img-container">
                    <Image boxSize={"200px"} src={computer.image} />
                </div>
                <div className="cart-card__content">
                    <div className="cart-card__title">{computer.name}</div>
                    <div className="cart-card__description" onClick={onOpen}>
                        Описание
                    </div>
                    <ModalDescription isOpen={isOpen} onClose={onClose} description={computer.description} />

                    <div className="cart-card__price">{computer.price} Р</div>
                    <div className="cart-card__menu">
                        <Button variant="outline" colorScheme="green" onClick={showToastSuccess}>
                            Купить
                        </Button>
                        <Button variant="outline" colorScheme="red" onClick={deleteProductFromCart}>
                            Отменить
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
