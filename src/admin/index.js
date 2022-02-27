import React from "react";

import AdminRoutes from "./Routes";
import Navbar from "./common/Navbar";
import Sidebar from "./common/Sidebar";

import "./index.scss";
import { Col, Row } from "react-bootstrap";

const AdminPages = () => {
  return (
    <div className="admin-content-wrapper">
      <Navbar />
      <Row className="admin-contents">
        <Col sm={3}>
          <Sidebar />
        </Col>
        <Col sm={9}>
          <AdminRoutes />
        </Col>
      </Row>
    </div>
  );
};

export default AdminPages;
