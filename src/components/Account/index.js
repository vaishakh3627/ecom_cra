import React from "react";
import BreadCrumb from "../../common/breadcrumb";
import AccountComponent from "./AccountComponent";

const Account = () =>
    <main className="main pages">
        <BreadCrumb pages={['Pages', 'Account']}/>
        <AccountComponent />
    </main>

export default Account;