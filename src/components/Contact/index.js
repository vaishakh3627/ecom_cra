import React from "react";

import BreadCrumb from "../../common/breadcrumb";
import ContactComponent from "./ContactComponent";

const Contact = () =>
    <main className="main pages">
        <BreadCrumb pages={['Pages', 'Contact']}/>
        <ContactComponent />
    </main>



export default Contact