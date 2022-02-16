import React from "react";

const AddressItem = props =>
    <div className="col-md-4 mb-4 mb-md-0">
        <h4 className="mb-15 text-brand">{props.addressType}</h4>
        {props.addressLineOne}<br />
        {props.addressLineTwo}<br />
        <abbr title="Phone">Phone:</abbr> {props.phone}<br />
        <abbr title="Email">Email: </abbr>{props.email}<br />
        <a
         className="btn btn-sm font-weight-bold text-white mt-20 border-radius-5 btn-shadow-brand hover-up" 
         href={props.mapLink}
         target="_blank">
            <i className="fi-rs-marker mr-5"></i>View map</a>
    </div>

AddressItem.defaultProps = {
    addressType: "Office",
    addressLineOne: "205 North Michigan Avenue, Suite 810",
    addressLineTwo: "Chicago, 60601, USA",
    phone: "(123) 456-7890",
    email: "contact@Evara.com",
    mapLink: "http://google.com"
}
export default AddressItem