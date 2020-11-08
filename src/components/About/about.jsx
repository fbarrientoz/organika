import React, { Component } from 'react';
import "./about.css";


class About extends Component{
    state = {
        emailVisible: false
    }

    render(){
        return(
        <div className="jumbotron">
            <h4 className="display-4">About Us</h4>
            <h2>by: Fabiola Barrientos</h2>            
            <hr className="my-4"></hr>
            <p>Send a eimail</p>

            {this.getEmailText()}

            <button className="btn btn-primary btn-lg"
             onClick={this.onButtonClicked} >{this.state.emailVisible ? "Hide email": "Show email"}</button>
        </div>
        );
    }

    getEmailText(){
        if(this.state.emailVisible){
            return(
               <div>
                   <h5 className="card-title">Contact Information</h5>
                        <a href="mailto:contactMe@organicbeans.com">fbarrientos@organika.com</a>
               </div>
           
            );
        }
        return <label>Click the button to see my email</label>
    }

    onButtonClicked = () => {
     
        this.setState({emailVisible: !this.state.emailVisible});

    }
}
export default About;