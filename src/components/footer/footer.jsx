import React, { Component } from 'react';
import "./footer.css";



class Footer extends Component {

    render() { 
        return (
        <React.Fragment>
            <div>
            <footer class="footer bg-dark">
                <div class="container">
                    <div class="row">
                    <div class="col-lg-6 h-100 text-center text-lg-left my-auto">
                        <ul class="list-inline mb-2">
                        <li class="list-inline-item">
                            <a href="#">Home</a>
                        </li>
                        <li class="list-inline-item">&sdot;</li>
                        <li class="list-inline-item">
                            <a href="#">Catalog</a>
                        </li>
                        <li class="list-inline-item">&sdot;</li>
                        <li class="list-inline-item">
                            <a href="#">About Us</a>
                        </li>
                        <li class="list-inline-item">&sdot;</li>
                        <li class="list-inline-item">
                            <a href="#">Todo list</a>
                        </li>
                        </ul>
                        <p class="text-muted small mb-4 mb-lg-0">&copy; Organi[k]a. All Rights Reserved.</p>
                    </div>
                    <div class="col-lg-6 h-100 text-center text-lg-right my-auto">
                        <ul class="list-inline mb-0">
                        <li class="list-inline-item mr-3">
                            <a href="#">
                            <i class="fa fa-facebook fa-2x fa-fw"></i>
                            </a>
                        </li>
                        <li class="list-inline-item mr-3">
                            <a href="#">
                            <i class="fa fa-twitter fa-2x fa-fw"></i>
                            </a>
                        </li>
                        <li class="list-inline-item">
                            <a href="#">
                            <i class="fa fa-instagram fa-2x fa-fw"></i>
                            </a>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                </footer>
            </div>
        </React.Fragment>
        );
    }
}
 
export default Footer;