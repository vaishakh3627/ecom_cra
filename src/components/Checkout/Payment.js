import React from "react";

import Paypal from "../../assets/imgs/theme/icons/payment-paypal.svg";
import Visa from "../../assets/imgs/theme/icons/payment-visa.svg";
import Master from "../../assets/imgs/theme/icons/payment-master.svg";
import Zapper from "../../assets/imgs/theme/icons/payment-zapper.svg";

const Payment = () => {
  return (
    <div className="payment ml-30">
      <h4 className="mb-30">Payment</h4>
      <div className="payment_option">
        <div className="custome-radio">
          <input
            className="form-check-input"
            required=""
            type="radio"
            name="payment_option"
            id="exampleRadios3"
            checked=""
          />
          <label
            className="form-check-label"
            htmlFor="exampleRadios3"
            data-bs-toggle="collapse"
            data-target="#bankTranfer"
            aria-controls="bankTranfer"
          >
            Direct Bank Transfer
          </label>
        </div>
        <div className="custome-radio">
          <input
            className="form-check-input"
            required=""
            type="radio"
            name="payment_option"
            id="exampleRadios4"
            checked=""
          />
          <label
            className="form-check-label"
            htmlFor="exampleRadios4"
            data-bs-toggle="collapse"
            data-target="#checkPayment"
            aria-controls="checkPayment"
          >
            Cash on delivery
          </label>
        </div>
        <div className="custome-radio">
          <input
            className="form-check-input"
            required=""
            type="radio"
            name="payment_option"
            id="exampleRadios5"
            checked=""
          />
          <label
            className="form-check-label"
            htmlFor="exampleRadios5"
            data-bs-toggle="collapse"
            data-target="#paypal"
            aria-controls="paypal"
          >
            Online Getway
          </label>
        </div>
      </div>
      <div className="payment-logo d-flex">
        <img className="mr-15" src={Paypal} alt="" />
        <img className="mr-15" src={Visa} alt="" />
        <img className="mr-15" src={Master} alt="" />
        <img src={Zapper} alt="" />
      </div>
      <a href="#" className="btn btn-fill-out btn-block mt-30">
        Place an Order<i className="fi-rs-sign-out ml-15"></i>
      </a>
    </div>
  );
};
export default Payment;