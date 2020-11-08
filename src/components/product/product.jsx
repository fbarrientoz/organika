import React, { Component } from 'react';
import { connect } from "react-redux";
import QuantityPicker from '../quantityPicker/quantityPicker';
import { addProductToCart } from "../../store/actions/actions";
import "./product.css";

class Product extends Component{
    state = {
        amount: 1
    }

    render() {
        return (
            <React.Fragment>
                <div className="product">
           
                    <img src={"/products/" + this.props.data.image} id="foodImg" alt="" width="200px" height="200px"></img>
                    <div id="productMain">
                        <h1><b>{this.props.data.title}</b></h1>
                    </div>
                    <div id="productPrice">
                        <h5><b>Price:</b> ${this.props.data.price}</h5>
                        <h5><b>Total:</b> ${this.getTotal()}</h5>
                    </div>
                    <div id="addSection">
                        <QuantityPicker 
                        minimum={this.props.data.minimum || 1} 
                        onValueChange={ (qnty) => this.handleQuantityChange(qnty)} id="picker">
                        </QuantityPicker>
                        <div>
                            <button className="btn btn-success btn_cart" onClick={this.addClicked}>+ Add</button>
                        </div>
                    </div>
                 </div>
            </React.Fragment>     
        );
    }

    getTotal = () => {
        let total = this.props.data.price * this.state.amount;
        return total.toFixed(2);
    }

    
    handleQuantityChange = (quantity) =>  {
        console.log("Quantity changed ", quantity);
        this.setState({amount: quantity});
    };

    addClicked = () => {
        console.log('Add Product Clicked!!');

          const addedProduct = {
            product: this.props.data,
            quantity: this.state.amount
        };

    
        this.props.addProductToCart(addedProduct);
    } 
    
}



export default connect(null, { addProductToCart })(Product);