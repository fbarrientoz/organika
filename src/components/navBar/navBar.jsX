import React, { Component } from "react"; //imrc short
import { connect } from "react-redux";
import "./navbar.css";
import { Link } from 'react-router-dom';

//cc short
class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="navMain">
          <nav className="navbar navbar-expand-lg navbar-custom">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">               
                <Link className="navbar-brand" to="/#">Organi[k]a</Link>
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                 <li className="nav-item active">
                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item active">
                <Link className="nav-link" to="/catalog">Catalog</Link>
                 </li>
                <li className="nav-item active">
                <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item active">
                <Link className="nav-link" to="/todo">Todo List</Link>
                </li>
                </ul>
            <div className="form-inline my-2 my-lg-0">
           
              <Link className="btn btn-secondary my-2 my-sm-0" to="/cart">
                View cart
                <span className="badge badge-success cart-badge">{this.props.count}</span>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </React.Fragment> 
    );
  }
}

const mapStateToProps = (state) => {
  return {
    test: 'this is a test',
    count: state.cart.length,
  }
}


export default connect(mapStateToProps,null)(NavBar);
