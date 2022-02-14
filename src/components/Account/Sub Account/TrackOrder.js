import React from "react";

// active show extra added to display
const TrackOrder = () =>
    <div className="tab-pane fade active show" id="track-orders" role="tabpanel" aria-labelledby="track-orders-tab">
        <div className="card">
            <div className="card-header">
                <h3 className="mb-0">Orders tracking</h3>
            </div>
            <div className="card-body contact-from-area">
                <p>To track your order please enter your OrderID in the box below and press "Track" button. This was given to you on your receipt and in the confirmation email you should have received.</p>
                <div className="row">
                    <div className="col-lg-8">
                        <form className="contact-form-style mt-30 mb-50" action="#" method="post">
                            <div className="input-style mb-20">
                                <label>Order ID</label>
                                <input name="order-id" placeholder="Found in your order confirmation email" type="text" />
                            </div>
                            <div className="input-style mb-20">
                                <label>Billing email</label>
                                <input name="billing-email" placeholder="Email you used during checkout" type="email" />
                            </div>
                            <button className="submit submit-auto-width" type="submit">Track</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
export default TrackOrder