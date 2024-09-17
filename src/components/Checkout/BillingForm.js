import React from "react";
import { Form } from "react-bootstrap";

import { countries } from "../../common/constants/constants";

const BillingFrom = ({ data, setData }) => {
  return (
    <>
      <div className="row">
        <div className="form-group col-lg-6">
          <input
            type="text"
            required=""
            name="fname"
            placeholder="First name *"
            value={data.fname}
            onChange={(e) =>
              setData({ fname: e.target.value })(console.log(data))
            }
          />
        </div>
        <div className="form-group col-lg-6">
          <input
            type="text"
            required=""
            name="lname"
            placeholder="Last name *"
            value={data.lname}
            onChange={(e) =>
              setData({ lname: e.target.value })(console.log(data))
            }
          />
        </div>
      </div>
      <div className="row">
        <div className="form-group col-lg-6">
          <input
            type="text"
            name="billing_address"
            required=""
            placeholder="Address *"
            value={data.billing_address}
            onChange={(e) => setData({ billing_address: e.target.value })}
          />
        </div>
        <div className="form-group col-lg-6">
          <input
            type="text"
            name="billing_address2"
            required=""
            placeholder="Address line2"
            value={data.billing_address2}
            onChange={(e) => setData({ billing_address2: e.target.value })}
          />
        </div>
      </div>
      <div className="row shipping_calculator">
        <div className="form-group col-lg-6">
          <div className="custom_select">
            <Form.Select className="form-control">
              <option value={""}>
                Select
              </option>
              {
                countries.map((item) => (
                  <option key={item.code} value={item.name}>{item.name}</option>
                ))
              }
            </Form.Select>
          </div>
        </div>
        <div className="form-group col-lg-6">
          <input
            required=""
            type="text"
            name="city"
            placeholder="City / Town *"
            value={data.city}
            onChange={(e) => setData({ city: e.target.value })}
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
            value={data.zipcode}
            onChange={(e) => setData({ zipcode: e.target.value })}
          />
        </div>
        <div className="form-group col-lg-6">
          <input
            required=""
            type="text"
            name="phone"
            placeholder="Phone *"
            value={data.phone}
            onChange={(e) => setData({ phone: e.target.value })}
          />
        </div>
      </div>
      <div className="row">
        <div className="form-group col-lg-6">
          <input
            required=""
            type="text"
            name="cname"
            placeholder="Company Name"
            value={data.cname}
            onChange={(e) => setData({ cname: e.target.value })}
          />
        </div>
        <div className="form-group col-lg-6">
          <input
            required=""
            type="text"
            name="email"
            placeholder="Email address *"
            value={data.email}
            onChange={(e) => setData({ email: e.target.value })}
          />
        </div>
      </div>
      <div className="form-group mb-30">
        <textarea
          rows="5"
          placeholder="Additional information"
          name="additional"
          value={data.additional}
          onChange={(e) =>
            setData({ additional: e.target.value })(console.log(data))
          }
        ></textarea>
      </div>
    </>
  );
};

export default BillingFrom;
