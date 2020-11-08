import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./home.css";

class Home extends Component{

    render(){
        return(
        <div>
            <div className="jumbotron">
                <h1 className="display-4">Welcome to Organi[k]a</h1>
                <Link className="btn btn-primary btn-lg" to="/catalog" role="button">View Catalog</Link>
                
            </div>
            <section class="features-icons bg-light text-center">
                <div class="container">
                    <div class="row">
                    <div class="col-lg-4">
                        <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                        <div class="features-icons-icon d-flex">
                            <i class="fas fa-apple-alt icon-screen-desktop m-auto text-primary"></i>
                        <i class="fas fa-apple-alt"></i>
                        </div>
                        <h3>Catalog</h3>
                        <p class="lead mb-0">This theme will look great on any device, no matter the size!</p>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                        <div class="features-icons-icon d-flex">
                            <i class="icon-layers m-auto text-primary"></i>
                        </div>
                        <h3>About</h3>
                        <p class="lead mb-0">Featuring the latest build of the new Bootstrap 4 framework!</p>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="features-icons-item mx-auto mb-0 mb-lg-3">
                        <div class="features-icons-icon d-flex">
                            <i class="icon-check m-auto text-primary"></i>
                        </div>
                        <h3>To do List</h3>
                        <p class="lead mb-0">Ready to use with your own content, or customize the source files!</p>
                        </div>
                    </div>
                    </div>
                </div>
              </section>
              <div>
              <div class="container py-3">
                    <div class="title h1 text-center">Lorem ipsum</div>
                    <div class="card">
                        <div class="row ">

                        <div class="col-md-7 px-3">
                            <div class="card-block px-6">
                            <h4 class="card-title">View our catalog</h4>
                            <p class="card-text">
                               Lorem ipsum
                            </p>
                            <p class="card-text">Made for usage, commo</p>
                            <br></br>
                            <a href="#" class="mt-auto btn btn-primary  ">Read More</a>
                          </div>
                        </div>
                        <div class="col-md-5">
                            <div id="CarouselTest" class="carousel slide" data-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-target="#CarouselTest" data-slide-to="0" class="active"></li>
                                <li data-target="#CarouselTest" data-slide-to="1"></li>
                                <li data-target="#CarouselTest" data-slide-to="2"></li>

                            </ol>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                <img class="d-block" src="https://picsum.photos/450/300?image=1072" alt=""></img>
                                </div>
                                <div class="carousel-item">
                                <img class="d-block" src="https://picsum.photos/450/300?image=855" alt=""></img>
                                </div>
                                <div class="carousel-item">
                                <img class="d-block" src="https://picsum.photos/450/300?image=355" alt=""></img>
                                </div>
                                <a class="carousel-control-prev" href="#CarouselTest" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                                <a class="carousel-control-next" href="#CarouselTest" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>

                   
                    
                    <br></br>
                    <br></br>
 
              </div>
             
              
            
            
        </div>
        
        );
    }

}
export default Home;