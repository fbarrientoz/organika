import React, { Component } from 'react';
import { connect } from "react-redux";
import "./todo.css";


import { addTodo } from '../../store/actions/actions';
import { removeTodo } from '../../store/actions/actions';


class Todo extends Component {
    state = { 
        todoText: "",
        id: 0,
    }

    render() { 
        return ( 
            <div id="todoHead">
                <h5 id="todoTitle">Shop list</h5>
                <h5 id="todoMessage">Add the item?</h5>
                <div className="inputField">
                    <input type="text" 
                    value={this.state.todoText}
                    onChange={this.handleTextChange} 
                    placeholder="Todo Task"/>
                    <button className="btn btn-success" onClick={this.addOnClick}>Add</button>
                </div>

                <div id="todoSec">
                   
                        {this.props.todo.map((d) => <div className="todoItem" key={d.id}>
                            <h5 className="taskName">{d.task}</h5>
                            <button  onClick={() => this.deleteOnClick(d)} className="btn btn-secondary">Delete Task</button>
                        </div>
                        )}
                </div>
            </div>
         );
    }

    handleTextChange = (event) => {
        this.setState({todoText: event.target.value});
    }


    addOnClick = () => {

     
        const todoObj = {
            task: this.state.todoText,
            id: this.state.id + 1,
        };

    
        this.props.addTodo(todoObj);

        var counter = this.state.id + 1;

        this.setState({ todoText: ""}); 
        this.setState({ id: counter});
        
    }
    

    deleteOnClick = (todo) => {

   
        this.props.removeTodo(todo);
    }
}


const mapStateToProps = (state) => {
    return {
        todo: state.todo 
    }
};
 
export default connect(mapStateToProps, { addTodo, removeTodo })(Todo);


