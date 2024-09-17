import React from "react";

import BannerWithSlider from "./Banner";
import BannerFooter from "./BannerFooter";
import ProductsList from "./ProductsList";

const HomeComponent = () => {

    return (
        <main className="main">
            <BannerWithSlider />
            <BannerFooter />
            <ProductsList />
        </main>
    );
}

export default HomeComponent