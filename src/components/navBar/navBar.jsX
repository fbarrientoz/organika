import React, { Component } from 'react';//imrc
import "./navbar.css";
class NavBar extends Component { //cc
  
    render() { 
        return ( 
            // <div className="test">Nav maenu will be here</div>            
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        
                        <a className="nav-link" href="#">Catalog</a>
                        <a className="nav-link" href="#">Register</a>                    
                    </div>
                </div>
             </nav>
         );
    }
}
 
export default NavBar;