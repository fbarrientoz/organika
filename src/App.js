import React from "react";
import "./App.css";
import NavBar from "./components/navBar/navBar";
import Footer from "./components/footer/footer";
import Catalog from "./components/catalog/catalog";
import Home from "./components/home/home";
import About from "./components/about/about";
import Todo from "./components/todo/todo";
import Cart from "./components/cart/cart";

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar></NavBar>

        <div>
          <div id="catalogDis">
            <Switch>           
              <Route path="/" exact component={Home}></Route>          
              <Route path="/catalog" component={Catalog}></Route>             
              <Route path="/todo" component={Todo}></Route>      
              <Route path="/about" component={About}></Route>             
              <Route path="/cart" component={Cart}></Route>
            </Switch>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
