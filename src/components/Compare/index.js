import React from "react";

import BreadCrumb from "../../common/breadcrumb";
import CompareComponent from "./CompareComponent";

const Compare = () =>
    <main className="main pages">
        <BreadCrumb pages={[ 'Pages', 'Compare']}/>
        <CompareComponent />
    </main>
    
export default Compare