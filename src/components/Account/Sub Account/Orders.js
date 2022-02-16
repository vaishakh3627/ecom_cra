import React from "react";

import { OrderName, OrderTable, OrderedItems } from "./OrderDetails";

// active show extra added to display
const Item = [
    {
        OrderId: "#1357",
        DateLine: "March 45, 2020",
        StatusLine: "Processing",
        PriceLine: "$125.00 for 2 item"
    },
    {
        OrderId: "#2468",
        DateLine: "June 29, 2020",
        StatusLine: "Completed",
        PriceLine: "$364.00 for 5 item"
    },
    {
        OrderId: "#2366",
        DateLine: "August 02, 2020",
        StatusLine: "Completed",
        PriceLine: "$280.00 for 3 item"
    }
]


const Orders = () => {
    return (
        < div className="tab-pane fade active show" id="orders" role="tabpanel" aria-labelledby="orders-tab">
            <div className="card">
                <OrderName />
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table">
                            <OrderTable />
                            {
                                Item.map(item => <OrderedItems key={item.OrderId} {...item} />)
                            }
                        </table>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Orders;