import React from "react";

class Orders extends React.Component {


render(){
    return(
        <div className="orders">
            <li>Order number: {this.props.orderNumber} Product: {this.props.orderProduct} Quantity: {this.props.orderQuantity} </li>       
        </div>
    );
}
}
export default Orders;    