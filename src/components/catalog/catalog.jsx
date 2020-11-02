import React, { Component } from "react";
import Product from "./../product/product";
import ProductService from './../../services/productService';
import "./catalog.css";
class Catalog extends Component {

  state = {
    products: [],
    categories: [],
    selectedCategory: ''
  };
  render() {
    let prodsToDisplay = this.state.products;
    //filter the prodsToDisplay
    if(this.state.selectedCategory !== ''){
      prodsToDisplay = prodsToDisplay.filter((prod) => prod.category === this.state.selectedCategory);
    }

    console.log(prodsToDisplay);
    return (
      <div className="catalog-page">
        <div>
          <br />
          <h1>Catalog of products</h1>
          <hr />
            

            <div className="categories">

            <div
            onClick={() => this.selectCategory('')}
            key={''}
            className="btn-category">
            All Products

            </div>

              { this.state.categories.map((category) => 
              <div onClick={ () => this.selectCategory(category)} 
              key={category}
              className="btn-category">
              {category}</div> )}
            </div>

            {prodsToDisplay.map((p) => { return <Product data={p} key={p.id}></Product>})}
 
        </div>
      </div>
    );
  }

  selectCategory = (category) =>{
    console.log(category);
    this.setState({selectedCategory:category});
  }
   async componentDidMount(){
    console.log("Load data here");
    let service = new ProductService();
    const data = await service.getProducts();
    this.setState({products: data});
    console.log(data);

    //identify the unique categories
    let categories = [];
 
    for(let i = 0; i< data.length; i++){
      let product = data[i];    
      if(!categories.includes(product.category)){
        categories.push(product.category);
      }
    }    
       

    // categories = categories.sort(() => {});
    //sORT YOUR categories array

    categories.sort();

    //set it to the state
    this.setState({categories: categories});
  }


}

export default Catalog;
