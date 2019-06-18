import React from "react"
import {connect} from "react-redux"
import {addTask} from "../actions/action"


class ToDoList extends React.Component {
    state={
        task:""
    }

    changeHandler = event => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    render(){
        console.log(this.props)
        console.log(this.props.addTask)
        return(
            
            <>
            Hello from todoList!
           {this.props.todos.map(task => 
                <h4>{task.value}</h4>
                )}
                <input 
                type="text"
                placeholder="Enter New Task"
                value={this.state.task}
                name="task"
                onChange={this.changeHandler}
                />
                {/* <button> */}
            <button onClick = {()=>{this.props.addTask(this.state.task)}}>
                Submit
            </button>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps, {addTask})(ToDoList)