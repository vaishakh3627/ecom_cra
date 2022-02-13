import React from "react";
import { Route, Routes } from "react-router-dom";

import Login from "./container/Login";
import Registration from "./container/Registration";

const ApplicationRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="registration" element={<Registration />} />
    </Routes>
  );
};

export default ApplicationRoutes;
