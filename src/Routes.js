import React from "react";
import { Route, Routes } from "react-router-dom";

import Login from "./container/Login";
import Registration from "./container/Registration";
import PageNotFound from "./container/404";
import Home from "./container/Home";
import About from "./container/About";
import Cart from "./container/Cart";
import Account from "./container/Account";
import Checkout from "./container/Chechout";
import Compare from "./container/Compare";
import Contact from "./container/Contact";
import Wishlist from "./container/Wishlist";

const ApplicationRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="registration" element={<Registration />} />
      <Route path="about" element={<About />} />
      <Route path="cart" element={<Cart />} />
      <Route path="account" element={<Account />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="compare" element={<Compare />} />
      <Route path="contact" element={<Contact />} />
      <Route path="wishlist" element={<Wishlist />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default ApplicationRoutes;