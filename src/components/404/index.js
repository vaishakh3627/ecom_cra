import React from "react";
import { NavLink } from "react-router-dom";

import PageNotFound from '../../assets/imgs/page/page-404.png';

const PageNotFoundComponent = () =>
    <main className="main page-404">
        <div className="page-content pt-150 pb-150">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-10 col-md-12 m-auto text-center">
                        <p className="mb-20"><img src={PageNotFound} alt="" className="hover-up" /></p>
                        <h1 className="display-2 mb-30">Page Not Found</h1>
                        <p className="font-lg text-grey-700 mb-30">
                            The link you clicked may be broken or the page may have been removed.<br />
                            visit the <NavLink to="/"> <span> Homepage</span></NavLink> or <NavLink
                                to="/contact"><span>Contact us</span></NavLink> about the problem
                        </p>
                        <div className="search-form">
                            <form action="#">
                                <input type="text" placeholder="Search…" />
                                <button type="submit"><i className="fi-rs-search"></i></button>
                            </form>
                        </div>
                        <a className="btn btn-default submit-auto-width font-xs hover-up mt-30" href="index.html"><i
                            className="fi-rs-home mr-5"></i> Back To Home Page</a>
                    </div>
                </div>
            </div>
        </div>
    </main>

export default PageNotFoundComponent