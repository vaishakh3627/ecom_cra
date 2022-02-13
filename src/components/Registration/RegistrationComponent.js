import React from "react";

import SocialSignup from "./SocialSignup";
import RegistrationForm from "./RegistrationForm";

const RegistrationComponent = props =>
    <div className="page-content pt-150 pb-150">
        <div className="container">
            <div className="row">
                <div className="col-xl-8 col-lg-10 col-md-12 m-auto">
                    <div className="row">
                        <RegistrationForm {...props} />
                        <SocialSignup />
                    </div>
                </div>
            </div>
        </div>
    </div>

export default RegistrationComponent