import React from "react";

const OrderName = () =>
    <div className="card-header">
        <h3 className="mb-0">Your Orders</h3>
    </div>

const OrderTable = () =>
    <thead>
        <tr>
            <th>Order</th>
            <th>Date</th>
            <th>Status</th>
            <th>Total</th>
            <th>Actions</th>
        </tr>
    </thead>

const OrderedItems = props =>
    <tbody>
        <tr>
            <td>{props.OrderId}</td>
            <td>{props.DateLine}</td>
            <td>{props.StatusLine}</td>
            <td>{props.PriceLine}</td>
            <td><a href="#" className="btn-small d-block">View</a></td>
        </tr>
    </tbody>

OrderedItems.defaultProps = {
    OrderId: "#1357",
    DateLine: "March 45, 2020",
    StatusLine: "Processing",
    PriceLine: "$125.00 for 2 item"
}

export { OrderName, OrderTable, OrderedItems };