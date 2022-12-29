import React from "react";

import { ProductCard } from "../ProductCard";

import "../../styles/NewProductsMain.scss";

export const NewProductsMain = () => {
    const cards = [1, 2, 3];

    return (
        <section className="new-products">
            <div className="new-products__title">
                <h2>НОВИНКИ МАГАЗИНА</h2>
            </div>
            <div className="new-products__cards">
                {cards.map((value, index) => (
                    <ProductCard key={`${value}-${index}`} />
                ))}
            </div>
        </section>
    );
};
