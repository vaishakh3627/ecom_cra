import React from "react";

import Menu from "./Menu";

const SubComponent = () => {
    return (
        <div className="page-content pt-150 pb-150">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 m-auto">
                        <div className="row">
                            <Menu />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubComponent;