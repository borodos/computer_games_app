import { SliderMain } from "./../components/SliderMain/SliderMain";
import { NewProductsMain } from "./../components/NewProducts/NewProductsMain";

import "../styles/MainPage.scss";
import { Catalog } from "../components/Catalog/Catalog";

export const MainPage = () => {
    return (
        <section className="main">
            <SliderMain />
            <NewProductsMain />
            <Catalog />
        </section>
    );
};
