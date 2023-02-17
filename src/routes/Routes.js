import { LoginPage } from "../pages/LoginPage";
import { MainPage } from "../pages/MainPage";
import ProductPage from "../pages/ProductPage";
import { RegisterPage } from "../pages/RegisterPage";
import { ProfilePage } from "./../pages/ProfilePage";
import { CartPage } from "./../pages/CartPage";

export const publicRoutes = [
    {
        path: "/",
        component: <MainPage />,
    },
    {
        path: "/products/:id",
        component: <ProductPage />,
    },
    {
        path: "/login",
        component: <LoginPage />,
    },
    {
        path: "/registration",
        component: <RegisterPage />,
    },
    {
        path: "/users/:id",
        component: <ProfilePage />,
    },
    {
        path: "/users/:id/cart",
        component: <CartPage />,
    },
];
