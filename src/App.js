import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './components/navBar/navBar';
import Footer from './components/footer/footer';
import QuantityPicker from './components/quantityPicker/quantityPicker';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
        <div className="container"> 
          <h1>Hello there</h1>
          <button className="btn btn-danger">Test</button>
          <br/>
          <QuantityPicker></QuantityPicker>
        </div>
        <Footer></Footer>
    </div>
  );
}

export default App;
