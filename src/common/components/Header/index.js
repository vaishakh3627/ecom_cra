import React from "react";

import MobilePromotion from "../mobilePromotion";
import HeaderBottom from "./HeaderBottom";
import HeaderTop from "./HeaderTop";
import MobileMenu from "./MobileMenu";

const Header = () => <>
    <header className="header-area header-style-1 header-height-2">
        <MobilePromotion />
        <HeaderTop />
        <HeaderBottom />
    </header>
    <MobileMenu />
</>

export default Header