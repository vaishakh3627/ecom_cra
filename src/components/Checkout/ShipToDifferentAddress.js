import React from "react";

import { countries } from "../../common/constants/constants";

const ShipToDifferentAddress = () => {
  return (
    <>
      <div className="row">
        <div className="form-group col-lg-6">
          <input
            type="text"
            required=""
            name="fname"
            placeholder="First name *"
          />
        </div>
        <div className="form-group col-lg-6">
          <input
            type="text"
            required=""
            name="lname"
            placeholder="Last name *"
          />
        </div>
      </div>
      <div className="row shipping_calculator">
        <div className="form-group col-lg-6">
          <input
            required=""
            type="text"
            name="cname"
            placeholder="Company Name"
          />
        </div>
        <div className="form-group col-lg-6">
          <div className="custom_select w-100">
            <select className="form-control select-active">
              {countries.map((item) => (
                <Country key={item.name} {...item} />
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="form-group col-lg-6">
          <input
            type="text"
            name="billing_address"
            required=""
            placeholder="Address *"
          />
        </div>
        <div className="form-group col-lg-6">
          <input
            type="text"
            name="billing_address2"
            required=""
            placeholder="Address line2"
          />
        </div>
      </div>
      <div className="row">
        <div className="form-group col-lg-6">
          <input
            required=""
            type="text"
            name="state"
            placeholder="State / County *"
          />
        </div>
        <div className="form-group col-lg-6">
          <input
            required=""
            type="text"
            name="city"
            placeholder="City / Town *"
          />
        </div>
      </div>
      <div className="row">
        <div className="form-group col-lg-6">
          <input
            required=""
            type="text"
            name="zipcode"
            placeholder="Postcode / ZIP *"
          />
        </div>
      </div>
    </>
  );
};
const Country = (countries) => (
    <>
      <option value="">{countries.name}</option>
    </>
  );

export default ShipToDifferentAddress;