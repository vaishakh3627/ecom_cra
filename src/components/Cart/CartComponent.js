import React from "react";

import { ButtonComponent, CartIems, TableItems } from "./CartItems";
import CheckOut from "./CheckOut";
import PromoCode from "./PromoCode";
import ShippingCharge from "./ShippingCharge";
import Yourcart from "./YourCart";

const tableItems = [
    {
        imageContent: "../../assets/imgs/shop/product-1-1.jpg",
        productName: "Field Roast Chao Cheese Creamy Original",
        ratingLine: "(4.0)",
        unitPrice: "$2.51",
        quantityLine: "1",
        totalPrice: "$2.51",
    },
    {
        imageContent: "../../assets/imgs/shop/product-2-1.jpg",
        productName: "Blue Diamond Almonds Lightly Salted",
        ratingLine: "(4.0)",
        unitPrice: "$3.2",
        quantityLine: "1",
        totalPrice: "$3.2",
    },
    {
        imageContent: "../../assets/imgs/shop/product-3-1.jpg",
        productName: "Fresh Organic Mustard Leaves Bell Pepper",
        ratingLine: "(4.0)",
        unitPrice: "$2.43",
        quantityLine: "1",
        totalPrice: "$2.43",
    }
]

const CartComponent = () =>
    <div className="container mb-80 mt-50">
        <Yourcart />
        <div className="row">
            <div className="col-lg-8">
                <div className="table-responsive shopping-summery">
                    <table className="table table-wishlist">
                        <CartIems />
                        <tbody>
                            {
                                tableItems.map(item => <TableItems key={item.productName} {...item} />) 
                            }
                        </tbody>
                    </table>
                </div>
                <ButtonComponent />
                <div className="row mt-50">
                    <div className="col-lg-7">
                        <ShippingCharge />
                    </div>
                    <div className="col-lg-5">
                        <PromoCode />
                    </div>
                </div>
            </div>
            <CheckOut />
        </div>
    </div>

export default CartComponent