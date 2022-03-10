import React from "react";

import MobilePromotion from "../MobilePromotion";
import HeaderBottom from "./HeaderBottom";
import Navbar from "./Navbar";
import MobileMenu from "./MobileMenu";

const Header = () => <>
    <header className="header-area header-style-1 header-height-2">
        <MobilePromotion />
        <Navbar />
        <HeaderBottom />
    </header>
    <MobileMenu />
</>

export default Header