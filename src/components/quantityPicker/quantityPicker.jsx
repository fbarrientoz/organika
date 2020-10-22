import React, { Component } from 'react';//imrc
class QuantityPicker extends Component { //cc  
    state = { 
        quantity:1,
    };
    render() { 
        return ( 
            // <React.Fragment>
            <div>
                <button className="btn btn-sm btn-info">-</button>
                <label className="quantity">{this.state.quantity}</label>
                <button onClick={this.increase} className="btn btn-sm btn-info">+</button>
            </div>         
         );
    }

    increase = ()  => {
        console.log("The user clickede");
        let val = this.state.quantity;
        val += 1;
        this.setState({ quantity: val });
    };
}
 
export default QuantityPicker;