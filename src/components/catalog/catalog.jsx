import React, { Component } from 'react';
import Product from './../product/product';
class Catalog extends Component {
    state = {  }
    render() { 
        return (
            <div className="catalog-page">
                <div>
                    <br/>
                    <h1>Catalog of products</h1>
                    <hr />
                    <Product></Product>
                    <Product></Product>
                    <Product></Product>
                    <Product></Product>
                    <Product></Product>
                    <Product></Product>
                    <Product></Product>
                    <Product></Product>
                    <Product></Product>
                </div>
            </div>
          );
    }
}
 
export default Catalog;