import React, { Component } from 'react';
import Product from '../product/product';
import "./catalog.css";
import ProductService from '../../services/productService';



class Catalog extends Component{

    state = {
        products: [],
        catagories: [],
        selectedCategory: ''
    };
    
      render() {

        let prodsToDisplay = this.state.products;

        if(this.state.selectedCategory !== ''){
            prodsToDisplay = prodsToDisplay.filter((prods) => prods.category === this.state.selectedCategory);
        }

        return (
            <div className="catalog-page">
                
                <div className="catagories">
                <div className="searchCategories">
                    <h4 className="shopLabel">Sort By</h4>
                    <h2 id="catTitle" className="categoryTitle"><b>Categories</b></h2>
                </div>

                <div id="buttons">
                    <button 
                        onClick={() => this.selectCategory('')}
                        key = {''}
                        id="buttonAll">All Products
                    </button>


                        { this.state.catagories.map((c) => 
                            <button 
                                key={c}
                                onClick={() => this.selectCategory(c)} id="buttonC">{c}
                            </button>)}
                </div>
                </div>

                <div>
                    <div className="searchCategories">
                        <h4 className="shopLabel">Shop By</h4>
                        <h3 className="categoryTitle">Featured Products</h3>
                    </div>
                    {prodsToDisplay.map((p) => <Product data={p} key={p.id}></Product>)} 
                </div>
            </div>
        );
    }

    selectCategory = (cat) => {
        this.setState({selectedCategory: cat});
    }
    
   
    async componentDidMount() {
      
        let service = new ProductService();
        const data = await service.getProducts();
        this.setState({products: data});



      
        let catagories = [];

   
        for(let i = 0; i < data.length; i++){
            let element = data[i];

            if(!catagories.includes(element.category)){
                catagories.push(element.category);
            }
        }

       
        catagories = catagories.sort();

        console.log(catagories);

        this.setState({catagories: catagories}); 
    }
}

export default Catalog;
