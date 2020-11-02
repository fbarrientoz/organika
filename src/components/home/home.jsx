import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="jumbotron">
                <h1>Inicio Page</h1>
                <Link type="button" to="/catalog" class="btn btn-info">Check out the catalog</Link>
            </div>
         );
    }
}
 
export default Home;