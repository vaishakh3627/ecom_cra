import React from "react";

import {
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
  ProductWeight,
} from "./CompareElements";

import ProductImage1 from "../../assets/imgs/shop/product-2-1.jpg";
import ProductImage2 from "../../assets/imgs/shop/product-1-1.jpg";
import ProductImage3 from "../../assets/imgs/shop/product-3-1.jpg";

const Table = [
  {
    imageLine: ProductImage1,
    nameLine: "J.Crew Mercantile Women's Short",
    priceLine: "$12.00",
    ratingLine: "(121)",
    descriptionLine:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
    stockLine: "In Stock",
    weightLine: "320 gram",
    dimensionLine: "N/A",
    buynowLine: "Add to cart",
    deleteLine: "Remove",
  },
  {
    imageLine: ProductImage2,
    nameLine: "Amazon Essentials Women's Tanks",
    priceLine: "$14.00",
    ratingLine: "(35)",
    descriptionLine:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
    stockLine: "Out of stock",
    weightLine: "370 gram",
    dimensionLine: "N/A",
    buynowLine: "Contact Us",
    deleteLine: "Remove",
  },
  {
    imageLine: ProductImage3,
    nameLine: "Amazon Brand - Daily Ritual Wom",
    priceLine: "$15.00",
    ratingLine: "(125)",
    descriptionLine:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
    stockLine: "In Stock",
    weightLine: "380 gram",
    dimensionLine: "N/A",
    buynowLine: "Add to cart",
    deleteLine: "Remove",
  },
];

const CompareTable = () => (
  <tbody>
    <tr className="pr_image">
      <td className="text-muted font-sm fw-600 font-heading mw-200">Preview</td>
      {Table.map((item) => (
        <ProductImage {...item} />
      ))}
    </tr>
    <tr className="pr_title">
      <td className="text-muted font-sm fw-600 font-heading">Name</td>
      {Table.map((item) => (
        <ProductName {...item} />
      ))}
    </tr>
    <tr className="pr_price">
      <td className="text-muted font-sm fw-600 font-heading">Price</td>
      {Table.map((item) => (
        <ProductPrice {...item} />
      ))}
    </tr>
    <tr className="pr_rating">
      <td className="text-muted font-sm fw-600 font-heading">Rating</td>
      {Table.map((item) => (
        <ProductRating {...item} />
      ))}
    </tr>
    <tr className="description">
      <td className="text-muted font-sm fw-600 font-heading">Description</td>
      {Table.map((item) => (
        <ProductDescription {...item} />
      ))}
    </tr>
    <tr className="pr_stock">
      <td className="text-muted font-sm fw-600 font-heading">Stock status</td>
      {Table.map((item) => {
        if (item.stockLine === "In Stock") {
          return <ProductInStock {...item} />;
        }
        return <ProductOutofStock {...item} />;
      })}
    </tr>
    <tr className="pr_weight">
      <td className="text-muted font-sm fw-600 font-heading">Weight</td>
      {Table.map((item) => (
        <ProductWeight {...item} />
      ))}
    </tr>
    <tr className="pr_dimensions">
      <td className="text-muted font-sm fw-600 font-heading">Dimensions</td>
      {Table.map((item) => (
        <ProductDimension {...item} />
      ))}
    </tr>
    <tr className="pr_add_to_cart">
      <td className="text-muted font-sm fw-600 font-heading">Buy now</td>
      {Table.map((item) => {
        if (item.stockLine === "In Stock") {
          return <ProductAddtoCart {...item} />;
        }
        return <ProductContactus {...item} />;
      })}
    </tr>
    <tr className="pr_remove text-muted">
      <td className="text-muted font-md fw-600"></td>
      {Table.map((item) => (
        <ProductDelete {...item} />
      ))}
    </tr>
  </tbody>
);

export default CompareTable;