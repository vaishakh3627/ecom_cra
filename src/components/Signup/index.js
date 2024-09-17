import React from "react";

import Layout from "./Layout";
import SignupForm from "./SignupForm";
import SocialSignup from "./SocialSignup";

const Signup = () => {

    return (
        <Layout>
            <SignupForm />
            <SocialSignup />
        </Layout>
    );
}

export default Signup