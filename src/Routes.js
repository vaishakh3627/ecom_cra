import React from "react";
import { Route, Routes } from "react-router-dom";

import RequireAuth from "./RequireAuth";
import Signin from "./container/Signin";
import Signup from "./container/Signup";
import PageNotFound from "./container/404";
import Home from "./container/Home";
import About from "./container/About";
import Cart from "./container/Cart";
import Account from "./container/Account";
import Checkout from "./container/Checkout";
import Compare from "./container/Compare";
import Contact from "./container/Contact";
import Wishlist from "./container/Wishlist";

const ApplicationRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="signin" element={<Signin />} />
      <Route path="signup" element={<Signup />} />
      <Route path="about" element={<About />} />
      <Route path="cart" element={<Cart />} />
      <Route
        path="account"
        element={
          <RequireAuth>
            <Account />
          </RequireAuth>
        }
      />
      <Route path="checkout" element={<Checkout />} />
      <Route path="compare" element={<Compare />} />
      <Route path="contact" element={<Contact />} />
      <Route path="wishlist" element={<Wishlist />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default ApplicationRoutes;
