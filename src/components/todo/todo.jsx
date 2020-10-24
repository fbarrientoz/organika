import React, { Component } from 'react';

class Todo extends Component {
    state = { 
        todos: [], 
        todoText:"" 
    };

    render() { 
        return ( 
            <div>
                 <h5>Simple todo app</h5>
                <div>              
                    <div className="form-inline align-items-center">
                    <input type="text" className="form-control" onChange={this.handleTextChange} value={this.state.todoText} placeholder="Todo text"></input>
                    <button className="btn btn-small btn-info" onClick={this.AddText}>Add</button>                
                    </div>
                    
                </div>

                <div>
                    <ul className="list-group list-group-flush">
                        {this.state.todos.map((text) => <li className="list-group-item" key={text}>{text}</li> ) }
                    </ul>
                </div>

                
            </div>
         );
    }

    AddText=() => {
        //console.log(this.state.todoText);        
        var todoList =this.state.todos;
        todoList.push(this.state.todoText);        
        this.setState({todos: todoList});
        this.setState({todoText: ""});        
    }
    handleTextChange = (event) => {
        this.setState({ todoText: event.target.value });
    } 
}
 
export default Todo;
