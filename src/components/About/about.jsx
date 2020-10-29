import React, { Component } from 'react';
class About extends Component {
    state = { 
        emailVisible:false
     }
    render() { 
        return ( 
            <div>
            
                <h1>My name is Fabiola</h1>   
        <button  onClick={this.onButtonClicked} class="btn btn-info">{this.state.emailVisible ? "Hide email" : "Show email"}</button><br></br>
               {
                   this.getEmailText()
               }

               
            </div>
           
            
         );
    }

    getEmailText = () => {
        if(this.state.emailVisible){
            return <a href="mailto:fbarrientos@uabc.ed.com">fbarrentos@uabc.edu.mx</a>
        } else
         return "Click the button to see my email"
    };
    onButtonClicked = () => {
        //Update the state
        this.setState({emailVisible: !this.state.emailVisible})
    };
}
 
export default About;