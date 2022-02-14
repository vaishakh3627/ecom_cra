import React from "react";

import { WishlistInStock, WishListOutStock, WishlistTable } from "./WishlistTable";

const WishlistTableItems = [
    {
        productImage: "assets/imgs/shop/product-1-1.jpg",
        productName: "Field Roast Chao Cheese Creamy Original",
        productPrice: "$2.51",
        productStock: "In Stock",
        productAction: "Add to cart"
    },
    {
        productImage: "assets/imgs/shop/product-2-1.jpg",
        productName: "Blue Diamond Almonds Lightly Salted",
        productPrice: "$3.2",
        productStock: "In Stock",
        productAction: "Add to cart"
    },
    {
        productImage: "assets/imgs/shop/product-3-1.jpg",
        productName: "Fresh Organic Mustard Leaves Bell Pepper",
        productPrice: "$2.43",
        productStock: "In Stock",
        productAction: "Add to cart"
    },
    {
        productImage: "assets/imgs/shop/product-4-1.jpg",
        productName: "Angie’s Boomchickapop Sweet & Salty",
        productPrice: "$3.21",
        productStock: "Out Stock",
        productAction: "Contact Us"
    },
    {
        productImage: "assets/imgs/shop/product-5-1.jpg",
        productName: "Foster Farms Takeout Crispy Classic",
        productPrice: "$3.17",
        productStock: "In Stock",
        productAction: "Add to cart"
    }
]

const WishlistComponent = () => {

    return (
        <div className="container mb-30 mt-50">
            <div className="row">
                <div className="col-xl-10 col-lg-12 m-auto">
                    <div className="mb-50">
                        <h1 className="heading-2 mb-10">Your Wishlist</h1>
                        <h6 className="text-body">There are <span className="text-brand">5</span> products in this list</h6>
                    </div>
                    <div className="table-responsive shopping-summery">
                        <table className="table table-wishlist">
                            <WishlistTable />
                            <tbody>
                                {
                                    WishlistTableItems.map(item => {
                                        if(item.productStock === 'In Stock'){
                                            return (<WishlistInStock key={item.productName} {...item} />)
                                        }
                                        return (<WishListOutStock key={item.productName} {...item} />)
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WishlistComponent