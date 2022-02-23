import { React, useState } from "react";

import BillingFrom from "./BillingForm";
import ShipToDifferentAddress from "./ShipToDifferentAddress";
import { CheckoutHead, CheckoutLogin } from "./CheckoutHead";
import { YourOrder, YourOrderHead } from "./YourOrder";
import Payment from "./Payment";

import ProductImage1 from "../../assets/imgs/shop/product-1-1.jpg";
import ProductImage2 from "../../assets/imgs/shop/product-2-1.jpg";
import ProductImage3 from "../../assets/imgs/shop/product-3-1.jpg";

const CheckoutComponent = () => {
  const orders = [
    {
      productImage: ProductImage1,
      productName: "Yidarton Women Summer Blue",
      productRating: "(4.0)",
      productQuantity: "x 1",
      productPrice: "$13.3",
    },
    {
      productImage: ProductImage2,
      productName: "Seeds of Change Organic Quinoa",
      productRating: "(4.0)",
      productQuantity: "x 1",
      productPrice: "$15.0",
    },
    {
      productImage: ProductImage3,
      productName: "Angie’s Boomchickapop Sweet",
      productRating: "(4.0)",
      productQuantity: "x 1",
      productPrice: "$17.2",
    },
  ];

  const [billingData, setBillingData] = useState({
    fname: "",
    lname: "",
    billing_address: "",
    billing_address2: "",
    country: "",
    city: "",
    zipcode: "",
    phone: "",
    cname: "",
    email: "",
    additional: "",
  });

  const updateBillingData = (data) =>
    setBillingData((previousState) => ({
      ...previousState,
      ...data,
    }));

  return (
    <>
      <div className="container mb-80 mt-50">
        <CheckoutHead />
        <div className="row">
          <div className="col-lg-7">
            <div className="row mb-50">
              <div className="col-lg-6 mb-sm-15 mb-lg-0 mb-md-3">
                <CheckoutLogin />
              </div>
              <div className="col-lg-6">
                <form method="post" className="apply-coupon">
                  <input type="text" placeholder="Enter Coupon Code..." />
                  <button className="btn  btn-md" name="login">
                    Apply Coupon
                  </button>
                </form>
              </div>
            </div>
            <div className="row">
              <h4 className="mb-30">Billing Details</h4>
              <form method="post">
                <BillingFrom  data={billingData} setData={updateBillingData}/>
                <div className="form-group">
                  <div className="checkbox">
                    <div className="custome-checkbox">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="checkbox"
                        id="createaccount"
                      />
                      <label
                        className="form-check-label label_info"
                        data-bs-toggle="collapse"
                        href="#collapsePassword"
                        data-target="#collapsePassword"
                        aria-controls="collapsePassword"
                        htmlFor="createaccount"
                      >
                        <span>Create an account?</span>
                      </label>
                    </div>
                  </div>
                </div>
                <div
                  id="collapsePassword"
                  className="form-group create-account collapse in"
                >
                  <CreateAnAccount />
                </div>
                <div className="ship_detail">
                  <div className="form-group">
                    <div className="chek-form">
                      <div className="custome-checkbox">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="checkbox"
                          id="differentaddress"
                        />
                        <label
                          className="form-check-label label_info"
                          data-bs-toggle="collapse"
                          data-target="#collapseAddress"
                          href="#collapseAddress"
                          aria-controls="collapseAddress"
                          htmlFor="differentaddress"
                        >
                          <span>Ship to a different address?</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div
                    id="collapseAddress"
                    className="different_address collapse in"
                  >
                    <ShipToDifferentAddress />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="border p-40 cart-totals ml-30 mb-50">
              <YourOrderHead />
              {orders.map((item) => (
                <YourOrder key={item.productName} {...item} />
              ))}
            </div>
            <Payment />
          </div>
        </div>
      </div>
    </>
  );
};

const CreateAnAccount = () => (
  <div className="row">
    <div className="col-lg-6">
      <input
        required=""
        type="password"
        placeholder="Password"
        name="password"
      />
    </div>
  </div>
);

export default CheckoutComponent;
