import React from "react";
import { Route, Routes } from "react-router-dom";

import PageNotFound from "../container/404";
import Home from "./container/Home";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="admin/" element={<Home />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AdminRoutes;
