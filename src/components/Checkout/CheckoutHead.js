import React from "react";
import { useState } from "react";
import CheckoutLoginBody from "./CheckoutLoginBody";

const CheckoutHead = () => (
  <div className="row">
    <div className="col-lg-8 mb-40">
      <h1 className="heading-2 mb-10">Checkout</h1>
      <div className="d-flex justify-content-between">
        <h6 className="text-body">
          There are <span className="text-brand">3</span> products in your cart
        </h6>
      </div>
    </div>
  </div>
);

const CheckoutLogin = () => {

  const [show, setShow] = useState(false);

  const handlePreview = (e) => {
    setShow(true);
  };

  return (
    <>
      <div className="toggle_info">
        <span>
          <i className="fi-rs-user mr-10"></i>
          <span className="text-muted font-lg">
            Already have an account?
          </span>{" "}
          <a
            className="collapsed font-lg"
            aria-expanded="false"
            onClick={handlePreview}
          >
            Click here to login
          </a>
        </span>
      </div>
      <div className="panel-collapse collapse login_form" id="loginform">
        <div className="panel-body">{show && <CheckoutLoginBody />}</div>
      </div>
    </>
  );
};

export { CheckoutHead, CheckoutLogin };
