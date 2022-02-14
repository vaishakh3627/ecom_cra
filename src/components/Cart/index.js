import React from "react";

import BreadCrumb from "../../common/breadcrumb";
import CartComponent from "./CartComponent";

const Cart = () =>
    <main className="main pages">
        <BreadCrumb pages={['Pages', 'Cart']}/>
        <CartComponent />
    </main>



export default Cart