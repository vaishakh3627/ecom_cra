import React from "react";
import { Route, Routes } from "react-router-dom";

import PageNotFound from "../container/404";
import Categories from "./container/Categories";
import Orders from "./container/Orders";
import Products from "./container/Products";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Categories />} />
      <Route path="/products" element={<Products />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AdminRoutes;
