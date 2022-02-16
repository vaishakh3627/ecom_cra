import React from "react";


const PromoCode = () =>
        <div className="p-40">
            <h4 className="mb-10">Apply Coupon</h4>
            <p className="mb-30"><span className="font-lg text-muted" />Using A Promo Code?</p>
            <form action="#" >
                <div className="d-flex justify-content-between">
                    <input className="font-medium mr-15 coupon" name="Coupon" placeholder="Enter Your Coupon" />
                    <button className="btn"><i className="fi-rs-label mr-10"></i>Apply</button>
                </div>
            </form>
        </div>
    
export default PromoCode;