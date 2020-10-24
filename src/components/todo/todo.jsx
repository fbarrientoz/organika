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
                    <input type="text" onChange={this.handleTextChange} value={this.state.todoText} placeholder="Todo text"></input>
                    <button onClick={this.AddText}>Add</button>                
                </div>

                <div>
                    <ul>
                        {this.state.todos.map((text) => <li key={text}>{text}</li> ) }
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
