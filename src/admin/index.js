import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Col, Row } from "react-bootstrap";

import AdminRoutes from "./Routes";
import Navbar from "./common/Navbar";
import Sidebar from "./common/Sidebar";

import "./index.scss";

const queryClient = new QueryClient();

const AdminPages = () => {
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
};

export default AdminPages;
