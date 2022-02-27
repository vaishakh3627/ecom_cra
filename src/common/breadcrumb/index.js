import React from "react";
import { NavLink } from "react-router-dom";

const BreadCrumb = ({ pages }) => {

    return (
        <div className="page-header breadcrumb-wrap">
            <div className="container">
                <div className="breadcrumb">
                    <NavLink to="/" rel="nofollow"><i className="fi-rs-home mr-5"></i>Home</NavLink>
                    {
                        pages.map(item => <React.Fragment key={item}><span></span>{item}</React.Fragment>)
                    }
                </div>
            </div>
        </div>
    );
}

BreadCrumb.defaultProps = {
    pages: ["Pages"]
}

export default BreadCrumb