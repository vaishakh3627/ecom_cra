import React from "react";

const CheckoutLoginBody = () =>
    <>
        <p className="mb-30 font-sm">If you have shopped with us before, please enter your details below. If you are a new customer, please proceed to the Billing &amp; Shipping section.</p>
        <form method="post">
            <div className="form-group">
                <input type="text" name="email" placeholder="Username Or Email" />
            </div>
            <div className="form-group">
                <input type="password" name="password" placeholder="Password" />
            </div>
            <div className="login_footer form-group">
                <div className="chek-form">
                    <div className="custome-checkbox">
                        <input className="form-check-input" type="checkbox" name="checkbox" id="remember" value="" />
                        <label className="form-check-label" htmlFor="remember"><span>Remember me</span></label>
                    </div>
                </div>
                <a href="#">Forgot password?</a>
            </div>
            <div className="form-group">
                <button className="btn btn-md" name="login">Log in</button>
            </div>
        </form>
    </>

export default CheckoutLoginBody