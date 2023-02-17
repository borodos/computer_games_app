import { Button, Image, useToast } from "@chakra-ui/react";
import React, { useEffect } from "react";
import "../styles/ProductPage.scss";
import comp2 from "../assets/computers/2.jpg";
import { Link, useNavigate, useParams } from "react-router-dom";

import { mokСomputersData } from "../mokСomputersData";
import { mokNewComputersData } from "../mokNewComputersData";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../redux/cartSlice";

const ProductPage = () => {
    const navigate = useNavigate();
    const user = useSelector((state) => state.authUserSlice.user);
    const cart = useSelector((state) => state.cartSlice.cart);
    const toast = useToast();
    const dispatch = useDispatch();
    const params = useParams();

    useEffect(() => {
        if (!user.isAuth) {
            navigate("/login");
        }
    });

    let computer = {};

    const searchComputer = () => {
        mokСomputersData.forEach((value) => {
            if (value.id === Number(params.id)) {
                return (computer = value);
            }
        });
        mokNewComputersData.forEach((value) => {
            if (value.id === Number(params.id)) {
                return (computer = value);
            }
        });
    };

    searchComputer();

    const showToastSuccess = () => {
        toast({
            position: "top-center",
            title: "Success",
            description: "Товар успешно добавлен в корзину",
            status: "success",
            duration: 2000,
            isClosable: true,
        });
    };

    const showToastWarning = () => {
        toast({
            position: "top-center",
            title: "Warning",
            description: "Товар уже добавлен в корзину",
            status: "warning",
            duration: 2000,
            isClosable: true,
        });
    };

    const addToCart = () => {
        if (cart.find((value) => value.id === computer.id)) {
            return showToastWarning();
        } else {
            dispatch(addProduct(computer));
            showToastSuccess();
        }
    };

    return (
        <div className="product__container">
            <h1 className="product__title">
                <Link className="product__title-link" to="/">
                    Главная
                </Link>{" "}
                &gt; {computer.name}
            </h1>
            <div className="product__info">
                <div className="product__img">
                    <Image boxSize="400px" src={computer.image} alt="Computer" />
                    <span className="product__img-text">{computer.name}</span>
                </div>
                <div className="content">
                    <div className="content__title">{computer.description}</div>
                    <ul className="content__body">
                        <li>Процессор: {computer.processor}</li>
                        <li>Тип ОЗУ: {computer.memory}</li>
                        <li>Количество ОЗУ: {computer.memoryCount} </li>
                        <li>Видеокарта: {computer.videoCard}</li>
                        <li>Количество видеопамяти: {computer.videoCardMemory}</li>
                        <li>SSD: {computer.SSD}</li>
                    </ul>
                    <Button
                        mt="10px"
                        color="gray.900"
                        variant="solid"
                        _hover={{ bg: "#242424b0", color: "white" }}
                        onClick={addToCart}
                    >
                        Добавить в корзину
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
