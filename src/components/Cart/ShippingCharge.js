import React from "react";
import { countries } from "../../common/constants/constants";

const ShippingCharge = () =>
    <div className="calculate-shiping p-40 border-radius-15 border">
        <h4 className="mb-10">Calculate Shipping</h4>
        <p className="mb-30"><span className="font-lg text-muted">Flat rate:</span><strong className="text-brand">5%</strong></p>
        <form className="field_form shipping_calculator">
            <div className="form-row">
                <div className="form-group col-lg-12">
                    <div className="custom_select">
                        <select className="form-control select-active w-100">
                            {
                                countries.map(item => <Country key={item.name} {...item} />)
                            }
                        </select>
                    </div>
                </div>
            </div>
            <div className="form-row row">
                <div className="form-group col-lg-6">
                    <input required="required" placeholder="State / Country" name="name" type="text" />
                </div>
                <div className="form-group col-lg-6">
                    <input required="required" placeholder="PostCode / ZIP" name="name" type="text" />
                </div>
            </div>
        </form>
    </div>

const Country = (props) =>
    <>
    {
        console.log(props)
    }
        <option value="">{countries.name}</option>
    </>

export default ShippingCharge;