import React from "react";

const Layout = ({ children }) =>
    <main className="main pages">
        <div className="page-content pt-150 pb-150">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-10 col-md-12 m-auto">
                        <div className="row">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>

export default Layout