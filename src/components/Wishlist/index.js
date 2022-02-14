import React from "react";

import BreadCrumb from "../../common/breadcrumb";
import WishlistComponent from "./WishlistComponent";

const Wishlist = () =>
    <main className="main pages">
        <BreadCrumb pages={['Pages', 'Wishlist']} />
        <WishlistComponent />
    </main>
export default Wishlist