import React, { useState } from "react";
import { FormControl, FormLabel, FormErrorMessage, Input, Button, useToast } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { mokUsers } from "../mokUsers";
import { useDispatch } from "react-redux";

import "../styles/AuthPage.scss";
import { setAuthUser } from "../redux/authUserSlice";

export const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const isErrorEmail = email === "";
    const isErrorPassword = password === "";
    const dispatch = useDispatch();

    const toast = useToast();

    const onSubmit = (event) => {
        event.preventDefault();
        mokUsers.find((user) => {
            if (user.email === email && user.password === password) {
                if (!user.isAuth) {
                    user.isAuth = true;
                }
                dispatch(setAuthUser(user));
                navigate("/");
            } else {
                toast({
                    position: "top-center",
                    title: "Error",
                    description: "Неправильный пароль или почта",
                    status: "error",
                    duration: 2000,
                    isClosable: true,
                });
            }
            return user;
        });
    };

    return (
        <section className="login">
            <div className="login__container">
                <div className="login__wrapper">
                    <div className="login__title">
                        <span>Пожалуйста, войдите.</span>
                    </div>
                    <div className="login__body">
                        <form id="form-login" onSubmit={onSubmit}>
                            <FormControl className="email-container" isInvalid={isErrorEmail}>
                                <FormLabel>Email</FormLabel>
                                <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                {isErrorEmail ? <FormErrorMessage>Введите email.</FormErrorMessage> : null}
                            </FormControl>
                            <FormControl className="password-container" isInvalid={isErrorPassword}>
                                <FormLabel>Пароль</FormLabel>
                                <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                {isErrorPassword ? <FormErrorMessage>Введите парольль.</FormErrorMessage> : null}
                            </FormControl>
                        </form>
                    </div>
                    <div className="login__text">
                        <span>
                            Нет аккаунта? <Link to="/registration">Зарегистрироваться</Link>
                        </span>
                    </div>
                    <div className="login__menu">
                        <Button colorScheme="gray" variant="outline" type="submit" form="form-login">
                            Войти
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};
