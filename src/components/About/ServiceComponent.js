import React from "react";

import ImageType1 from "../../assets/imgs/theme/icons/icon-1.svg";

const ServiceComponent = () =>
    <>
        <h2 className="title style-3 mb-40">What We Provide?</h2>
    </>

const ServiceDivision = props =>
    <div className="col-lg-4 col-md-6 mb-24">
        <div className="featured-card">
            <img src={props.imageType} alt="" />
            <h4>{props.headingLine}</h4>
            <p>{props.contectType}</p>
            <a href="#">Read more</a>
        </div>
    </div>


ServiceDivision.defaultProps = {
    imageType: {ImageType1},
    headingLine: "Best Prices & Offers",
    contectType: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
}


export { ServiceComponent, ServiceDivision }