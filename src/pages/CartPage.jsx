import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import "../styles/CartPage.scss";
import { CartCard } from "../components/CartCard";

export const CartPage = () => {
    const navigate = useNavigate();
    const user = useSelector((state) => state.authUserSlice.user);
    const cart = useSelector((state) => state.cartSlice.cart);

    useEffect(() => {
        if (!user.isAuth) {
            navigate("/login");
        }
    });

    return (
        <section className="cart">
            <div className="cart__container">
                {cart.length ? (
                    <div className="cart__wrapper">
                        <div className="cart__list">
                            {cart.map((value, index, array) => (
                                <CartCard key={`${value}-${index}`} computer={value} />
                            ))}
                        </div>
                    </div>
                ) : (
                    <p className="cart__p">Корзина пуста!</p>
                )}
            </div>
        </section>
    );
};
