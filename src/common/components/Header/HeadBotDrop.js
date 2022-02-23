import { Dropdown } from "bootstrap";
import React from "react";

import { Card, Col, Container, Row } from "react-bootstrap";

const DropdownList = (props) => (
    <Col className="md-6">
      <Card>
        <a href={props.htmlLine}>
          {" "}
          <img src={props.imageLine} alt="" style={{ width: "10px" }} />
          <a className="justify-content-center">{props.nameLine}</a>
        </a>
      </Card>
    </Col>
);

export default DropdownList;
