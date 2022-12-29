import React from "react";
import { ProductCard } from "./../ProductCard";

import "../../styles/Catalog.scss";

export const Catalog = () => {
    const cards = [1, 2, 3];

    return (
        <section className="catalog">
            <div className="catalog__title">
                <h2>КАТАЛОГ</h2>
            </div>
            <div className="catalog__cards">
                {cards.map((value, index) => (
                    <ProductCard catalog="true" key={`${value}-${index}`} />
                ))}
            </div>
        </section>
    );
};
