import { SliderMain } from "./../components/SliderMain/SliderMain";
import { NewProductsMain } from "./../components/NewProducts/NewProductsMain";

import "../styles/MainPage.scss";

export const MainPage = () => {
    return (
        <section className="main">
            <SliderMain />
            <NewProductsMain />
        </section>
    );
};
