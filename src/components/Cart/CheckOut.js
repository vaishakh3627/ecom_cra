import React from "react";


const CheckOut = () =>
    <div className="col-lg-4">
        <div className="border p-md-4 cart-totals ml-30">
            <div className="table-responsive">
                <table className="table no-border">
                    <tbody>
                        <tr>
                            <td className="cart_total_label">
                                <h6 className="text-muted">Subtotal</h6>
                            </td>
                            <td className="cart_total_amount">
                                <h4 className="text-brand text-end">$12.31</h4>
                            </td>
                        </tr>
                        <tr>
                            <td scope="col" colSpan="2">
                                <div className="divider-2 mt-10 mb-10"></div>
                            </td>
                        </tr>
                        <tr>
                            <td className="cart_total_label">
                                <h6 className="text-muted">Shipping</h6>
                            </td>
                            <td className="cart_total_amount">
                                <h5 className="text-heading text-end">Free</h5></td></tr><tr>
                            <td className="cart_total_label">
                                <h6 className="text-muted">Estimate for</h6>
                            </td>
                            <td className="cart_total_amount">
                                <h5 className="text-heading text-end">United Kingdom</h5></td></tr><tr>
                            <td scope="col" colSpan="2">
                                <div className="divider-2 mt-10 mb-10"></div>
                            </td>
                        </tr>
                        <tr>
                            <td className="cart_total_label">
                                <h6 className="text-muted">Total</h6>
                            </td>
                            <td className="cart_total_amount">
                                <h4 className="text-brand text-end">$12.31</h4>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <a href="#" className="btn mb-20 w-100">Proceed To CheckOut<i className="fi-rs-sign-out ml-15"></i></a>
        </div>
    </div>

export default CheckOut;