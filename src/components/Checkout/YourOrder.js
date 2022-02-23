import React from "react";

const YourOrder = (props) => {
  return (
    <>
      <div className="divider-2 mb-30"></div>
      <div className="table-responsive order_table checkout">
        <table className="table no-border">
          <tbody>
            <tr>
              <td className="image product-thumbnail">
                <img src={props.productImage} alt="#" />
              </td>
              <td>
                <h6 className="w-160 mb-5">
                  <a href="shop-product-full.html" className="text-heading">
                    {props.productName}
                  </a>
                </h6>
                <div className="product-rate-cover">
                  <div className="product-rate d-inline-block">
                    <div
                      className="product-rating"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                  <span className="font-small ml-5 text-muted">
                    {" "}
                    {props.productRating}
                  </span>
                </div>
              </td>
              <td>
                <h6 className="text-muted pl-20 pr-20">
                  {props.productQuantity}
                </h6>
              </td>
              <td>
                <h4 className="text-brand">{props.productPrice}</h4>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

const YourOrderHead = () => (
  <div className="d-flex align-items-end justify-content-between mb-30">
    <h4>Your Order</h4>
    <h6 className="text-muted">Subtotal</h6>
  </div>
);

export { YourOrder, YourOrderHead };
