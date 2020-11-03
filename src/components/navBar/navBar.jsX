import React, { Component } from 'react';//imrc
import "./navbar.css";
import { Link } from 'react-router-dom'; 
import { connect } from 'react-redux';
class NavBar extends Component { //cc
  
    render() { 
        return ( 

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">Organi[k]a</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/catalog">Catalog</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/todo">Todo List</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/about">About me</Link>
                    </li>
                    </ul>
                    <div className="form-inline my-2 my-lg-0">
                    <Link className="btn btn-outline-info my-2 my-sm-0" to="/cart">
              <i className="fa fa-shopping-cart cart-icon" aria-hidden="true"></i>
             
              {this.props.test}
              <span className="badge badge-primary cart-badge">
              {this.props.cont}
              </span>
            </Link>

                    </div>
                </div>
             </nav>
         );
    }
}
 
const mapStateToProps = (state) => {
    return{
        test: 'View car',
        count: state.cart.length,
    }
};
export default connect(mapStateToProps, null) (NavBar);