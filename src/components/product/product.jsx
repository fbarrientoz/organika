import React, { Component } from 'react';
import QuantityPicker from './../quantityPicker/quantityPicker';
import "./product.css";
import { connect } from 'react-redux';
import { addProductToCart } from '../../store/actions/actions';
class Product extends Component {
    state = { 
        quantity:1
     }
    render() { 
        return ( 
            <div className="product">
                 <img src={"/products/" + this.props.data.image} alt=""></img>
                <h4>{this.props.data.title}</h4>  
                <div className="prices" >
                    <h5>Total: ${this.getTotal()}</h5>
                    <h6>Price ${this.props.data.price}</h6>
                </div>  
                <div className="controls">                    
                    <QuantityPicker minimum = {this.props.data.minimum || 0 } onValueChange={(qnty) => this.handleQuantityChange(qnty)}></QuantityPicker>
                    <button className="btn btn-sm btn-info" onClick ={this.addClicked}>Add</button>    
                </div>
        
            </div>
         );
    }


   addClicked =() =>{
       console.log("Dispatching action");
       const addedProduct = {
        product:this.props.data,
        quantitu:this.state.quantity
       };
       this.props.addProductToCart(addedProduct);
   }; 
 getTotal = () =>
 {
     let total = this.props.data.price * this.state.quantity;
     return total.toFixed(2);
 };
    handleQuantityChange = (quantity) =>{
        console.log("Qnty changed", quantity);
        this.setState({quantity:quantity});
    };
}
 
export default connect(null, { addProductToCart}) (Product);