import React, { useState } from "react";
import "../styles/AuthPage.scss";
import { FormControl, FormLabel, FormErrorMessage, FormHelperText, Input, Button, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { mokUsers } from "../mokUsers";

export const RegisterPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [secondName, setSecondName] = useState("");

    const isErrorEmail = email === "";
    const isErrorPassword = password === "";
    const isErrorFirstName = firstName === "";
    const isErrorSecondName = secondName === "";

    const onSubmit = (event) => {
        event.preventDefault();

        mokUsers.push({
            id: mokUsers.length++,
            firstName: firstName,
            secondName: secondName,
            isAuth: false,
            email: email,
            password: password,
            token: "eyJhbGciOiJDAazxXcaAWeqsaInR5cCI6IkpXVCJ9.ejSjdpoaSIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
        });
        console.log(mokUsers);
    };

    return (
        <section className="register">
            <div className="register__container">
                <div className="register__wrapper">
                    <div className="register__title">
                        <span>Welcome to MySoft! Please, sign in.</span>
                    </div>
                    <div className="register__body">
                        <form id="form-register" onSubmit={onSubmit}>
                            <Box className="name-container" py={2}>
                                <FormControl className="firstname-container" isInvalid={isErrorFirstName}>
                                    <FormLabel>First name</FormLabel>
                                    <Input
                                        type="text"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                    {isErrorEmail ? <FormErrorMessage>First name is required.</FormErrorMessage> : null}
                                </FormControl>
                                <FormControl className="secondname-container" isInvalid={isErrorSecondName}>
                                    <FormLabel>Second name</FormLabel>
                                    <Input
                                        type="text"
                                        value={secondName}
                                        onChange={(e) => setSecondName(e.target.value)}
                                    />
                                    {isErrorEmail ? (
                                        <FormErrorMessage>Second name is required.</FormErrorMessage>
                                    ) : null}
                                </FormControl>
                            </Box>
                            <Box py={2}>
                                <FormControl className="email-container" isInvalid={isErrorEmail}>
                                    <FormLabel>Email</FormLabel>
                                    <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    {isErrorEmail ? <FormErrorMessage>Email is required.</FormErrorMessage> : null}
                                </FormControl>
                                <FormControl className="password-container" isInvalid={isErrorPassword}>
                                    <FormLabel>Password</FormLabel>
                                    <Input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    {isErrorPassword ? (
                                        <FormErrorMessage>Password is required.</FormErrorMessage>
                                    ) : null}
                                </FormControl>
                            </Box>
                        </form>
                    </div>
                    <div className="register__text">
                        <span>
                            Already have an account? <Link to="/login">Log In</Link>
                        </span>
                    </div>
                    <div className="register__menu">
                        <Button colorScheme="gray" variant="outline" type="submit" form="form-register">
                            Sign In
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};
