import React from "react";
import BreadCrumb from "../../common/breadcrumb";
import CheckoutComponent from "./CheckoutComponent";

const Checkout = () => {

    return (
        <main className="main pages">
            <BreadCrumb pages={['Pages', 'Checkout']} />
            <CheckoutComponent />
        </main>
    )
}

export default Checkout