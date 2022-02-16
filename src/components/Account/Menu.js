import React from "react";
import { useState } from "react";
import AccountDetails from "./Sub Account/AccDetails";
import Address from "./Sub Account/Address";
import DashBoard from "./Sub Account/DashBoard";
import Orders from "./Sub Account/Orders";
import TrackOrder from "./Sub Account/TrackOrder";
import { NavLink } from 'react-router-dom';



const Menu = props => {

    const [show, setShow] = useState('Dashboard')

    const Mymenu = ["Dashboard","Orders", "Track Your Order", "My Address", "Account details"]

    const [ logout, setLogout ] = useState('Logout')


    return (
        <>
            <div className="col-md-3">
                <div className="dashboard-menu">
                    <ul className="nav flex-column" role="tablist">
                            {
                                Mymenu.map(menu => (
                                    <li className="nav-item">
                                    <a className="nav-link"
                                        id="dashboard-tab" data-bs-toggle="tab" href="#dashboard"
                                        role="tab" aria-controls="dashboard" aria-selected="false"
                                        key={menu} onClick={() => setShow(menu)}>
                                        <i className="fi-rs-settings-sliders mr-10"></i>{menu}</a></li>
                                ))
                            }
                        <li className="nav-item">
                            <NavLink to="/login" className="nav-link"><i className="fi-rs-sign-out mr-10"></i>Logout</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-md-9">
                <div className="tab-content account dashboard-content pl-50">
                    {show === "Dashboard" && (<DashBoard />)}
                    {show === "Orders" && (<Orders />)}
                    {show === "Track Your Order" && (<TrackOrder />)}
                    {show === "My Address" && (<Address />)}
                    {show === "Account details" && (<AccountDetails />)}
                </div>
            </div>

        </>
    )
}

export default Menu;