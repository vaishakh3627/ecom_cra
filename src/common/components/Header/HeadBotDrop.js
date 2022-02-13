import React from "react";

import { Col } from 'react-bootstrap';

const DropdownList = props => 
  <Col span={6}>
    <a href={props.htmlLine}>
      {" "}
      <img src={props.imageLine} alt="" />
      {props.nameLine}
    </a>
  </Col>

export default DropdownList
