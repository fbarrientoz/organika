import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './components/navBar/navBar';
import Footer from './components/footer/footer';
import Product from './components/product/product';
import Catalog from './components/catalog/catalog';
import Todo from './components/todo/todo';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
        <div className="container"> 
        <Catalog></Catalog>
        <hr></hr>
        <Todo></Todo>

        
        </div>
        <Footer></Footer>
    </div>
  );
}

export default App;
