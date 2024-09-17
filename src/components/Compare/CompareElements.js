import React from "react";

const ProductImage = (props) => (
  <td className="row_img">
    <img src={props.imageLine} alt="compare-img" />
  </td>
);

const ProductName = (props) => (
  <td className="product_name">
    <h6>
      <a href="shop-product-full.html" className="text-heading">
        {props.nameLine}
      </a>
    </h6>
  </td>
);

const ProductPrice = (props) => (
  <td className="product_price">
    <h4 className="price text-brand">{props.priceLine}</h4>
  </td>
);

const ProductRating = (props) => (
  <td>
    <div className="rating_wrap">
      <div className="product-rate d-inline-block">
        <div className="product-rating" style={{ width: "90" }}></div>
      </div>
      <span className="rating_num">{props.ratingLine}</span>
    </div>
  </td>
);

const ProductDescription = (props) => (
  <td className="row_text font-xs">
    <p className="font-sm text-muted">{props.descriptionLine}</p>
  </td>
);

const ProductInStock = (props) => (
  <td className="row_stock">
    <span className="stock-status in-stock mb-0">{props.stockLine}</span>
  </td>
);

const ProductOutofStock = (props) => (
  <td className="row_stock">
    <span className="stock-status out-stock mb-0">{props.stockLine}</span>
  </td>
);

const ProductWeight = (props) => (
  <td className="row_weight">{props.weightLine}</td>
);

const ProductDimension = (props) => (
  <td className="row_dimensions">{props.dimensionLine}</td>
);

const ProductAddtoCart = (props) => (
  <td className="row_btn">
    <button className="btn btn-sm">
      <i className="fi-rs-shopping-bag mr-5"></i>Add to cart
    </button>
  </td>
);

const ProductContactus = (props) => (
  <td className="row_btn">
    <button className="btn btn-sm btn-secondary">
      <i className="fi-rs-headset mr-5"></i>Contact Us
    </button>
  </td>
);

const ProductDelete = (props) => (
  <td className="row_remove">
    <a href="#" className="text-muted">
      <i className="fi-rs-trash mr-5"></i>
      <span>{props.deleteLine}</span>
    </a>
  </td>
);

export {
  ProductImage,
  ProductName,
  ProductPrice,
  ProductRating,
  ProductAddtoCart,
  ProductContactus,
  ProductDelete,
  ProductDescription,
  ProductDimension,
  ProductInStock,
  ProductOutofStock,
  ProductWeight
};
