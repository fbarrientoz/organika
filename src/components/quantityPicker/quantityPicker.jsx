import React, { Component } from 'react';//imrc
class QuantityPicker extends Component { //cc  
    state = { 
        quantity:1,
        minimmum:1,
    };
    render() { 
        return ( 
            // <React.Fragment>
            <div className="quantityPicker">
                <button 
                    disabled={ this.state.quantity === this.state.minimmum }
                    onClick={this.decrease} 
                    className="btn btn-sm btn-info"
               >
                 -
                </button>
                <label className="quantity">{this.state.quantity}</label>
                <button onClick={this.increase} className="btn btn-sm btn-info">+</button>
            </div>         
         );
    }

    increase = ()  => {
        let current = this.state.quantity;
        current += 1;
        this.setState({ quantity: current });
    };

    decrease = ()  => {
        let current = this.state.quantity;
        if(current !== this.state.minimmum){
            current -= 1;
            this.setState({ quantity: current });
        }        
    };
}
 
export default QuantityPicker;