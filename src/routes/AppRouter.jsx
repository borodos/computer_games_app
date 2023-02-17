import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { publicRoutes } from "./Routes";
import { useSelector } from "react-redux";

export const AppRouter = () => {
    return (
        <Routes>
            {publicRoutes.map(({ path, component }) => (
                <Route key={path} path={path} element={component} />
            ))}
        </Routes>
    );
};
