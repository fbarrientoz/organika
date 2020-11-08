import React, { Component } from 'react';
import { connect } from "react-redux";
import "./cart.css";


import { incrementCartCounter } from '../../store/actions/actions';
import ProductinCart from './../productinCart/productinCart';





class Cart extends Component{
    state = {
        emailVisible: false
    }

    render(){
        return(
        <div className="jumbotron">
            <h1 className="display-4">Cart</h1>
                {this.props.cart.map((p) => <ProductinCart data={p} key={p.product.id}></ProductinCart>)}
        </div>
        );
   
    }

    onBtnClicked = () => {
       
        console.log("Button Clicked")
        this.props.incrementCartCounter();
    }

}


const mapStateToProps = (state) => {
    return {
        cart: state.cart 
    }
};


export default connect(mapStateToProps, { incrementCartCounter })(Cart);