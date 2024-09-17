import React from "react";

import CompareTable from "./CompareTable";

const CompareComponent = () => {

    return (
        <div className="container mb-80 mt-50">
            <div className="row">
                <div className="col-xl-10 col-lg-12 m-auto">
                    <h1 className="heading-2 mb-10">Products Compare</h1>
                    <h6 className="text-body mb-40">There are <span className="text-brand">3</span> products to compare</h6>
                    <div className="table-responsive">
                        <table className="table text-center table-compare">
                            <CompareTable />
                        </table>
                    </div>
                </div>
            </div>
        </div>)
}
export default CompareComponent