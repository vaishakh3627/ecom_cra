import React from "react";

import BreadCrumb from "../../common/breadcrumb";
import AboutComponent from "./AboutComponent";

const About = () =>
    <main className="main pages">
        <BreadCrumb pages={['Pages', 'About']} />
        <AboutComponent />
    </main>

export default About