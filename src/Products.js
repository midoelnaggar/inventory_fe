import React from "react";

class Products extends React.Component {


render(){
    return(
        <div className="products">
            <li>Product name: {this.props.productName} Product quantity: {this.props.productQuantity}</li>       
        </div>
    );
}
}
export default Products;    