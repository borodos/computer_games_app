import React, { useEffect, useState } from "react";
import { FormControl, FormLabel, FormErrorMessage, Input, Button } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { mokUsers } from "../mokUsers";
import { useDispatch, useSelector } from "react-redux";

import "../styles/AuthPage.scss";
import { setAuthUser } from "../redux/authUserSlice";

export const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const isErrorEmail = email === "";
    const isErrorPassword = password === "";

    const userStore = useSelector((store) => store.authUserSlice.user);
    const dispatch = useDispatch();

    const onSubmit = (event) => {
        event.preventDefault();
        mokUsers.find((user) => {
            if (user.email === email && user.password === password) {
                if (!user.isAuth) {
                    user.isAuth = true;
                }
                dispatch(setAuthUser(user));
                navigate("/");
            }
            return user;
        });
    };

    return (
        <section className="login">
            <div className="login__container">
                <div className="login__wrapper">
                    <div className="login__title">
                        <span>Welcome to MySoft! Please, sign in.</span>
                    </div>
                    <div className="login__body">
                        <form id="form-login" onSubmit={onSubmit}>
                            <FormControl className="email-container" isInvalid={isErrorEmail}>
                                <FormLabel>Email</FormLabel>
                                <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                {isErrorEmail ? <FormErrorMessage>Email is required.</FormErrorMessage> : null}
                            </FormControl>
                            <FormControl className="password-container" isInvalid={isErrorPassword}>
                                <FormLabel>Password</FormLabel>
                                <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                {isErrorPassword ? <FormErrorMessage>Password is required.</FormErrorMessage> : null}
                            </FormControl>
                        </form>
                    </div>
                    <div className="login__text">
                        <span>
                            Don't have an account? <Link to="/registration">Sign In</Link>
                        </span>
                    </div>
                    <div className="login__menu">
                        <Button colorScheme="gray" variant="outline" type="submit" form="form-login">
                            Log In
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};
