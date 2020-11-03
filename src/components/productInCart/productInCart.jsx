import React, { Component } from 'react';
import { connect } from "react-redux";
import { removeProductInCart } from "../../store/actions/actions";
import "./productinCart.css";
class ProductinCart extends Component {
    state = {};
 
    render(){
        return (
            <React.Fragment>
                <div id="cart-display">
                    <div id="img-display">
                        <img src={"/images/products/" + this.props.data.product.image} id="cartImg" alt="" width="200px" height="200px"/>
                    </div>
                    <div id="cart-main">
                        <h1><b>{this.props.data.product.title}</b></h1>
                        <p><b>Quantity:</b>{this.props.data.quantity}</p>
                        <h5><b>Unit Price:</b>${this.props.data.product.price}</h5>
                    </div>
                    <div id="cart-total">
                        {/* <h5 id="displayTotal"><b>Item Total:</b> ${this.props.data.product.price * this.props.data.quantity}</h5> */}
                        <button onClick={this.removeClicked} className="btn btn-warning">Delete from Cart</button>
                    </div>
                </div>
            </React.Fragment> 
        );
    }


    removeClicked = () => {
        console.log('Remove Product Clicked!');
        var productRemove = {
            product: this.props.data.product,
            quant: this.props.data.quantity
        };

    
        this.props.removeProductInCart(productRemove);
    }
}

export default connect(null, { removeProductInCart })(ProductinCart);