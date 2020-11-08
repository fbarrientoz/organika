import React, { Component } from 'react';
import "./quantityPicker.css";


class QuantityPicker extends Component {

  
    state = {
        quantity: this.props.minimum, 
        minimum: this.props.minimum,
    }

    render() { 
        return (
            <div>
                <button 
                    disabled={this.state.quantity === this.state.minimum}
                    onClick={this.decrease} 
                    className="btn btn-sm btn-info" id="minusBtn"
                >
                    -
                </button>
                <label className="quantity" id="quantity">{this.state.quantity}</label>
                <button onClick={this.increase} id="plusBtn" className="btn btn-sm btn-info">+</button>
            </div>

        );
    }


    increase = () => {

        //1) Clone the state
        let val = this.state.quantity;
    
        val += 1; 
      
        this.setState({ quantity: val }); 
     
        this.props.onValueChange(val);
    }


    decrease = () => {

    
        let val = this.state.quantity;
        let min = this.state.minimum;
   
        if(val !== min){
            val -= 1; 
      
            this.setState({ quantity: val }); 
      
            this.props.onValueChange(val);
        } 
    }
}
 
export default QuantityPicker;