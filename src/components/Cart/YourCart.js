import React from "react";


const Yourcart = () =>
    <div className="row">
        <div className="col-lg-8 mb-40">
            <h1 className="heading-2 mb-10">Your Cart</h1>
            <div className="d-flex justify-content-between">
                <h6 className="text-body">There are <span className="text-brand">3</span> products in your cart</h6>
                <h6 className="text-body"><a href="#" className="text-muted"><i className="fi-rs-trash mr-5"></i>Clear Cart</a></h6>
            </div>
        </div>
    </div>

export default Yourcart;