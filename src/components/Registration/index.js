import React, { useState } from "react";

import RegistrationComponent from "./RegistrationComponent";

import { EMAIL, OTP } from "./constants";

const Registration = () => {

    const [userData, setUserData] = useState({
        email: ''
    })
    const [form, setForm] = useState(EMAIL)

    return (
        <main className="main pages">
            <RegistrationComponent form={form} setForm={setForm} userData={userData} setUserData={setUserData} />
        </main>
    );
}

export default Registration