import React from "react";

const CartIems = () =>
    <>
        <thead>
            <tr className="main-heading">
                <th className="custome-checkbox start pl-30">
                    <input className="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox11" value="" />
                    <label className="form-check-label" htmlFor="exampleCheckbox11"></label>
                </th>
                <th scope="col" colSpan="2">Product</th>
                <th scope="col">Unit Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Subtotal</th>
                <th scope="col" className="end">Remove</th>
            </tr>
        </thead>
    </>

const TableItems = props =>
    <>
        <tr className="pt-30">
            <td className="custome-checkbox pl-30">
                <input className="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox1" value="" />
                <label className="form-check-label" htmlFor="exampleCheckbox1"></label>
            </td>
            <td className="image product-thumbnail pt-40"><img src={props.imageContent} alt="#" /></td>
            <td className="product-des product-name">
                <h6 className="mb-5"><a className="product-name mb-10 text-heading" href="shop-product-right.html">{props.productName}</a></h6>
                <div className="product-rate-cover">
                    <div className="product-rate d-inline-block">
                        <div className="product-rating" style={{ width: '90%' }}>
                        </div>
                    </div>
                    <span className="font-small ml-5 text-muted"> {props.ratingLine}</span>
                </div>
            </td>
            <td className="price" data-title="Price">
                <h4 className="text-body">{props.unitPrice} </h4>
            </td>
            <td className="text-center detail-info" data-title="Stock">
                <div className="detail-extralink mr-15">
                    <div className="detail-qty border radius">
                        <a href="#" className="qty-down"><i className="fi-rs-angle-small-down"></i></a>
                        <span className="qty-val">{props.quantityLine}</span>
                        <a href="#" className="qty-up"><i className="fi-rs-angle-small-up"></i></a>
                    </div>
                </div>
            </td>
            <td className="price" data-title="Price">
                <h4 className="text-brand">{props.totalPrice} </h4>
            </td>
            <td className="action text-center" data-title="Remove"><a href="#" className="text-body"><i className="fi-rs-trash"></i></a></td>
        </tr>
    </>

TableItems.defaultProps = {
    imageContent: "../../assets/imgs/shop/product-1-1.jpg",
    productName: "Field Roast Chao Cheese Creamy Original",
    ratingLine: "(4.0)",
    unitPrice: "$2.51",
    quantityLine: "1",
    totalPrice: "$2.51"
}

const ButtonComponent = () =>
    <>
        <div className="divider-2 mb-30"></div>
        <div className="cart-action d-flex justify-content-between">
            <a className="btn "><i className="fi-rs-arrow-left mr-10"></i>Continue Shopping</a>
            <a className="btn  mr-10 mb-sm-15"><i className="fi-rs-refresh mr-10"></i>Update Cart</a>
        </div>
    </>

export { CartIems, TableItems, ButtonComponent }