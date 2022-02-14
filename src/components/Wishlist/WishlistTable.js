import React from "react";

const WishlistTable = () =>

    <thead>
        <tr className="main-heading">
            <th className="custome-checkbox start pl-30">
                <input className="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox11" value="" />
                <label className="form-check-label" htmlFor="exampleCheckbox11"></label>
            </th>
            <th scope="col" colSpan="2">Product</th>
            <th scope="col">Price</th>
            <th scope="col">Stock Status</th>
            <th scope="col">Action</th>
            <th scope="col" className="end">Remove</th>
        </tr>
    </thead>

const WishlistInStock = props =>

    <tr className="pt-30">
        <td className="custome-checkbox pl-30">
            <input className="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox1" value="" />
            <label className="form-check-label" htmlFor="exampleCheckbox1"></label>
        </td>
        <td className="image product-thumbnail pt-40"><img src={props.productImage} alt="#" /></td>
        <td className="product-des product-name">
            <h6><a className="product-name mb-10" href="shop-product-right.html">{props.productName}</a></h6>
            <div className="product-rate-cover">
                <div className="product-rate d-inline-block">
                    <div className="product-rating" style={{ width: "90%" }}></div>
                </div>
                <span className="font-small ml-5 text-muted"> (4.0)</span>
            </div>
        </td>
        <td className="price" data-title="Price">
            <h3 className="text-brand">{props.productPrice}</h3>
        </td>
        <td className="text-center detail-info" data-title="Stock">
            <span className="stock-status in-stock mb-0"> {props.productStock} </span>
        </td>
        <td className="text-right" data-title="Cart">
            <button className="btn btn-sm">{props.productAction}</button>
        </td>
        <td className="action text-center" data-title="Remove">
            <a href="#" className="text-body"><i className="fi-rs-trash"></i></a>
        </td>
    </tr>
    

const WishListOutStock = props =>

    <tr>
        <td className="custome-checkbox pl-30">
            <input className="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox4" value="" />
            <label className="form-check-label" htmlFor="exampleCheckbox4"></label>
        </td>
        <td className="image product-thumbnail"><img src={props.productImage} alt="#" /></td>
        <td className="product-des product-name">
            <h6><a className="product-name mb-10" href="shop-product-right.html">{props.productName} </a></h6>
            <div className="product-rate-cover">
                <div className="product-rate d-inline-block">
                    <div className="product-rating" style={{ width: "90%" }}></div>
                </div>
                <span className="font-small ml-5 text-muted"> (4.0)</span>
            </div>
        </td>
        <td className="price" data-title="Price">
            <h3 className="text-brand">{props.productPrice}</h3>
        </td>
        <td className="text-center detail-info" data-title="Stock">
            <span className="stock-status out-stock mb-0"> {props.productStock} </span>
        </td>
        <td className="text-right" data-title="Cart">
            <button className="btn btn-sm btn-secondary">{props.productAction}</button>
        </td>
        <td className="action text-center" data-title="Remove">
            <a href="#" className="text-body"><i className="fi-rs-trash"></i></a>
        </td>
    </tr>

export { WishlistTable, WishlistInStock, WishListOutStock }