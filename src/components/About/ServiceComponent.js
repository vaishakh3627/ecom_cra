import React from "react";

import { Card } from "react-bootstrap";

import  ImageType1  from "../../assets/imgs/theme/icons/icon-1.svg";

const ServiceComponent = () => (
  <>
    <h2 className="title style-3 mb-40">What We Provide?</h2>
  </>
);

const ServiceDivision = (props) => (
  <div className="col-lg-4 col-md-6 mb-24">
    <Card>
      <div className="featured-card">
        <Card.Img variant="top" src= {props.imageLine} alt="" />
        <Card.Body>
          <Card.Title><h4>{props.headingLine}</h4></Card.Title>
          <Card.Text><p>{props.contectType}</p></Card.Text>
        </Card.Body>
        <a href="#">Read more</a>
      </div>
    </Card>
  </div>
);

ServiceDivision.defaultProps = {
  imageType: ImageType1,
  headingLine: "Best Prices & Offers",
  contectType:
    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
};

export { ServiceComponent, ServiceDivision };
