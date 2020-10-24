import React, { Component } from "react";
import Product from "./../product/product";
import ProductService from './../../services/productService';
class Catalog extends Component {

  state = {
    products: []
  };
  render() {
    return (
      <div className="catalog-page">
        <div>
          <br />
          <h1>Catalog of products</h1>
          <hr />

            {this.state.products.map((p) => { return <Product data={p} key={p.id}></Product>})}
 
        </div>
      </div>
    );
  }
  componentDidMount(){
    console.log("Load data here");
    let service = new ProductService();
    const data = service.getProducts();
    this.setState({products: data});
  }


}

export default Catalog;
