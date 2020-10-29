import React, { Component } from 'react';//imrc
import "./navbar.css";
import { Link } from 'react-router-dom' 
class NavBar extends Component { //cc
  
    render() { 
        return ( 
            // <div className="test">Nav maenu will be here</div>            
            //     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            //     <Link className="navbar-brand" to="/">Organika</Link>
            //     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            //         <span className="navbar-toggler-icon"></span>
            //     </button>
            //     <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            //         <div className="navbar-nav">
            //             <Link className="nav-link" to="/">Home</Link>
            //             <Link className="nav-link" to="/catalog">Catalog</Link>
            //             <Link class="nav-link" to="/todo">Todo List</Link>    
            //             <Link class="nav-link" to="/about">About me</Link>                 
            //         </div>
                   
            //     </div>
            //  </nav>
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
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                    <button className="btn btn-success my-2 my-sm-0" type="button">Search</button>
                    </div>
                </div>
             </nav>
         );
    }
}
 
export default NavBar;