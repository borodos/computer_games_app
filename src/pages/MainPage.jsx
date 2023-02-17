import { NewProductsMain } from "../components/NewProducts/NewProductsMain";
import { Catalog } from "../components/Catalog/Catalog";

import "../styles/MainPage.scss";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export const MainPage = () => {
    const navigate = useNavigate();
    const user = useSelector((state) => state.authUserSlice.user);

    useEffect(() => {
        if (!user.isAuth) {
            navigate("/login");
        }
    });

    return (
        <section className="main">
            <NewProductsMain />
            <Catalog />
        </section>
    );
};
